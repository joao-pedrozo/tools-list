import * as S from './styles';
import BaseModal from '../BaseModal';
import { Tool } from '@/pages';
import Button from '../Button';
import api from '@/services/api';

import { useTools } from '@/hooks/tools';

interface RemoveToolModalProps {
  showModal: boolean;
  setShowModal: (active: boolean) => void;
  item: Tool;
}

const RemoveToolModal = ({
  showModal,
  setShowModal,
  item,
}: RemoveToolModalProps) => {
  const { fetchTools } = useTools();

  const handleRemove = async () => {
    await api.delete(`/tools/${item.id}`);
    fetchTools();
    setShowModal(false);
  };

  return (
    <BaseModal showModal={showModal} setShowModal={setShowModal}>
      <S.ModalWrapper>
        <S.ModalTitleWrapper>
          <span>Remove tool</span>
          <S.CloseButton size={20} />
        </S.ModalTitleWrapper>
        <S.ConfirmationText>
          Are you sure you want to remove <b>{item.title}?</b>
        </S.ConfirmationText>
        <S.ButtonsWrapper>
          <Button onClick={handleRemove}>Yes, remove</Button>
          <Button kind="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </S.ButtonsWrapper>
      </S.ModalWrapper>
    </BaseModal>
  );
};

export default RemoveToolModal;
