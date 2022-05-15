import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useSearch = () => {
  const enteredKeyword = useSelector((state) => state.header.enteredKeyword);
  const selectedCity = useSelector((state) => state.header.selectedCity?.cityEngName);
  const selectedTheme = useSelector((state) => state.header.selectedTheme);

  const navigate = useNavigate();
  const searchResult = (searchInfo) => {
    let {city, keyword, theme} = searchInfo;

    if (selectedCity && !city) {
      city = selectedCity;
    } else if (city === ''){
      city = undefined;
    }

    if (enteredKeyword && !keyword) {
      keyword = enteredKeyword;
    } else if (keyword === '') {
      keyword = undefined;
    }

    theme = theme ||selectedTheme;

    navigate({
      pathname: '/search',
      search: `?city=${city}&keyword=${keyword}&theme=${theme}`,
    })
  }

  return searchResult
}

export default useSearch;