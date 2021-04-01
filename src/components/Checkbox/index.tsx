import * as S from './styles';
import { ChangeEventHandler } from 'react';

export interface CheckboxProps {
  labelText: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  disabled?: boolean;
}

const Checkbox = ({
  labelText,
  handleChange,
  checked,
  disabled,
}: CheckboxProps) => {
  return (
    <S.Wrapper>
      <S.Checkbox
        name="checkbox"
        id="checkbox"
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      <S.Label htmlFor="checkbox" disabled={disabled}>
        {labelText}
      </S.Label>
    </S.Wrapper>
  );
};

export default Checkbox;
