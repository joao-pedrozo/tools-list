import styled from 'styled-components';
import { shade, lighten } from 'polished';

import { Props } from './';

interface StyledButtonProps {
  kind: 'primary' | 'secondary';
}

const colors = {
  primary: {
    color: '#365df0',
  },
  get secondary() {
    return {
      color: lighten(0.2, this.primary.color),
    };
  },
};

export const Button = styled.button<StyledButtonProps>`
  padding: 14px 26px;
  background-color: ${props => colors[props.kind].color};
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => shade(0.2, colors[props.kind].color)};
  }

  &:active {
    background: ${props => shade(0.4, colors[props.kind].color)};
  }
`;
