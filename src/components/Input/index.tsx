import { InputHTMLAttributes } from 'react';
import * as S from './styles';
import { HiStar } from 'react-icons/hi';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

const Input = ({ label, id, onChange, value, placeholder }: Props) => {
  return (
    <>
      <S.LabelWrapper>
        <label htmlFor={id}>{label}</label>
        <HiStar size={10} color="#8F8A9B" />
      </S.LabelWrapper>
      <S.InputWrapper>
        <S.Input
          id={id}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </S.InputWrapper>
    </>
  );
};

export default Input;
