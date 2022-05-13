import { LocationIcon, TimeIcon, PhoneIcon } from "../styles/SitesList.styled";

const SiteInfo = ({location, openHour, time, phone}) => {
  return (
    <>
      { location ? <p><LocationIcon />{location}</p> : ''}
      { openHour ? <p><TimeIcon />{openHour}</p> : ''}
      { phone ? <p><PhoneIcon />{phone}</p> : ''}
      { time ? <p><TimeIcon />{time}</p> : ''}
    </>
  )
};

export default SiteInfo;