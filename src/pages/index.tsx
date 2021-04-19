import * as S from '../styles/home';
import React, { useEffect, useState } from 'react';

import Search from '../components/Search';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import AddToolModal from '../components/AddToolModal';
import ToolsList from '../components/ToolsList';

import { useTools } from '../hooks/tools';

export interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [showAddToolModal, setShowAddToolModal] = useState(false);
  const { fetchTools, tools } = useTools();
  useEffect(() => {
    fetchTools();
  }, []);

  const onCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  const handleAddTool = () => {
    setShowAddToolModal(prev => !prev);
  };

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>VUTTR</S.Title>
        <S.Subtitle>Very Useful Tools to Remember</S.Subtitle>
        <S.InlineTooling>
          <S.InlineToolingSearchArea>
            <Search isTagOnlySearch={isChecked} />
            <Checkbox
              labelText="Search in tags only"
              checked={isChecked}
              handleChange={onCheckboxChange}
            />
          </S.InlineToolingSearchArea>

          <Button onClick={handleAddTool}>Add</Button>
        </S.InlineTooling>
        {tools.length ? (
          <ToolsList tools={tools} />
        ) : (
          <span style={{ marginTop: '10px' }}>No tools founded.</span>
        )}
      </S.ContentWrapper>
      <AddToolModal
        showModal={showAddToolModal}
        setShowModal={setShowAddToolModal}
      />
    </S.Wrapper>
  );
}
