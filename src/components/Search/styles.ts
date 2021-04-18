import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border-color: #ebeaed;
  background-color: #f5f4f6;
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 10px 13px;
`;

export const Input = styled.input`
  border: none;
  background: none;
  padding-left: 10px;
  min-width: 210px;
`;
