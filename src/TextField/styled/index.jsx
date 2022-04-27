import styled from 'styled-components';
import TextField from '../scss';
// eslint-disable-next-line import/no-unresolved
/* eslint import/no-webpack-loader-syntax: off */
import cssString from '!!raw-loader!./platform.css';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(TextField)`
  ${() => cssString.replaceAll(/\.onex-.[^__]+?[.|\s]/g, handleCssString)}
`;
