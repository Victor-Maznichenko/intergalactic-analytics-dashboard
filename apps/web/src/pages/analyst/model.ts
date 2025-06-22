/* eslint-disable no-continue */
/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { Status } from '@/shared/lib';
// import { devtools, persist } from 'zustand/middleware';

interface State {
  file: Nullable<File>;
  progress: number;
  status: Status;
  data: Nullable<AggregationData>;
}

interface Actions {
  reset: () => void;
  setFile: (file: State['file']) => void;
  //   setStatus: (status: State['status']) => void;
  getAggregate: (file: State['file'], rows: number) => void;
  setProgress: (progress: State['progress']) => void;
}

async function getAggregateStream(
  file: File,
  rows: number,
  onData: (data: AggregationData) => void,
  signal: AbortSignal,
) {
  const form = new FormData();
  form.append('file', file);

  const res = await fetch(`http://localhost:3000/aggregate?rows=${rows}`, {
    method: 'POST',
    body: form,
    signal,
  });

  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop()!;

    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const obj = JSON.parse(line);
        const sliced = {
          totalSpendGalactic: obj.total_spend_galactic,
          rowsAffected: obj.rows_affected,
          lessSpentAt: obj.less_spent_at,
          bigSpentAt: obj.big_spent_at,
          lessSpentValue: obj.less_spent_value,
          bigSpentValue: obj.big_spent_value,
          averageSpendGalactic: obj.average_spend_galactic,
          bigSpentCiv: obj.big_spent_civ,
          lessSpentCiv: obj.less_spent_civ,
        };
        onData(sliced);
      } catch {
        // пропускаем сломанные JSON'ы
      }
    }
  }
}

const useFileUploaderStore = create<State & Actions>((set) => {
  let currentAbortController: Nullable<AbortController> = null;

  return {
    file: null,
    progress: 0,
    status: Status.Default,
    data: null,
    setFile: (file) =>
      set(() => {
        if (file?.type === 'text/csv' || file?.name.endsWith('.csv')) {
          return { file, status: Status.Uploaded };
        }
        return { file, status: Status.Fail };
      }),

    getAggregate: (file, rows) => {
      if (!file) return;

      // Прерываем предыдущий запрос, если он ещё выполняется
      if (currentAbortController) {
        currentAbortController.abort();
      }

      const abortController = new AbortController();
      currentAbortController = abortController;

      set({ status: Status.Parsing });

      getAggregateStream(
        file,
        rows,
        (data) => {
          // eslint-disable-next-line no-console
          console.log(data);
          set({ data });
        },
        abortController.signal,
      )
        .then(() => {
          // только если это последний активный контроллер
          if (currentAbortController === abortController) {
            set({ status: Status.Parsing });
            currentAbortController = null;
          }
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            // eslint-disable-next-line no-console
            console.log('Запрос отменён');
          } else {
            set({ status: Status.Fail });
          }
        });
    },

    //   setStatus: (status) => set(() => ({ status })),
    setProgress: (progress) => set(() => ({ progress })),
    reset: () =>
      set(() => ({
        file: null,
        progress: 0,
        status: Status.Default,
      })),
  };
});

export const model = { useFileUploaderStore };
