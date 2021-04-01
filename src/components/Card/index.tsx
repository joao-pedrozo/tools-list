import * as S from './styles';

export interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <S.Wrapper className="card-wrapper">{children}</S.Wrapper>;
};

export default Card;
