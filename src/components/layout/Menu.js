import Container from "../styles/Container.styled";
import { FormControl, SearchIcon, SearchBtn, MenuContainer, CrossIcon } from "../styles/Menu.styled";
import CustomSelect from "./CustomSelect";
import FeaturedThemes from "./FeaturedThemes";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/header";
import useSearch from "../../hooks/useSearch";
import { useState } from "react";

const Menu = () => {
  const dispatch = useDispatch();
  const searchResult = useSearch();
  const [enteredKeyword, setEnteredKeyword] = useState('');

  const setEnteredKeywordHandler = (e) => {
    if (e.key === 'Enter') {
      const keyword = e.target.value;
      dispatch(headerActions.setEnteredKeyword({ keyword }));
      if (window.innerWidth < 1080) {
        dispatch(headerActions.hideMenu());
      }
      searchResult({keyword, city:'', theme:''});
    }
  };

  const cancelHandler = () => {
    dispatch(headerActions.setEnteredKeyword({ keyword: '' }));
    if (window.innerWidth < 1080) {
      dispatch(headerActions.hideMenu());
    }
    setEnteredKeyword('');
    searchResult({keyword:'', city:'', theme:''});
  }

  const keywordChangeHandler = (e) => {
    setEnteredKeyword(e.target.value);
  }
  const  icon = enteredKeyword ? <CrossIcon onClick={cancelHandler}/>:<SearchIcon/>
  return (
    <>
      <MenuContainer>
        <CustomSelect />
        <FormControl>
          <input
            type="text"
            onKeyUp={setEnteredKeywordHandler}
            placeholder="搜尋關鍵字"
            onChange={keywordChangeHandler}
            value={enteredKeyword}
          />
          {icon}
        </FormControl>
        <FeaturedThemes />
      </MenuContainer>
      <SearchBtn>
        <Container>
          <button type="button">開始搜尋</button>
        </Container>
      </SearchBtn>
    </>
  );
};

export default Menu;
