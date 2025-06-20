import { Link } from 'react-router-dom';
import { ROUTES } from '../../lib';
import { Icons } from '../icons';
import styles from './styles.module.scss';

type MenuItems = Array<{
  iconName: keyof typeof Icons;
  text: string;
  to: string;
}>;

const MENU_ITEMS: MenuItems = [
  {
    iconName: 'Upload',
    text: 'CSV Аналитик',
    to: ROUTES.Analyst,
  },
  {
    iconName: 'Generator',
    text: 'CSV Генератор',
    to: ROUTES.Generator,
  },
  {
    iconName: 'History',
    text: 'История',
    to: ROUTES.History,
  },
];

export const Menu = () => (
  <nav className={styles.menu}>
    <ul className={styles.menu__list}>
      {MENU_ITEMS.map(({ iconName, text, to }) => {
        const Icon = Icons[iconName];
        return (
          <li>
            <Link className={styles.menu__item} to={to}>
              <Icon />
              <span>{text}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);
