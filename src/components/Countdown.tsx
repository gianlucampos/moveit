import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFineshed,
    isActive,
    startCountDown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFineshed ? (
        <button type="button"
          disabled
          className={styles.countDownButton}
          onClick={resetCountdown}> Ciclo encerrado </button>
      ) :
        <>
          { isActive ? (
            <button type="button"
              className={`${styles.countDownButton} + ${styles.countDownButtonActive}`}
              onClick={resetCountdown}> Abandonar ciclo</button>
          ) : (
            <button type="button" className={styles.countDownButton}
              onClick={startCountDown}> Iniciar um ciclo</button>
          )}

        </>
      }
    </div>
  );
}