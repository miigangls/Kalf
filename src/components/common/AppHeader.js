import React from 'react';
import PropTypes from 'prop-types';
import { Header, Body, Title, Right } from 'native-base';
import colors from '../../constants/colors';

const AppHeader = ({ title, subtitle, right }) => (
  <Header style={{ backgroundColor: colors.primary }}>
    <Body>
      <Title>{title}</Title>
    </Body>
    {right ? <Right>{right}</Right> : null}
  </Header>
);

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  right: PropTypes.node,
};

AppHeader.defaultProps = {
  subtitle: '',
  right: null,
};

export default AppHeader;
