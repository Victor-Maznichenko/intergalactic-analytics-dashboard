import { Highlight } from '@/shared/ui/highlight';
import { model } from '../../model';
import styles from './styles.module.scss';
import { Status } from '@/shared/lib';

const formatDate = (day: number) =>
  new Date(2025, 3, day).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  });

export const Highlights = () => {
  const data = model.useFileUploaderStore((state) => state.data);
  const status = model.useFileUploaderStore((state) => state.status);
  const isUploaded = status === Status.Uploaded;

  if (!data && isUploaded) {
    return (
      <div className={styles.highlights2}>
        <p>
          Здесь <br /> появятся хайлайты
        </p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const {
    bigSpentAt,
    lessSpentAt,
    bigSpentCiv,
    rowsAffected,
    lessSpentCiv,
    bigSpentValue,
    totalSpendGalactic,
    averageSpendGalactic,
  } = data ?? {};

  return (
    <div className={styles.highlights}>
      <Highlight description="общие расходы в галактических кредитах" value={totalSpendGalactic ?? 0} />
      <Highlight description="цивилизация с минимальными расходами" value={lessSpentCiv} />
      <Highlight description="количество обработанных записей" value={rowsAffected} />
      <Highlight description="день года с максимальными расходами" value={formatDate(bigSpentAt)} />
      <Highlight description="день года с минимальными расходами" value={formatDate(lessSpentAt)} />
      <Highlight description="максимальная сумма расходов за день" value={bigSpentValue} />
      <Highlight description="цивилизация с максимальными расходами" value={bigSpentCiv} />
      <Highlight description="средние расходы в галактических кредитах" value={averageSpendGalactic} />
    </div>
  );
};
