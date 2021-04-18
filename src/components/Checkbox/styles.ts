import styled, { css } from 'styled-components';
import { CheckboxProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

type LabelProps = Pick<CheckboxProps, 'disabled'>;

export const Label = styled.label<LabelProps>`
  color: #170c3a;

  ${({ disabled }) => css`
    color: ${disabled && '#C7C4CD'};
  `}
`;
