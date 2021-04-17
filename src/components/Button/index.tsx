import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
