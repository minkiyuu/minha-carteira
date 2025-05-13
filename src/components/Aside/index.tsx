import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import Toggle from "../Toggle";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from "react-icons/md";
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter,
} from "./styles";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/theme";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <LogImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink to="/">
          {MdDashboard({})}
          Dashboard
        </MenuItemLink>
      </MenuContainer>
      <MenuContainer>
        <MenuItemLink to="/list/entry-balance">
          {MdArrowUpward({})}
          Entradas
        </MenuItemLink>
      </MenuContainer>
      <MenuContainer>
        <MenuItemLink to="/list/exity-balance">
          {MdArrowDownward({})}
          Saídas
        </MenuItemLink>
      </MenuContainer>
      <MenuContainer>
        <MenuItemButton onClick={signOut}>
          {MdExitToApp({})}
          Sair
        </MenuItemButton>
      </MenuContainer>
      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
