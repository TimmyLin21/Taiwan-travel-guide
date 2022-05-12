import { PaginationStyled } from "./styles/SearchPage.styled";

const Pagination = () => {
  return (
    <PaginationStyled>
      <li><button type="button">1</button></li>
      <li><button type="button">2</button></li>
      <li><button type="button">3</button></li>
    </PaginationStyled>
  )
};

export default Pagination;