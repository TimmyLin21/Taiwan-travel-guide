import { useEffect } from "react";
import SiteInfo from "../components/sites/SiteInfo";
import SiteItem from "../components/sites/SiteItem";
import {
  DetailContainer,
  BackIcon,
  PrintIcon,
  ShareIcon,
  InfoCard,
} from "../components/styles/DetailPage.styled";
import { Flex } from "../components/styles/Flex.styled";
import { SiteGrid } from "../components/styles/SitesList.styled";
import useHttp from "../hooks/useHttp";
import { getSiteInfo, getNearbySpots } from "../lib/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
    requestNearbySpots({
      type,
      position: {
        lat: siteInfo?.Position?.PositionLat,
        lon: siteInfo?.Position?.PositionLon,
      },
      id: id
    });
  }, [requestNearbySpots, type, siteInfo, id]);

  let mappedSites;
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

  if (status === "pending") {
    return <div>123</div>;
  }
  return (
    <DetailContainer>
      <Flex justifyContent="space-between">
        <Flex>
          <button type="button">
            <BackIcon onClick={goBackHandler} />
          </button>
          <h2>{siteInfo[name]}</h2>
        </Flex>
        <div>
          <button type="button" onClick={printHandler}>
            <PrintIcon />
          </button>
          {navigator.share && (
            <button type="button" onClick={shareHandler}>
              <ShareIcon />
            </button>
          )}
        </div>
      </Flex>
      <img
        src={siteInfo.Picture.PictureUrl1}
        alt={siteInfo.Picture.PictureDescription1}
      />
      <InfoCard>
        <SiteInfo
          location={siteInfo.Address}
          openHour={siteInfo.OpenTime}
          phone={siteInfo.Phone}
        />
      </InfoCard>
      <h3>景點介紹</h3>
      <p>
        {siteInfo.DescriptionDetail ||
          siteInfo.Description ||
          `店家尚未提供介紹喔 (ఠ్ఠ ˓̭ ఠ్ఠ)`}
      </p>
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
      <h3>更多景點</h3>
      <SiteGrid>{mappedSites}</SiteGrid>
    </DetailContainer>
  );
};

export default DetailPage;
