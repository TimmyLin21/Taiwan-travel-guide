import { useNavigate } from "react-router-dom";
import { SiteCard } from "../styles/SitesList.styled";
import SiteInfo from "./SiteInfo";
import comingSoon from "../../images/comingSoon.webp";

const SiteItem = ({ siteInfo, id }) => {
  const navigation = useNavigate();

  let title, type;
  if (siteInfo.HotelName) {
    title = siteInfo.HotelName;
    type = "Hotel";
  } else if (siteInfo.RestaurantName) {
    title = siteInfo.RestaurantName;
    type = "Restaurant";
  } else if (siteInfo.ScenicSpotName) {
    title = siteInfo.ScenicSpotName;
    type = "ScenicSpot";
  } else if (siteInfo.ActivityName) {
    title = siteInfo.ActivityName;
    type = "Activity";
  }

  let pictureUrl, pictureDescription;
  if (siteInfo.Picture) {
    pictureUrl = siteInfo.Picture.PictureUrl1;
    pictureDescription = siteInfo.Picture.PictureDescription1;
  }
  const location = siteInfo.Address;
  const openHour = siteInfo.OpenTime;
  let time;
  if (siteInfo.StartTime && siteInfo.EndTime) {
    let startTime = new Date(siteInfo.StartTime).toJSON().slice(0, 10);
    let endTime = new Date(siteInfo.EndTime).toJSON().slice(0, 10);
    time = `${startTime} ~ ${endTime}`;
  }
  const phone = siteInfo.Phone;
  const goDetailHandler = () => {
    navigation({
      pathname: "/detail",
      search: `?id=${id}&type=${type}`,
    });
  };

  return (
    <SiteCard>
      <button type="button" onClick={goDetailHandler}>
        {pictureUrl ? (
          <figure>
            <img src={pictureUrl} alt={pictureDescription} />
          </figure>
        ) : (
          <figure>
            <img src={comingSoon} alt="Not found!" />
          </figure>
        )}
      </button>
      <div>
        <h4>{title}</h4>
        <SiteInfo
          location={location}
          openHour={openHour}
          time={time}
          phone={phone}
        />
      </div>
    </SiteCard>
  );
};

export default SiteItem;
