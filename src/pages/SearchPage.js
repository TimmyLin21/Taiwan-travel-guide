import { SiteGrid } from "../components/styles/SitesList.styled";
import {
  NotFound,
  SearchPageContainer,
} from "../components/styles/SearchPage.styled";
import SiteItem from "../components/sites/SiteItem";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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
  const { sendRequest: requestFamilyActivities, data: familyActivities } =
    useHttp(getFamilyActivities, true);
  const { sendRequest: requestScenicAreas, data: scenicAreas } = useHttp(
    getScenicAreas,
    true
  );
  const { sendRequest: requestRestaurants, data: restaurants } = useHttp(
    getRestaurants,
    true
  );
  const { sendRequest: requestHotels, data: hotels } = useHttp(getHotels, true);
  const { sendRequest: requestActivities, data: activities } = useHttp(
    getActivities,
    true
  );

  const cityName = useSelector((state) => state.header.selectedCity?.cityName);
  const cityEngName = useSelector(
    (state) => state.header.selectedCity?.cityEngName
  );
  const keyword = searchParams.get("keyword");
  const theme = searchParams.get("theme");

  let sitesList;

  useEffect(() => {
    if (theme === "歷史文化" || theme === "undefined") {
      requestCultureSpots(cityEngName);
    } else if (theme === "戶外踏青") {
      requestOutdoorSpots(cityEngName);
    } else if (theme === "宗教巡禮") {
      requestTempleSpots(cityEngName);
    } else if (theme === "親子活動") {
      requestFamilyActivities(cityEngName);
    } else if (theme === "風景區") {
      requestScenicAreas(cityEngName);
    } else if (theme === "美食品嚐") {
      requestRestaurants(cityEngName);
    } else if (theme === "住宿推薦") {
      requestHotels(cityEngName);
    } else if (theme === "觀光活動") {
      requestActivities(cityEngName);
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
      {sitesList && <Pagination />}
    </SearchPageContainer>
  );
};

export default SearchPage;
