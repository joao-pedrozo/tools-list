import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';

export const ModalWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px 35px;
  border-radius: 5px;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.ink};
  }

  svg {
    color: #8f8a9b;
  }
`;

export const CloseButton = styled(GrFormClose)``;

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
