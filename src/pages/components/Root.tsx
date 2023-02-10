import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../shared/components/Header";

const Root = () => {
  return (
    <RootContainer>
      <Header />
      <Outlet />
    </RootContainer>
  );
};

const RootContainer = styled.div`
  margin-top: ${(props) => props.theme.headerHeight}px;
`;

export default Root;
