import { LocationIcon, TimeIcon, PhoneIcon } from "../styles/SitesList.styled";

const SiteInfo = ({location, openHour, time, phone}) => {
  return (
    <>
      {location && openHour && !phone && !time &&(
        <>
          <p><TimeIcon />{openHour}</p>
          <p><LocationIcon />{location}</p>
        </>
      )}
      {location && time && !phone && !openHour &&(
        <>
          <p><TimeIcon />{time}</p>
          <p><LocationIcon />{location}</p>
        </>
      )}
      {location && phone && !time && !openHour &&(
        <>
          <p><PhoneIcon />{phone}</p>
          <p><LocationIcon />{location}</p>
        </>
      )}
      {!location && phone && !time && openHour &&(
        <>
          <p><PhoneIcon />{phone}</p>
          <p><TimeIcon />{openHour}</p>
        </>
      )}
      {location && phone && openHour &&(
        <>
          <p><LocationIcon />{location}</p>
          <p><TimeIcon />{openHour}</p>
          <p><PhoneIcon />{phone}</p>
        </>
      )}
    </>
  )
};

export default SiteInfo;