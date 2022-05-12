import { ListTitle, BlueLocation, SiteGrid } from "../styles/SitesList.styled";
import SiteItem from "./SiteItem";

const SitesList = ({title, sites}) => {
  let mappedSites;
  if(sites){
    mappedSites = sites.map((site) => {
      const id = site.HotelID || site.RestaurantID || site.ScenicSpotID || site.ActivityID;
      return <SiteItem siteInfo={site} key={id} id={id}/>
    })
  }

  return (
    <ListTitle>
      <li>
        <BlueLocation />
        <h3>{title}</h3>
        <SiteGrid>
          {mappedSites}
        </SiteGrid>
      </li>
    </ListTitle>
  )
};

export default SitesList;