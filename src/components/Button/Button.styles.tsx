import styled from '@emotion/styled';

interface Props {
  typeColor: any;
  gradient: boolean;
}

const ButtonStyled = styled.button<Props>`
  //background: ${(props: any) => props.theme.colors.primaryGradient};
  background: ${(props: any) =>
    props.theme.colors[`${props.typeColor}${props.gradient ? 'Gradient' : ''}`]};
  //background: ${(props: any) => props.theme.colors[`secondaryGradient`]};
  color: #fefffe;
  border: none;
  padding: 3px 10px 3px 10px;

  -webkit-box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
`;

export { ButtonStyled };
