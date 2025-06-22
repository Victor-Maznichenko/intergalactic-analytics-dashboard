import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Icons, Menu } from '@/shared/ui';
import { ROUTES } from '@/shared/lib';
import styles from './styles.module.scss';

interface HeaderProps {
  className: string;
}

export const Header = ({ className }: HeaderProps) => (
  <header className={clsx(styles.header, className)}>
    <div className={styles.header__start}>
      <Link to={ROUTES.Analyst}>
        <Icons.Logo />
      </Link>
      <div className={styles.header__tag}>Межгалактическая аналитика</div>
    </div>
    <Menu />
  </header>
);
