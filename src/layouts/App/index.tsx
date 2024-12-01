import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Content, LayoutContainer } from "./styles";

export function AppLayout() {
  return (
    <LayoutContainer>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  )
}