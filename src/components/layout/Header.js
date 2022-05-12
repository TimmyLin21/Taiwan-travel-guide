import { Header, MenuToggler, Logo } from "../styles/Header.styled";
import logo from '../../images/logo.svg';
import Container from "../styles/Container.styled";
import { useDispatch } from 'react-redux';
import { headerActions } from "../../store/header";

const MainHeader = () => {
  const dispatch = useDispatch();
  const menuToggleHandler = () => {
    dispatch(headerActions.menuToggle());
  };

  return (
    <Header>
      <Container>
        <MenuToggler onClick={menuToggleHandler}/>
        <Logo to="/">
          <img src={logo} alt="Taiwan Travel logo" />
        </Logo>
        <div />
      </Container>
    </Header>
  );
};

export default MainHeader;