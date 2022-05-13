import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useSearch = () => {
  const enteredKeyword = useSelector((state) => state.header.enteredKeyword);
  const selectedCity = useSelector((state) => state.header.selectedCity);
  const selectedTheme = useSelector((state) => state.header.selectedTheme);

  const navigate = useNavigate();
  const searchResult = (searchInfo) => {
    let {city, keyword, theme} = searchInfo;

    if (selectedCity && !city) {
      theme = selectedCity;
    }

    if (keyword && keyword !== 'undefined') {
      keyword = enteredKeyword;
    } else {
      keyword = 'undefined';
    }

    if (selectedTheme && !theme) {
      theme = selectedTheme;
    }

    navigate({
      pathname: '/search',
      search: `?city=${city}&keyword=${keyword}&theme=${theme}`,
    })
  }

  return searchResult
}

export default useSearch;