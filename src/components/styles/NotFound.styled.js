import styled from 'styled-components';
import { device } from './break-point';
import Container from './Container.styled';

export const NotFoundContainer = styled(Container)`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  img {
    padding-bottom: 0px;
  }
  figcaption {
    margin-top: 1rem;
    & a {
      color: var(--color-textPlaceholder);
    }
  }
  @media ${device.lg} {
    padding-top: 20vh;
    padding-bottom: 20vh;
    min-height: 822px;
  }
`