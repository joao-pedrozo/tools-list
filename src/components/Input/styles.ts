import styled from 'styled-components';
import { CgAsterisk } from 'react-icons/cg';

export const LabelWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  label {
    margin-right: 9px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  border: 1px solid #ebeaed;
  background-color: #f5f4f6;
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 10px 13px;
  margin-bottom: 25px;

  &:focus-within {
    border-color: 1px solid #dedce1;
    background-color: #ebeaed;
  }
`;

export const Input = styled.input`
  border: none;
  background: none;
  min-width: 210px;
  color: #170c3a;
  width: 100%;
`;
