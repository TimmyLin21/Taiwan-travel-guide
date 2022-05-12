import styled from 'styled-components';
import menu from '../../images/menu.svg';
import { device } from './break-point';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  text-decoration: none;
  img {
    height: 2.5rem;
    @media ${device.lg} {
      height: 3rem;
    }
  }
`
export const Header = styled.header`
  padding: .5rem 0;
  &>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
  @media ${device.lg} {
    padding: 2.5rem 0 1.5rem;
    box-shadow: none;
    margin-bottom: 0;
  }
`

export const MenuToggler = styled.button`
  &::after {
    content: url(${menu});
  }
  background-color: var(--color-tertiary);
  cursor: pointer;
  border-radius: var(--radius-sm);
  padding: 7px 5.5px;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  @media ${device.lg} {
    display: none;
  }
`