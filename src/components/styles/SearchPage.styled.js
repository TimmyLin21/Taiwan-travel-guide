import styled from 'styled-components';
import { device } from './break-point';
import Container from './Container.styled';

export const SearchPageContainer = styled(Container)`
  padding-top: 1.25rem;
  padding-bottom: 2.5rem;
  text-align: left;
  h2 {
    margin-bottom: 1.5rem;
  }
  @media ${device.lg} {
    padding-top: 2.5rem;
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