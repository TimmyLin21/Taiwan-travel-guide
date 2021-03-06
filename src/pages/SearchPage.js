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
  const loadingStatus = useSelector((state) => state.loading.status);
  const keyword = useSelector((state) => state.header.enteredKeyword);
  const theme = searchParams.get("theme");
  let sitesList;
  useEffect(() => {
    if (theme === "????????????") {
      requestCultureSpots({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "????????????" || theme === "undefined") {
      requestOutdoorSpots({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "????????????") {
      requestTempleSpots({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "????????????") {
      requestFamilyActivities({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "?????????") {
      requestScenicAreas({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "????????????") {
      requestRestaurants({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "????????????") {
      requestHotels({city:cityEngName,page:pageIndex, keyword});
    } else if (theme === "????????????") {
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
    case "????????????":
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
    case "????????????":
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
    case "????????????":
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
    case "????????????":
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
    case "?????????":
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
    case "????????????":
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
    case "????????????":
      if (hotels && hotels.length > 0) {
        sitesList = hotels.map((site) => (
          <SiteItem siteInfo={site} id={site.HotelID} key={site.HotelID} />
        ));
      } else {
        sitesList = "";
      }
      break;
    case "????????????":
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
      <h2>{cityName === "undefined" ? "??????" : cityName}</h2>
      {sitesList && <SiteGrid>{sitesList}</SiteGrid>}
      {!sitesList && loadingStatus === 'pending' && ('')}
      {!sitesList && loadingStatus === 'completed' && (
        <NotFound>
          <span />
          <p>????????????????????????  ???????????????????</p>
        </NotFound>
      )}
      {sitesList && hasMore && <MoreButton onClick={clickHandler}>????????????</MoreButton>}
    </SearchPageContainer>
  );
};

export default SearchPage;
