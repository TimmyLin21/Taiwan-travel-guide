import { CrossIcon, FormControl } from "../styles/Menu.styled";
import { ArrowDownIcon, DropdownMenu } from "../styles/Menu.styled";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/header";
import useSearch from "../../hooks/useSearch";
import { useSearchParams } from "react-router-dom";

const cities = [
  {
    cityName: "台北",
    cityEngName: "Taipei",
  },
  {
    cityName: "基隆",
    cityEngName: "Keelung",
  },
  {
    cityName: "新北",
    cityEngName: "NewTaipei",
  },
  {
    cityName: "連江",
    cityEngName: "LienchiangCounty",
  },
  {
    cityName: "宜蘭",
    cityEngName: "YilanCounty",
  },
  {
    cityName: "新竹市",
    cityEngName: "Hsinchu",
  },
  {
    cityName: "新竹縣",
    cityEngName: "HsinchuCounty",
  },
  {
    cityName: "桃園",
    cityEngName: "Taoyuan",
  },
  {
    cityName: "苗栗",
    cityEngName: "MiaoliCounty",
  },
  {
    cityName: "台中",
    cityEngName: "Taichung",
  },
  {
    cityName: "彰化",
    cityEngName: "ChanghuaCounty",
  },
  {
    cityName: "南投",
    cityEngName: "NantouCounty",
  },
  {
    cityName: "嘉義市",
    cityEngName: "Chiayi",
  },
  {
    cityName: "嘉義縣",
    cityEngName: "ChiayiCounty",
  },
  {
    cityName: "雲林",
    cityEngName: "YunlinCounty",
  },
  {
    cityName: "台南",
    cityEngName: "Tainan",
  },
  {
    cityName: "高雄",
    cityEngName: "Kaohsiung",
  },
  {
    cityName: "澎湖",
    cityEngName: "PenghuCounty",
  },
  {
    cityName: "金門",
    cityEngName: "KinmenCounty",
  },
  {
    cityName: "屏東",
    cityEngName: "PingtungCounty",
  },
  {
    cityName: "台東",
    cityEngName: "TaitungCounty",
  },
  {
    cityName: "花蓮",
    cityEngName: "HualienCounty",
  },
];

const CustomSelect = () => {
  const dispatch = useDispatch();
  const searchResult = useSearch();
  const [searchParams] = useSearchParams();

  const optionsIsShow = useSelector((state) => state.header.optionsIsShow);
  const selectedCity = searchParams.get('city');
  
  const cityChangeHandler = (e) => {
    const city = e.target.dataset.name;
    dispatch(headerActions.changeCity({city}));
    dispatch(headerActions.optionToggle());
    searchResult({keyword:'', city, theme:''});
  }
  
  const optionsToggleHandler = () => {
    dispatch(headerActions.optionToggle());
  }

  const cancelHandler = () => {
    dispatch(headerActions.changeCity({city: null}));
    searchResult({keyword:'', city: null, theme:''});
  }

  const cityList = cities.map((city) => (
    <li key={city.cityName}>
      <button type="button" onClick={cityChangeHandler} data-name={city.cityEngName}>{city.cityName}</button>
    </li>
  ));

  const text = selectedCity ? <p>{selectedCity}<CrossIcon onClick={cancelHandler}/></p> : '目的地';
  return (
    <>
      <FormControl>
        <div>{text}</div>
        <ArrowDownIcon onClick={optionsToggleHandler}/>
        {optionsIsShow && (
          <DropdownMenu>
            <ul>{cityList}</ul>
          </DropdownMenu>
        )}
      </FormControl>
    </>
  );
};

export default CustomSelect;
