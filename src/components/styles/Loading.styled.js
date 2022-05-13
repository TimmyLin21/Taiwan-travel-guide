import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Modal = styled.div`
  position: fixed;
  top: 40vh;
  left: 50%;
  width: 100%;
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`