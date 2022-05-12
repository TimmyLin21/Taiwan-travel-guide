import styled from 'styled-components';
import { device } from './break-point';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  @media ${device.md} {
    max-width: 768px;
    padding: 0 1.5rem;
  }
  @media ${device.lg} {
    max-width: 1024px;
  }
  @media ${device.xl} {
    max-width: 1440px;
  }
`

export default Container;