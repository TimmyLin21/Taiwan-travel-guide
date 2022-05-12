import styled from "styled-components";
import FortZeelandia from "../../images/FortZeelandia.svg";
import YouBike from "../../images/YouBike.svg";
import XingtianTemple from "../../images/XingtianTemple.svg";
import SkyLantern from "../../images/SkyLantern.svg";
import QueensHead from "../../images/QueensHead.svg";
import BubbleTea from "../../images/BubbleTea.svg";
import GrandHotel from "../../images/GrandHotel.svg";
import HotAirBalloon from "../../images/HotAirBalloon.svg";
import { device } from "./break-point";

export const FeaturedThemesContainer = styled.div`
  padding-bottom: 3rem;
  @media ${device.lg} {
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }
  h3 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: left;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  li {
    width: 48%;
    margin-bottom: 0.75rem;
  }
`;

export const ThemeButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
  ${({ $active }) => ($active ? "border-radius: var(--radius-sm)" : "")};
  ${({ $active }) =>
    $active ? "border: 1px solid var(--color-primary)" : "border: 1px solid transparent"};
  &:hover {
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-primary);
  }
`

export const FortZeelandiaIcon = styled.span`
  &::after {
    content: url(${FortZeelandia});
  }
`;
export const YouBikeIcon = styled.span`
  &::after {
    content: url(${YouBike});
  }
`;
export const XingtianTempleIcon = styled.span`
  &::after {
    content: url(${XingtianTemple});
  }
`;
export const SkyLanternIcon = styled.span`
  &::after {
    content: url(${SkyLantern});
  }
`;
export const QueensHeadIcon = styled.span`
  &::after {
    content: url(${QueensHead});
  }
`;
export const BubbleTeaIcon = styled.span`
  &::after {
    content: url(${BubbleTea});
  }
`;
export const GrandHotelIcon = styled.span`
  &::after {
    content: url(${GrandHotel});
  }
`;
export const HotAirBalloonIcon = styled.span`
  &::after {
    content: url(${HotAirBalloon});
  }
`;
