import React from 'react';
import * as S from './styles';

interface Props {
  showModal: boolean;
  setShowModal: (active: boolean) => void;
  children: React.ReactNode;
}

const BaseModal = ({ showModal, setShowModal, children }: Props) => {
  return <>{showModal && <S.Background>{children}</S.Background>}</>;
};

export default BaseModal;
