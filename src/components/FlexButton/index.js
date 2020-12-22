import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from 'utils/index';

import styles from './FlexButton.scss';

const FlexButton = ({
  className,
  disabled,
  children,
  onClick,
  ...restProps
}) => (
  <button
    type="button"
    disabled={disabled}
    {...restProps}
    onClick={onClick}
    className={classNames(styles.container, {
      [className]: className,
    })}
  >
    {children}
  </button>
);

FlexButton.defaultProps = {
  className: '',
  onClick: noop,
  disabled: false,
};

FlexButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default FlexButton;
