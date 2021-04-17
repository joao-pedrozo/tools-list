import { TextareaHTMLAttributes } from 'react';
import * as S from './styles';
import { HiStar } from 'react-icons/hi';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: React.ReactNode;
}

const Input = ({ label, id, onChange, value, placeholder }: Props) => {
  return (
    <>
      <S.LabelWrapper>
        <label htmlFor={id}>{label}</label>
        <HiStar size={10} color="#8F8A9B" />
      </S.LabelWrapper>
      <S.TextAreaWrapper>
        <S.TextArea
          id={id}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </S.TextAreaWrapper>
    </>
  );
};

export default Input;
