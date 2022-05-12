import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent?justifyContent:'start'};
  align-items: ${({alignItems}) => alignItems?alignItems:'center'};
`