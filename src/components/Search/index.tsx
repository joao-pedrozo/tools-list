import { FC } from 'react';
import * as S from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <S.Wrapper>
      <AiOutlineSearch color="#B1ADB9" />
      <S.Input placeholder="Digite o que está procurando..." />
    </S.Wrapper>
  );
};

export default Search;
