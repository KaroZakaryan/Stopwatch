import React from 'react';
import App from 'next/app';
import PropTypes from 'prop-types';
import withError from 'next-with-error';
import NextNprogress from 'nextjs-progressbar';

import 'styles/index.global.scss';

import ErrorPage from './404';

const StopwatchApp = ({ Component, pageProps }) => (
  <>
    <NextNprogress
      height="4"
      color="#d43f8d"
      options={{ showSpinner: false }}
    />
    <Component {...pageProps} />
  </>
);

StopwatchApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

StopwatchApp.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default withError(ErrorPage)(StopwatchApp);
