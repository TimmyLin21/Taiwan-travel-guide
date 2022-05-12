import { Flex, StickyTop } from "../styles/Layout.styled";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { headerActions } from "../../store/header";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect } from "react";

const Layout = (props) => {
  const dispatch = useDispatch();
  const menuIsShow = useSelector((state) => state.header.menuIsShow);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1024) {
      dispatch(headerActions.showMenu())
    } else {
      dispatch(headerActions.hideMenu())
    }
  }, [width,dispatch]);

  return (
    <Flex>
      <StickyTop>
        <Header />
        {menuIsShow && <Menu />}
      </StickyTop>
      <div>
        <main>{props.children}</main>
        <Footer />
      </div>
    </Flex>
  );
};

export default Layout;
