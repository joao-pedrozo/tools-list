import * as S from '../styles/home';
import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

import Search from '../components/Search';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Card from '../components/Card';

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
          <S.InlineToolingSearchArea>
            <Search value={value} handleChange={onInputChange} />
            <Checkbox
              labelText="teste"
              checked={isChecked}
              handleChange={onCheckboxChange}
            />
          </S.InlineToolingSearchArea>

          <Button>Add</Button>
        </S.InlineTooling>

        <Card>
          <S.CardHeader>
            <S.ToolTitle href="#">Notion</S.ToolTitle>
            <S.RemoveTool>
              <GrFormClose size={20} />
              <span>Remove</span>
            </S.RemoveTool>
          </S.CardHeader>
          <S.ToolDescription>
            All in one testing random word lmao what I mean is that like just
            rolling you know what I'm saying
          </S.ToolDescription>
          <S.ToolTagsWrapper>
            <strong>#teste</strong>
            <strong>#lorem</strong>
            <strong>#episum</strong>
            <strong>#ametsu</strong>
            <strong>#et</strong>
            <strong>#joao</strong>
          </S.ToolTagsWrapper>
        </Card>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
