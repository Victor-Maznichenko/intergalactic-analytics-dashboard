import { useRef, useEffect } from 'react';
import styles from './styles.module.scss';

export const CircleLoader = ({ percent = 50 }) => {
  const progressCircleRef = useRef<SVGCircleElement>(null);
  const CIRCUMFERENCE = 2 * Math.PI * 45; // ≈282.743

  useEffect(() => {
    // Устанавливаем прогресс один раз при монтировании
    const offset = CIRCUMFERENCE * (1 - percent / 100);
    if (progressCircleRef.current) {
      progressCircleRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [percent, CIRCUMFERENCE]);

  return (
    <svg className={styles.circleLoader} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--white)" strokeWidth="5" />
      <circle
        ref={progressCircleRef}
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="var(--green-1)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
    </svg>
  );
};
