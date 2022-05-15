import { SiteGrid } from "../components/styles/SitesList.styled";
import {
  MoreButton,
  NotFound,
  SearchPageContainer,
} from "../components/styles/SearchPage.styled";
import SiteItem from "../components/sites/SiteItem";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCultureSpots,
  getOutdoorSpots,
  getTempleSpots,
  getFamilyActivities,
  getScenicAreas,
  getRestaurants,
  getHotels,
  getActivities,
} from "../lib/api";
import useHttp from "../hooks/useHttp";
import { paginationActions } from "../store/pagination";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const pageIndex = useSelector((state) => state.pagination.currentPage);
  const dispatch = useDispatch();

  const { sendRequest: requestCultureSpots, data: cultureSpots } = useHttp(
    getCultureSpots, false, true
  );
  const { sendRequest: requestOutdoorSpots, data: outdoorSpots } = useHttp(
    getOutdoorSpots, false, true
  );
  const { sendRequest: requestTempleSpots, data: templeSpots } = useHttp(
    getTempleSpots, false, true
  );
  const { sendRequest: requestFamilyActivities, data: familyActivities } =
    useHttp(getFamilyActivities, false, true);
  const { sendRequest: requestScenicAreas, data: scenicAreas } = useHttp(
    getScenicAreas, false, true
  );
  const { sendRequest: requestRestaurants, data: restaurants } = useHttp(
    getRestaurants, false, true
  );
  const { sendRequest: requestHotels, data: hotels } = useHttp(getHotels, false, true);
  const { sendRequest: requestActivities, data: activities } = useHttp(
    getActivities, false, true
  );

  const cityName = useSelector((state) => state.header.selectedCity?.cityName);
  const cityEngName = useSelector(
    (state) => state.header.selectedCity?.cityEngName
  );
  const hasMore = useSelector((state) => state.pagination.hasMore);

  const keyword = useSelector((state) => state.header.enteredKeyword);
  const theme = searchParams.get("theme");
  let sitesList;
  useEffect(() => {
    if (theme === "歷史文化") {
      requestCultureSpots({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "戶外踏青" || theme === "undefined") {
      requestOutdoorSpots({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "宗教巡禮") {
      requestTempleSpots({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "親子活動") {
      requestFamilyActivities({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "風景區") {
      requestScenicAreas({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "美食品嚐") {
      requestRestaurants({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "住宿推薦") {
      requestHotels({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "觀光活動") {
      requestActivities({city:cityEngName,page:pageIndex, keyword});
    }
  }, [
    requestCultureSpots,
    requestOutdoorSpots,
    requestTempleSpots,
    requestFamilyActivities,
    requestScenicAreas,
    requestRestaurants,
    requestHotels,
    requestActivities,
    keyword,
    theme,
    cityEngName,
    pageIndex,
  ]);
  switch (theme) {
    case "歷史文化":
      if (cultureSpots && cultureSpots.length > 0) {
        sitesList = cultureSpots.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      } else {
        sitesList = "";
      }
      break;
    case "戶外踏青":
      if (outdoorSpots && outdoorSpots.length > 0) {
        sitesList = outdoorSpots.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      } else {
        sitesList = "";
      }
      break;
    case "宗教巡禮":
      if (templeSpots && templeSpots.length > 0) {
        sitesList = templeSpots.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      } else {
        sitesList = "";
      }
      break;
    case "親子活動":
      if (familyActivities && familyActivities.length > 0) {
        sitesList = familyActivities.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ActivityID}
            key={site.ActivityID}
          />
        ));
      } else {
        sitesList = "";
      }
      break;
    case "風景區":
      if (scenicAreas && scenicAreas.length > 0) {
        sitesList = scenicAreas.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      } else {
        sitesList = "";
      }
      break;
    case "美食品嚐":
      if (restaurants && restaurants.length > 0) {
        sitesList = restaurants.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.RestaurantID}
            key={site.RestaurantID}
          />
        ));
      } else {
        sitesList = "";
      }
      break;
    case "住宿推薦":
      if (hotels && hotels.length > 0) {
        sitesList = hotels.map((site) => (
          <SiteItem siteInfo={site} id={site.HotelID} key={site.HotelID} />
        ));
      } else {
        sitesList = "";
      }
      break;
    case "觀光活動":
      if (activities && activities.length > 0) {
        sitesList = activities.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ActivityID}
            key={site.ActivityID}
          />
        ));
      } else {
        sitesList = "";
      }
      break;
    default:
      if (outdoorSpots && outdoorSpots.length > 0) {
        sitesList = outdoorSpots.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      } else {
        sitesList = "";
      }
  }

  const clickHandler = () => {
    dispatch(paginationActions.addPageIndex());
  }

  return (
    <SearchPageContainer>
      <h2>{cityName === "undefined" ? "台灣" : cityName}</h2>
      {sitesList && <SiteGrid>{sitesList}</SiteGrid>}
      {!sitesList && (
        <NotFound>
          <span />
          <p>還沒有相關景點呦  ⸍⚙̥ꇴ⚙̥⸌</p>
        </NotFound>
      )}
      {sitesList && hasMore && <MoreButton onClick={clickHandler}>瀏覽更多</MoreButton>}
    </SearchPageContainer>
  );
};

export default SearchPage;
