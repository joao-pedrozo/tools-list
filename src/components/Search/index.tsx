import { ChangeEventHandler, FC } from 'react';
import * as S from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

import { useTools } from '@/hooks/tools';
import { useState } from 'react';

interface SearchProps {
  isTagOnlySearch?: boolean;
}

const Search = ({ isTagOnlySearch = false }: SearchProps) => {
  const { fetchSearch } = useTools();
  const [value, setValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentSearchValue = e.currentTarget.value;

    setValue(currentSearchValue);
    fetchSearch(currentSearchValue, isTagOnlySearch);
  };

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
