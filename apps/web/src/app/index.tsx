/* eslint-disable no-alert */
import { Route, Routes } from 'react-router-dom';
import { Header } from '@/widgets';
import { ROUTES } from '../shared/lib';
import { Analyst, Generator, History, NotFound } from '../pages';
import styles from './styles.module.scss';
import { FileUploader } from '../shared/ui/file-uploader/ui';

export const App = () => (
  <>
    <Header className={styles.header} />
    <main>
      <Routes>
        <Route path={ROUTES.Analyst} element={<Analyst />} index />
        <Route path={ROUTES.History} element={<History />} />
        <Route path={ROUTES.Generator} element={<Generator />} />
        <Route path={ROUTES.NotFound} element={<NotFound />} />
      </Routes>
      <FileUploader onFileAccepted={() => alert('Файл загружен')} />
    </main>
  </>
);
