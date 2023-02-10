import { Link } from "react-router-dom";
import styled from "styled-components";
import getNavigationLinksByUserType from "../utils/getNavigationLinksByUserType";

const Header = () => {
  return (
    <HeaderContainer>
      <div>LOGO</div>
      <NavigationContainer>
        {getNavigationLinksByUserType().map(({ id, name, to }) => (
          <NavigationLi key={id}>
            <SLink to={to}>{name}</SLink>
          </NavigationLi>
        ))}
      </NavigationContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => props.theme.headerHeight}px;
  padding: 0 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  border-bottom: 10px solid ${(props) => props.theme.mainColor};
  background-color: white;
`;

const NavigationContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const NavigationLi = styled.li``;

const SLink = styled(Link)`
  font-size: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.mainColor};
`;

export default Header;
