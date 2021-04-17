import * as S from '../styles/home';
import React, { useEffect, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

import Search from '../components/Search';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Card from '../components/Card';
import AddToolModal from '../components/AddToolModal';

import api from '../services/api';

interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/tools');
      console.log(response);
      setTools(response.data);
    }
    fetchData();
  }, []);

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  const handleOnAdd = () => {
    setShowModal(prev => !prev);
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

          <Button onClick={handleOnAdd}>Add</Button>
        </S.InlineTooling>
        <ul>
          {tools.map(tool => (
            <li key={tool.id}>
              <Card>
                <S.CardHeader>
                  <S.ToolTitle href={tool.link}>{tool.title}</S.ToolTitle>
                  <S.RemoveTool>
                    <GrFormClose size={20} />
                    <span>Remove</span>
                  </S.RemoveTool>
                </S.CardHeader>
                <S.ToolDescription>{tool.description}</S.ToolDescription>
                <S.ToolTagsWrapper>
                  <ul>
                    {tool.tags.map(tag => (
                      <li key={tag}>
                        <strong>{`#${tag}`}</strong>
                      </li>
                    ))}
                  </ul>
                </S.ToolTagsWrapper>
              </Card>
            </li>
          ))}
        </ul>
      </S.ContentWrapper>
      <AddToolModal showModal={showModal} setShowModal={setShowModal} />
    </S.Wrapper>
  );
}
