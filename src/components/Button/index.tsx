import * as S from './styles';

export interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
