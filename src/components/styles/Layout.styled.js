import styled from 'styled-components';
import { device } from './break-point';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.lg} {
    flex-direction: row;
    &>div:first-child {
      width: 354px;
    }
    &>div:last-child {
      flex-grow: 1;
    }
  }
  main {
    background-color: var(--color-bg);
  }
`

export const StickyTop = styled.div`
  @media ${device.lg} {
    position: sticky;
    top: 0;
    align-self: flex-start;
  }
`