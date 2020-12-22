import React from 'react';
import Link from 'next/link';

import { paths } from 'routes/index';
import { FlexButton, FlexText } from 'components/index';

import styles from './Error.scss';

const ErrorContainer = () => (
  <div className={styles.container}>
    <FlexText className={styles.container__title}>404</FlexText>
    <Link href={paths.home}>
      <a className={styles.link}>
        <FlexButton>
          <p className={styles.link__text}>Home</p>
        </FlexButton>
      </a>
    </Link>
  </div>
);

export default ErrorContainer;
