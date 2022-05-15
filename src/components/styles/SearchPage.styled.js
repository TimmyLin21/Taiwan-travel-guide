import styled from 'styled-components';
import { device } from './break-point';
import Container from './Container.styled';
import notFoundIcon from '../../images/notFound.png';

export const SearchPageContainer = styled(Container)`
  padding-top: 1.25rem;
  padding-bottom: 2.5rem;
  h2 {
    margin-bottom: 1.5rem;
  }
  @media ${device.lg} {
    padding-top: 2.5rem;
    min-height: 822px;
  }
`

export const NotFound = styled.div`
  padding-top: 20vh;
  width: 100%;
  text-align: center;
  p {
    margin-top: 2rem;
  }
  span::after {
    content: url(${notFoundIcon});
  }
`

export const MoreButton = styled.button`
  color: var(--color-primary);
  width: 150px;
  padding: 1rem;
  background: linear-gradient(to bottom, var(--color-primary) 50%, white 50%);
  background-size: 100% 200%;
  background-position: center bottom;
  transition: all .5s ease-out;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-sm);
  margin-top: 1rem;
  &:hover {
    background-position: center top;
    color: white;
  }
`