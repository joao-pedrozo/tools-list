import { GrFormClose } from 'react-icons/gr';

import * as S from './styles';
import { Tool } from '../../pages';
import Card from '../Card';
import api from '../../services/api';

interface ToolsListProps {
  tools: Array<Tool>;
}

const ToolsList = ({ tools }: ToolsListProps) => {
  const onClickRemove = (id: number) => {};

  return (
    <ul>
      {tools.map(tool => (
        <li key={tool.id}>
          <Card>
            <S.CardHeader>
              <S.ToolTitle href={tool.link}>{tool.title}</S.ToolTitle>
              <S.RemoveTool>
                <GrFormClose size={20} />
                <span onClick={() => onClickRemove(tool.id)}>Remove</span>
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
  );
};

export default ToolsList;
