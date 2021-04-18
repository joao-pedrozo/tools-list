import { GrFormClose } from 'react-icons/gr';

import * as S from './styles';
import RemoveToolmodal from '@/components/RemoveToolModal';

import { Tool } from '@/pages';
import Card from '@/components/Card';
import { useState } from 'react';

interface ToolProps {
  tool: Tool;
}

const ToolItem = ({ tool }: ToolProps) => {
  const [showRemoveToolModal, setShowRemoveToolModal] = useState(false);

  const handleOnRemoveModal = () => setShowRemoveToolModal(true);
  return (
    <>
      <li key={tool.id}>
        <Card>
          <S.CardHeader>
            <S.ToolTitle href={tool.link}>{tool.title}</S.ToolTitle>
            <S.RemoveTool onClick={handleOnRemoveModal}>
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
      <RemoveToolmodal
        setShowModal={setShowRemoveToolModal}
        showModal={showRemoveToolModal}
        item={tool}
      />
    </>
  );
};

export default ToolItem;
