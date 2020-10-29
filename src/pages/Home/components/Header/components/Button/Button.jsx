import styled, { css } from 'styled-components';


const Button = styled.button`
  outlint: 0;
  border: 0;
  cursor: pointer;
  padding:8px 18px;
  font-size: 14px;
  border-radius: 200px;
  border: 4px solid black;

  ${(props) => props.width && css`width: ${props.width};`}

  ${(props) => {
    const style = {
      small: css`
        padding: 8px 18px;
        font-size: 14px;
      `,
      medium: css`
        padding: 12px 18px;
        font-size: 16px;
      `,
      large: css`
        padding: 16px 18px;
        font-size: 24px;
      `,
    }[props.size || 'medium'];

    return style;
  }}

  ${(props) => {
    const style = {
      primary: css`
        background: #3385ff;
        color: white;
      `,
      secondary: css`
        background: #ffffff;
        color: #008fb4;
      `,
      success: css`
        background: #5EDEFC;
        color: white;
      `,
    }[props.variant];

    return style;
  }}

  ${(props) => props.disabled && css`
    cursor: not-allowed;
    filter: grayscale(0.3);
  `}
`;

export default Button;
