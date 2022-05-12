import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useSearch = () => {
  const enteredKeyword = useSelector((state) => state.header.enteredKeyword);
  const selectedCity = useSelector((state) => state.header.selectedCity);
  const selectedTheme = useSelector((state) => state.header.selectedTheme);

  const navigate = useNavigate();
  const searchResult = (searchInfo) => {
    let {city, keyword, theme} = searchInfo;

    if (city && city !== 'undefined') {
      city = selectedCity;
    } else {
      city = 'undefined';
    }

    if (keyword && keyword !== 'undefined') {
      keyword = enteredKeyword;
    } else {
      keyword = 'undefined';
    }

    if (theme && theme !== 'undefined') {
      theme = selectedTheme;
    } else {
      theme = 'undefined';
    }

    navigate({
      pathname: '/search',
      search: `?city=${city}&keyword=${keyword}&theme=${theme}`,
    })
  }

  return searchResult
}

export default useSearch;