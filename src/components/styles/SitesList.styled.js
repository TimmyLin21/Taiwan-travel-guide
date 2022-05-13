import styled from 'styled-components';
import blueLocation from '../../images/BlueLocation.svg';
import location from '../../images/location.svg';
import time from '../../images/time.svg';
import phone from '../../images/call.svg';
import { device } from './break-point';

export const ListTitle = styled.ul`
  list-style: none;
  &>li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
    span {
      margin-right: .5rem;
      margin-bottom: 1rem;
    }
    h3 {
      margin-bottom: 1rem;
    }
  }
`

export const SiteGrid = styled.ul`
  width: 100%;
  display: grid;
  row-gap: 1.5rem;
  grid-template-columns: repeat(1, minmax(0,1fr));
  @media ${device.md} {
    column-gap: 1rem;
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
  @media ${device.lg} {
    column-gap: 1.5rem;
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
`


export const BlueLocation = styled.span`
  &::after {
    content: url(${blueLocation});
  }
`

export const SiteCard = styled.li`
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  button {
    width: 100%;
  }
  figure {
    overflow: hidden;
    border-radius: var(--radius-md) var(--radius-md) 0 0;
  }
  img {
    height: 182px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: var(--radius-md) var(--radius-md) 0 0;
    transition: .3s ease-in-out;
    &:hover {
      transform: scale(1.3);
    }
  }
  div {
    text-align: left;
    padding: .5rem 0 .25rem 1rem;
    h4 {
      margin-bottom: .625rem;
    }
  }
  p {
    color: var(--color-primary);
    margin-bottom: .5rem;
    font-size: .875rem;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 1.5px;
  }
`

export const LocationIcon = styled.span`
  &::after {
    content: url(${location});
    vertical-align: middle;
    margin-right: .5rem;
  }
`

export const TimeIcon = styled.span`
  &::after {
    content: url(${time});
    vertical-align: middle;
    margin-right: .5rem;
  }
`

export const PhoneIcon = styled.span`
  &::after {
    content: url(${phone});
    vertical-align: middle;
    margin-right: .5rem;
  }
`