import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  kind?: 'primary' | 'danger';
}

const Button = ({ children, kind = 'primary', ...rest }: Props) => {
  return (
    <S.Button kind={kind} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
