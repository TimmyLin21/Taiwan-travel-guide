import {
  FeaturedThemesContainer,
  FortZeelandiaIcon,
  YouBikeIcon,
  XingtianTempleIcon,
  SkyLanternIcon,
  QueensHeadIcon,
  BubbleTeaIcon,
  GrandHotelIcon,
  HotAirBalloonIcon,
  ThemeButton,
} from "../styles/FeaturedThemes.styled";

import { useDispatch } from "react-redux";
import { headerActions } from "../../store/header";
import { paginationActions } from "../../store/pagination";
import useSearch from "../../hooks/useSearch";
import { useSearchParams } from "react-router-dom";

const FeaturedThemes = () => {
  const dispatch = useDispatch();
  const searchResult = useSearch();
  const [searchParams] = useSearchParams();

  const selectedTheme = searchParams.get('theme');

  const changeThemeHandler = (e) => {
    const theme = e.target.dataset.theme;
    dispatch(headerActions.changeTheme({theme}));
    if (window.innerWidth < 1080) {
      dispatch(headerActions.hideMenu());
    }
    dispatch(paginationActions.clearPageIndex());
    window.scrollTo({top:0, behavior:'smooth'});
    searchResult({keyword:'', city: '', theme});
  }

  return (
    <FeaturedThemesContainer>
      <h3>精選主題</h3>
      <nav>
        <ul>
          <li>
            <ThemeButton onClick={changeThemeHandler} data-theme='歷史文化' $active={selectedTheme === '歷史文化'}>
              <FortZeelandiaIcon data-theme='歷史文化'/>
              歷史文化
            </ThemeButton>
          </li>
          <li>
            <ThemeButton onClick={changeThemeHandler} data-theme='戶外踏青' $active={selectedTheme === '戶外踏青'}>
              <YouBikeIcon data-theme='戶外踏青'/>
              戶外踏青
            </ThemeButton>
          </li>
          <li>
            <ThemeButton onClick={changeThemeHandler} data-theme='宗教巡禮' $active={selectedTheme === '宗教巡禮'}>
              <XingtianTempleIcon data-theme='宗教巡禮'/>
              宗教巡禮
            </ThemeButton>
          </li>
          <li>
            <ThemeButton onClick={changeThemeHandler} data-theme='親子活動' $active={selectedTheme === '親子活動'}>
              <SkyLanternIcon data-theme='親子活動'/>
              親子活動
            </ThemeButton>
          </li>
          <li>
            <ThemeButton onClick={changeThemeHandler} data-theme='風景區' $active={selectedTheme === '風景區'}>
              <QueensHeadIcon data-theme='風景區'/>
              風景區
            </ThemeButton>
          </li>
          <li>
            <ThemeButton onClick={changeThemeHandler} data-theme='美食品嚐' $active={selectedTheme === '美食品嚐'}>
              <BubbleTeaIcon data-theme='美食品嚐'/>
              美食品嚐
            </ThemeButton>
          </li>
          <li>
            <ThemeButton onClick={changeThemeHandler} data-theme='住宿推薦' $active={selectedTheme === '住宿推薦'}>
              <GrandHotelIcon data-theme='住宿推薦'/>
              住宿推薦
            </ThemeButton>
          </li>
          <li>
            <ThemeButton onClick={changeThemeHandler} data-theme='觀光活動' $active={selectedTheme === '觀光活動'}>
              <HotAirBalloonIcon data-theme='觀光活動'/>
              觀光活動
            </ThemeButton>
          </li>
        </ul>
      </nav>
    </FeaturedThemesContainer>
  );
};

export default FeaturedThemes;
