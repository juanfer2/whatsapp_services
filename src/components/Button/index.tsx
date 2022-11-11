import React from 'react';
import { ButtonStyled } from './Button.styles';

export interface Props {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'ternary' | 'success' | 'warning' | 'danger';
  gradient?: boolean;
  type?: any;
  onClick?: any;
  loading?: boolean;
  disabled?: boolean;
}

function Button({
  children,
  color,
  onClick,
  type = 'button',
  gradient = false,
  loading = false,
  disabled = false
}: Props) {
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={onClick}
      type={type}
      typeColor={color ?? 'primary'}
      gradient={gradient}>
      {loading ? <>Loading...</> : children}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  children: null,
  color: null,
  onClick: () => {}
};

export default Button;
