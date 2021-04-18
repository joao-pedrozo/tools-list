import { GrFormClose } from 'react-icons/gr';

import * as S from './styles';
import BaseModal from '../BaseModal';

interface RemoveToolModalProps {
  showModal: boolean;
  setShowModal: (active: boolean) => void;
}

const RemoveToolModal = ({ showModal, setShowModal }: RemoveToolModalProps) => {
  return (
    <BaseModal showModal={showModal} setShowModal={setShowModal}>
      <S.ModalWrapper>
        <S.ModalTitleWrapper>
          <GrFormClose size={24} />
        </S.ModalTitleWrapper>
      </S.ModalWrapper>
    </BaseModal>
  );
};

export default RemoveToolModal;
