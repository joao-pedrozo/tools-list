import React, { useState } from 'react';

import BaseModal from '../BaseModal';
import Input from '../Input';
import TextArea from '../TextArea';
import Button from '../Button';

import api from '@/services/api';
import { useTools } from '@/hooks/tools';

import * as S from './styles';

interface Props {
  showModal: boolean;
  setShowModal: (active: boolean) => void;
}

const AddToolModal = ({ showModal, setShowModal }: Props) => {
  const [toolName, setToolName] = useState('');
  const [toolLink, setToolLink] = useState('');
  const [toolDescription, setToolDescription] = useState('');
  const [toolTags, setToolTags] = useState('');

  const { fetchTools } = useTools();

  const handleOnClick = async () => {
    const splittedTags = toolTags.split(' ');
    if (toolName && toolLink && toolDescription && toolTags) {
      await api.post('/tools', {
        title: toolName,
        link: toolLink,
        description: toolDescription,
        tags: splittedTags,
      });
    }
    fetchTools();
    setToolName('');
    setToolLink('');
    setToolDescription('');
    setToolTags('');
    setShowModal(false);
  };

  return (
    <BaseModal showModal={showModal} setShowModal={setShowModal}>
      <S.ModalWrapper>
        <S.ModalTitle>
          <span>Add new tool</span>
          <S.CloseButton size={20} onClick={() => setShowModal(false)} />
        </S.ModalTitle>
        <Input
          id="tool-name"
          label="Tool Name"
          value={toolName}
          onChange={ev => setToolName(ev.target.value)}
          placeholder="Node.js, React.js, React Native..."
        />
        <Input
          id="tool-link"
          label="Tool Link"
          value={toolLink}
          onChange={ev => setToolLink(ev.target.value)}
          placeholder="https://tool-link.com"
        />
        <TextArea
          id="tool-description"
          label="Tool Description"
          value={toolDescription}
          onChange={ev => setToolDescription(ev.target.value)}
          placeholder="This tool is a really useful tool which helps to..."
        />
        <Input
          id="tool-tags"
          label="Tags"
          value={toolTags}
          onChange={ev => setToolTags(ev.target.value)}
          placeholder="nodejs javascript https devops kubernetes"
        />
        <S.ButtonWrapper>
          <Button onClick={handleOnClick}>Add Tool</Button>
        </S.ButtonWrapper>
      </S.ModalWrapper>
    </BaseModal>
  );
};

export default AddToolModal;
