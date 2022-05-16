import { LocationIcon, TimeIcon, PhoneIcon } from "../styles/SitesList.styled";

const SiteInfo = ({location, openHour, time, phone}) => {
  return (
    <>
      { location ? <p><LocationIcon />地址：{location}</p> : ''}
      { openHour ? <p><TimeIcon />開放時間：{openHour}</p> : ''}
      { phone ? <p><PhoneIcon />聯絡電話：{phone}</p> : ''}
      { time ? <p><TimeIcon />活動時間：{time}</p> : ''}
    </>
  )
};

export default SiteInfo;