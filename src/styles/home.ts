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

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.huge};
`;

export const InlineTooling = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  button {
    max-height: 44px;
  }
`;

export const InlineToolingSearchArea = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    div:nth-child(2) {
      margin-top: 5px;
    }
  }
`;

export const InlineToolingAddArea = styled.div``;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
`;
