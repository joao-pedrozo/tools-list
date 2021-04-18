import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  margin-top: 65px;

  .card-wrapper {
    margin-top: 20px;
    max-width: 500px;
    width: 100%;
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
