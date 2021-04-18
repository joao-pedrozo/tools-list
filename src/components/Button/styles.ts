import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  padding: 14px 26px;
  background-color: #365df0;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#365df0')};
  }

  &:active {
    background: ${shade(0.4, '#365df0')};
  }
`;
