import * as S from '../styles/home';
import React, { useState } from 'react';

import Search from '../components/Search';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

export default function Home() {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>VUTTR</S.Title>
        <S.Subtitle>Very Useful Tools to Remember</S.Subtitle>
        <S.InlineTooling>
          <S.InlineToolingSearchArea></S.InlineToolingSearchArea>
          <Search value={value} handleChange={onInputChange} />
          <Checkbox
            labelText="teste"
            checked={isChecked}
            handleChange={onCheckboxChange}
          />
          <S.InlineToolingAddArea></S.InlineToolingAddArea>
          <Button>Add</Button>
        </S.InlineTooling>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
