import styled from 'styled-components';
import { device } from './break-point';
import Container from './Container.styled';
import notFoundIcon from '../../images/notFound.png';

export const SearchPageContainer = styled(Container)`
  padding-top: 1.25rem;
  padding-bottom: 2.5rem;
  text-align: left;
  h2 {
    margin-bottom: 1.5rem;
  }
  @media ${device.lg} {
    padding-top: 2.5rem;
    min-height: 822px;
  }
`

export const PaginationStyled = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  li:not(:last-child) {
    margin-right: .5rem;
  }
  button {
    background-color: white;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: var(--radius-sm);
    padding: .75rem;
    
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