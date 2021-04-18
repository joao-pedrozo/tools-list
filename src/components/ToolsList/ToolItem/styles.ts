import styled from 'styled-components';

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToolTitle = styled.a``;

export const RemoveTool = styled.a`
  display: flex;
`;

export const ToolDescription = styled.p`
  margin-top: 10px;
`;

export const ToolTagsWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  strong {
    margin-right: 10px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;
