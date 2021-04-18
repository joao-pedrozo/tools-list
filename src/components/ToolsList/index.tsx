import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';

import * as S from './styles';
import { Tool } from '../../pages';
import Card from '../Card';
import api from '../../services/api';
import RemoveToolmodal from '../../components/RemoveToolModal';

interface ToolsListProps {
  tools: Array<Tool>;
}

const ToolsList = ({ tools }: ToolsListProps) => {
  const [showRemoveToolModal, setShowRemoveToolModal] = useState(false);

  const handleOnRemoveModal = () => setShowRemoveToolModal(true);

  return (
    <div>
      <ul>
        {tools.map(tool => (
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
        ))}
      </ul>
      <RemoveToolmodal
        showModal={showRemoveToolModal}
        setShowModal={setShowRemoveToolModal}
      />
    </div>
  );
};

export default ToolsList;
