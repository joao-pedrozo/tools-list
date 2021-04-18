import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 15px 35px;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.ink};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;
