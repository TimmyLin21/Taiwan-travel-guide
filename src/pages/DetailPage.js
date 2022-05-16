import { useEffect } from "react";
import SiteInfo from "../components/sites/SiteInfo";
import SiteItem from "../components/sites/SiteItem";
import {
  DetailContainer,
  BackButton,
  PrintIcon,
  ShareIcon,
  InfoCard,
  BumpButton,
  DescriptionContainer
} from "../components/styles/DetailPage.styled";
import { Flex } from "../components/styles/Flex.styled";
import { SiteGrid } from "../components/styles/SitesList.styled";
import useHttp from "../hooks/useHttp";
import { getSiteInfo, getNearbySpots } from "../lib/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import comingSoon from '../images/comingSoon.webp';

const DetailPage = () => {
  const { sendRequest, data: siteInfo, status } = useHttp(getSiteInfo, true);
  const { sendRequest: requestNearbySpots, data: nearbySpots } = useHttp(
    getNearbySpots,
    true
  );
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  const navigation = useNavigate();
  const name = `${type}Name`;

  const sitePosition = [
    siteInfo?.Position?.PositionLat,
    siteInfo?.Position?.PositionLon,
  ];

  const goBackHandler = () => {
    navigation(-1);
  };

  const printHandler = () => {
    window.print();
  };

  const shareHandler = () => {
    navigator.share({
      title: name,
      url: window.location.href,
    });
  };
  // position: {lat:siteInfo?.position?.PositionLat,lon:siteInfo?.position?.PositionLon}
  useEffect(() => {
    sendRequest({ id, type });
  }, [sendRequest, id, type]);

  useEffect(() => {
    if(siteInfo?.Position){
      requestNearbySpots({
        type,
        position: {
          lat: siteInfo?.Position?.PositionLat,
          lon: siteInfo?.Position?.PositionLon,
        },
        id: id
      });
    }
  }, [requestNearbySpots, type, siteInfo, id]);

  let mappedSites, transferedDescription;
  if (nearbySpots) {
    mappedSites = nearbySpots.map((site) => {
      const id =
        site.HotelID ||
        site.RestaurantID ||
        site.ScenicSpotID ||
        site.ActivityID;
      return <SiteItem siteInfo={site} key={id} id={id} />;
    });
  }

  if(siteInfo?.DescriptionDetail) {
    const splittedStrings = siteInfo.DescriptionDetail.split('。');
    transferedDescription = splittedStrings.map((string,index) => <p key={index}>{string}。</p>);
  }

  if (status === "pending") {
    return <div></div>;
  }
  return (
    <DetailContainer>
      <Flex justifyContent="space-between">
        <Flex>
          <BackButton type="button" onClick={goBackHandler}>
            <span />
          </BackButton>
          <h2>{siteInfo[name]}</h2>
        </Flex>
        <div>
          <BumpButton type="button" onClick={printHandler}>
            <PrintIcon />
          </BumpButton>
          {navigator.share && (
            <BumpButton type="button" onClick={shareHandler}>
              <ShareIcon />
            </BumpButton>
          )}
        </div>
      </Flex>
      <img
        src={siteInfo.Picture.PictureUrl1 || comingSoon}
        alt={siteInfo.Picture.PictureDescription1 || 'Coming soon.'}
      />
      <InfoCard>
        <SiteInfo
          location={siteInfo.Address}
          openHour={siteInfo.OpenTime}
          phone={siteInfo.Phone}
        />
      </InfoCard>
      <h3>景點介紹</h3>
      <DescriptionContainer>
        {transferedDescription ||
          siteInfo.Description ||
          `店家尚未提供介紹喔 (ఠ్ఠ ˓̭ ఠ్ఠ)`}
      </DescriptionContainer>
      <h3>交通方式</h3>
      <MapContainer
        center={sitePosition}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "280px", marginBottom: "1rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={sitePosition}>
          <Popup>{siteInfo[name]}</Popup>
        </Marker>
      </MapContainer>
      <p>{siteInfo.TravelInfo || ""}</p>
      <h3>鄰近景點</h3>
      <SiteGrid>{mappedSites}</SiteGrid>
    </DetailContainer>
  );
};

export default DetailPage;
