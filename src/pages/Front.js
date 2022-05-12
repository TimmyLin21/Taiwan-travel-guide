import { useEffect } from "react";
import SitesList from "../components/sites/SitesList";
import { Banner } from "../components/styles/Front.styled";
import { FrontContainer } from "../components/styles/Front.styled";
import banner from "../images/banner.png";
import useHttp from "../hooks/useHttp";
import { getFrontSites, getThreeActivities } from "../lib/api";

const Front = () => {
  const {sendRequest: sendFrontSitesRequest, data: frontSites} = useHttp(getFrontSites, true)
  const {sendRequest:sendActivitiesRequest, data: activities} = useHttp(getThreeActivities, true)
  useEffect(() => {
    sendFrontSitesRequest()
    sendActivitiesRequest()
  },[sendFrontSitesRequest,sendActivitiesRequest])

  return (
    <FrontContainer>
      <Banner>
        <h2>探索。<br />福爾摩沙</h2>
        <img src={banner} alt="banner" />
      </Banner>
      <SitesList title="熱門景點" sites={frontSites?.ScenicSpot}/>
      <SitesList title="觀光活動" sites={activities}/>
      <SitesList title="美食品嚐" sites={frontSites?.Restaurant}/>
      <SitesList title="住宿推薦" sites={frontSites?.Hotel}/>
    </FrontContainer>
  )
};

export default Front;