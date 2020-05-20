import { css } from 'styled-components';

const buttonStyles = css`
  background-color: #FF9B21;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;;
  font-weight: bold;
  padding: 0.5em 2em;
  outline: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;

  &:active {
    background-color: #DD861C;
  }
`;

export default buttonStyles;
