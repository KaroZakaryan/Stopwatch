import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './FlexText.scss';

const FlexText = ({ className, children, variant }) => {
  const Tag = variant;
  const titleClasses = classNames(styles.title, {
    [className]: className,
  });

  return <Tag className={titleClasses}>{children}</Tag>;
};

FlexText.defaultProps = {
  variant: 'h1',
  className: '',
};

FlexText.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FlexText;
