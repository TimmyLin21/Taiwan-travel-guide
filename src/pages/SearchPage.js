import { SiteGrid } from "../components/styles/SitesList.styled";
import { SearchPageContainer } from "../components/styles/SearchPage.styled";
import SiteItem from "../components/sites/SiteItem";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
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
  const { sendRequest: requestFamilyActivities, data: familyActivities } = useHttp(
    getFamilyActivities,
    true
  );
  const { sendRequest: requestScenicAreas, data: scenicAreas } = useHttp(
    getScenicAreas,
    true
  );
  const { sendRequest: requestRestaurants, data: restaurants } = useHttp(
    getRestaurants,
    true
  );
  const { sendRequest: requestHotels, data: hotels } = useHttp(
    getHotels,
    true
  );
  const { sendRequest: requestActivities, data: activities } = useHttp(
    getActivities,
    true
  );

  const city = searchParams.get("city");
  const keyword = searchParams.get("keyword");
  const theme = searchParams.get("theme");

  let sitesList;

  useEffect(() => {
    if (theme === "歷史文化") {
      requestCultureSpots(city);
    } else if (theme === "戶外踏青") {
      requestOutdoorSpots(city);
    } else if (theme === "宗教巡禮") {
      requestTempleSpots(city);
    } else if (theme === '親子活動') {
      requestFamilyActivities(city);
    } else if (theme === '風景區') {
      requestScenicAreas(city);
    } else if (theme === '美食品嚐') {
      requestRestaurants(city);
    } else if (theme === '住宿推薦') {
      requestHotels(city);
    } else if (theme === '觀光活動') {
      requestActivities(city);
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
    city,
  ]);
  switch (theme) {
    case "歷史文化":
      if (cultureSpots) {
        sitesList = cultureSpots.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      }
      break;
    case "戶外踏青":
      if (outdoorSpots) {
        sitesList = outdoorSpots.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      }
      break;
    case "宗教巡禮":
      if (templeSpots) {
        sitesList = templeSpots.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      }
      break;
    case "親子活動":
      if (familyActivities) {
        sitesList = familyActivities.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ActivityID}
            key={site.ActivityID}
          />
        ));
      }
      break;
    case "風景區":
      if (scenicAreas) {
        sitesList = scenicAreas.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ScenicSpotID}
            key={site.ScenicSpotID}
          />
        ));
      }
      break;
    case "美食品嚐":
      if (restaurants) {
        sitesList = restaurants.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.RestaurantID}
            key={site.RestaurantID}
          />
        ));
      }
      break;
    case "住宿推薦":
      if (hotels) {
        sitesList = hotels.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.HotelID}
            key={site.HotelID}
          />
        ));
      }
      break;
    case "觀光活動":
      if (activities) {
        sitesList = activities.map((site) => (
          <SiteItem
            siteInfo={site}
            id={site.ActivityID}
            key={site.ActivityID}
          />
        ));
      }
      break;
    default:
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
