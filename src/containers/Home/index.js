import React, { useCallback } from 'react';
import classNames from 'classnames';

import { useStopwatch } from 'hooks/index';
import { ContainerLayout } from 'layouts/index';
import { FlexText, FlexButton } from 'components/index';

import styles from './Home.scss';

const HomeContainer = () => {
  const {
    laps,
    addLap,
    isRunning,
    elapsedTime,
    startTimer,
    stopTimer,
    resetTimer,
  } = useStopwatch();
  const bestLap = Math.min(...laps);
  const worstLap = Math.max(...laps);
  const runningStatus = isRunning ? 'running' : 'stopped';

  const rightActionButtonClasses = classNames(
    styles.buttons__item,
    styles[`buttons__item__${runningStatus}`],
  );

  const leftActionButtonClasses = classNames(
    styles.buttons__item,
    styles.buttons__item__default,
  );

  const renderLaps = useCallback(
    () =>
      laps.map((lap, index) => {
        const isBestLap = lap === bestLap;
        const isWorstLap = lap === worstLap;

        const getLapStatus = () => {
          if (isBestLap && isWorstLap) return;
          if (isBestLap) {
            return 'best';
          }
          if (isWorstLap) {
            return 'worst';
          }
          return null;
        };

        const lapStatus = getLapStatus();

        return (
          <li
            className={classNames(styles.laps__item, {
              [styles[`laps__item__${lapStatus}`]]: lapStatus,
            })}
          >
            Lap {index + 1}
            <span>{+lap.toFixed(1)}s</span>
          </li>
        );
      }),
    [laps],
  );

  return (
    <ContainerLayout>
      <FlexText>Stopwatch App</FlexText>

      <div>
        <FlexText variant="p">{elapsedTime}s</FlexText>
        <div className={styles.buttons}>
          <FlexButton
            disabled={elapsedTime === '0.0'}
            className={leftActionButtonClasses}
            onClick={isRunning ? addLap : resetTimer}
          >
            <FlexText className={styles.buttons__item__text} variant="span">
              {isRunning ? 'Lap' : 'Reset'}
            </FlexText>
          </FlexButton>

          <FlexButton
            className={rightActionButtonClasses}
            onClick={isRunning ? stopTimer : startTimer}
          >
            <FlexText className={styles.buttons__item__text} variant="span">
              {isRunning ? 'Stop' : 'Start'}
            </FlexText>
          </FlexButton>
        </div>
      </div>
      {!!laps.length && <ul className={styles.laps}>{renderLaps()}</ul>}
    </ContainerLayout>
  );
};

export default HomeContainer;
