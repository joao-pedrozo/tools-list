import { useState } from 'react';

import { Tool } from '@/pages';
import ToolItem from './ToolItem';

interface ToolsListProps {
  tools: Array<Tool>;
}

const ToolsList = ({ tools }: ToolsListProps) => {
  return (
    <ul>
      {tools.map(tool => (
        <ToolItem tool={tool} key={tool.id} />
      ))}
    </ul>
  );
};

export default ToolsList;
