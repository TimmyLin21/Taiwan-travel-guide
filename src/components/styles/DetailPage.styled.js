import styled from 'styled-components';
import Container from './Container.styled';
import backIcon from '../../images/back.svg';
import print from '../../images/print.svg';
import share from '../../images/share.svg';
import { device } from './break-point';

export const DetailContainer = styled(Container)`
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  text-align: left;
  h2 {
    margin-left: .75rem;
  }
  &>img {
    height: 160px;
    width: 100%;
    border-radius: var(--radius-sm);
    margin-top: 1.125rem;
    margin-bottom: 1.25rem;
    @media ${device.md} {
      border-radius: 1.125rem;
      height: 364px;
    }
  }
  h3 {
    color: var(--color-primary);
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
  &>p {
    line-height: 1.5rem;
    letter-spacing: .5px;
    margin-bottom: 1.5rem;
  }
`

export const InfoCard = styled.div`
  padding: 1rem;
  background-color: var(--color-tertiary);
  border-radius: var(--radius-sm);
  margin-bottom: 1.5rem;
  p:not(:last-child) {
    margin-bottom: .5rem;
  }
  span {
    margin-right: .75rem;
    vertical-align: middle;
  }
`

export const BackIcon = styled.span`
  &::after {
    content: url(${backIcon});
  }
`

export const PrintIcon = styled.span`
  &::after {
    content: url(${print});
    margin-right:1.375rem;
  }
`

export const ShareIcon = styled.span`
  &::after {
    content: url(${share});
  }
`