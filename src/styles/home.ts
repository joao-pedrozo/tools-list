import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 65px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .card-wrapper {
    margin-top: 20px;
    width: 500px;
    padding: 10px;
  }
`;

export const Title = styled.h1``;

export const InlineTooling = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const InlineToolingSearchArea = styled.div`
  display: flex;
`;

export const InlineToolingAddArea = styled.div``;

export const Subtitle = styled.h2``;

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
`;
