import React from 'react';
import PropTypes from 'prop-types';

const ContainerLayout = ({ children }) => (
  <section>
    <div className="container">{children}</div>
  </section>
);

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerLayout;
