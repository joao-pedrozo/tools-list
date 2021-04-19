import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px 35px;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.ink};
  }
`;

export const CloseButton = styled(GrFormClose)`
  cursor: pointer;
  color: #8f8a9b;
`;

export const ConfirmationText = styled.span`
  color: #8f8a9b;
  margin: 30px 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  button:first-child {
    margin-left: 30px;
  }
`;
