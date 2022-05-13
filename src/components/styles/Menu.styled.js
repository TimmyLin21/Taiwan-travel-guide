import styled from 'styled-components';
import arrowDown from '../../images/arrowDown.svg';
import search from '../../images/search.svg';
import cross from '../../images/cross.svg';
import { device } from './break-point';
import Container from './Container.styled';

export const MenuContainer = styled(Container)`
  margin-top: .5rem;
`

export const FormControl = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: .75rem;
  input,&>div:first-child {
    border-radius: var(--radius-sm);
    background-color: var(--color-bg);
    width: 100%;
    line-height: 1.75rem;
    padding: .5rem .75rem;
    height: 2.75rem;
    border: 1px solid var(--color-border);
    font-size: 1.125rem;
    text-align: left;
    &:focus{
      border: 1px solid var(--color-primary);
    }
    &:focus-visible {
      outline: 1px solid var(--color-primary);
    }
  }
  &>div:first-child {
    color: var(--color-textPlaceholder);
  }
  &>span {
    position: absolute;
    top: 11.5px;
    right: 11.5px;
    cursor: pointer;
  }
  p {
    color: var(--color-text);
  }
  @media ${device.lg} {
    margin-bottom: 1.5rem;
  }
`

export const ArrowDownIcon = styled.span`
  transition: transform .5s ease-in-out;
  ${({ $active }) => ($active ? "transform:rotate(180deg)" : "")};
  &::after {
    content: url(${arrowDown});
  }
`
export const SearchIcon = styled.span`
  &::after {
    content: url(${search});
  }
`

export const CrossIcon = styled.span`
  &::after {
    content: url(${cross});
    vertical-align: middle;
    margin-left: .75rem;
    cursor: pointer;
  }
`

export const DropdownMenu = styled.div`
  position: absolute;
  padding: .75rem;
  top: 100;
  right: 0;
  left: 0;
  box-shadow: var(--shadow-md);
  z-index: 2;
  background: white;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    width: 30%;
  }
  button {
    width: 4.875rem;
    height: 2.5rem;
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-sm);
    margin-bottom: .75rem;
    &:hover {
      background-color: var(--color-primary);
      color: white;
    }
  }
`

export const SearchBtn = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  right:0;
  left: 0;
  background-color: white;
  padding: .5rem 0;
  button {
    width: 100%;
    background-color: var(--color-primary);
    color: white;
    padding: .625rem 0;
    border-radius: var(--radius-sm);
    cursor: pointer;
  }
  @media ${device.lg} {
    display: none;
  }
`