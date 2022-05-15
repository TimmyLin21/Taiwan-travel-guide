import styled from 'styled-components';
import { device } from './break-point';
import Container from './Container.styled';


export const Banner = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: var(--radius-md);
  margin-bottom: 2.5rem;
  animation: zoomIn;
  animation-duration: 1s;
  img {
    width: 40%;
  }
  h2 {
    width: 40%;
    font-size: 2.0625rem;
  }
  @media ${device.md} {
    h2 {
      font-size: 3.625rem;
    }
  }
`

export const FrontContainer = styled(Container)`
  padding-top: 1.25rem;
  padding-bottom: 2.5rem;
  @media ${device.md} {
    padding-top: 1.5rem;
  }
`