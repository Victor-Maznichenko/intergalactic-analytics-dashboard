/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icons, Menu } from '@/shared/ui';
import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__start}>
      <a href="#">
        <Icons.Logo />
      </a>
      <div className={styles.header__tag}>Межгалактическая аналитика</div>
    </div>
    <Menu />
  </header>
);
