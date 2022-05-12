import { SiteGrid } from "../components/styles/SitesList.styled";
import { SearchPageContainer } from "../components/styles/SearchPage.styled";
import SiteItem from "../components/sites/SiteItem";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getCultureSpots, getOutdoorSpots, getTempleSpots } from "../lib/api";
import useHttp from "../hooks/useHttp";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const { sendRequest: requestCultureSpots, data: cultureSpots } = useHttp(
    getCultureSpots,
    true
  );
  const { sendRequest: requestOutdoorSpots, data: outdoorSpots } = useHttp(
    getOutdoorSpots,
    true
  );
  const { sendRequest: requestTempleSpots, data: templeSpots } = useHttp(
    getTempleSpots,
    true
  );
  const city = searchParams.get('city');
  const keyword = searchParams.get('keyword');
  const theme = searchParams.get('theme');
  // const city = useSelector((state) => state.header.enteredCity);
  // const keyword = useSelector((state) => state.header.selectedKeyword);
  // const theme = useSelector((state) => state.header.selectedTheme);

  let sitesList;

  useEffect(() => {
    if (theme === "歷史文化") {
      requestCultureSpots(city);
    } else if (theme === "戶外踏青") {
      requestOutdoorSpots(city);
    } else if (theme === "宗教巡禮") {
      requestTempleSpots(city);
    }
  }, [
    requestCultureSpots,
    requestOutdoorSpots,
    requestTempleSpots,
    keyword,
    theme,
    city,
  ]);
  if (cultureSpots) {
    sitesList = cultureSpots.map((site) => (
      <SiteItem
        siteInfo={site}
        id={site.ScenicSpotID}
        key={site.ScenicSpotID}
      />
    ));
  } else if (outdoorSpots) {
    sitesList = outdoorSpots.map((site) => (
      <SiteItem
        siteInfo={site}
        id={site.ScenicSpotID}
        key={site.ScenicSpotID}
      />
    ));
  } else if (templeSpots) {
    sitesList = templeSpots.map((site) => (
      <SiteItem
        siteInfo={site}
        id={site.ScenicSpotID}
        key={site.ScenicSpotID}
      />
    ));
  }

  return (
    <SearchPageContainer>
      <h2>{city === "undefined" ? "台灣" : city}</h2>
      <SiteGrid>{sitesList}</SiteGrid>
      <Pagination />
    </SearchPageContainer>
  );
};

export default SearchPage;
