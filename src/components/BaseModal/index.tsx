import React, { useRef } from 'react';
import * as S from './styles';

interface Props {
  showModal: boolean;
  setShowModal: (active: boolean) => void;
  children: React.ReactNode;
}

const BaseModal = ({ showModal, setShowModal, children }: Props) => {
  const backgroundRef = useRef();

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (backgroundRef.current === event.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <>
          <S.Background ref={backgroundRef} onClick={closeModal}>
            <S.ContentWrapper>{children}</S.ContentWrapper>
          </S.Background>
        </>
      )}
    </>
  );
};

export default BaseModal;
