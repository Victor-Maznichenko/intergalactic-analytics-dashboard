import clsx from 'clsx';
import styles from './styles.module.scss';

interface HighLightProps {
  value: string | number;
  description: string;
  className?: string;
}

export const Highlight = ({ value, description, className }: HighLightProps) => (
  <article className={clsx(styles.highlight, className)}>
    <h4 className={styles.highlight__title}>{value}</h4>
    <p className={styles.highlight__description}>{description}</p>
  </article>
);
