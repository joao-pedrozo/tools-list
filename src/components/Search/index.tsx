import { ChangeEventHandler, FC } from 'react';
import * as S from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Search = ({ handleChange, value }: SearchProps) => {
  return (
    <S.Wrapper>
      <AiOutlineSearch color="#B1ADB9" size={24} />
      <S.Input
        placeholder="Digite o que está procurando..."
        onChange={handleChange}
        value={value}
      />
    </S.Wrapper>
  );
};

export default Search;
