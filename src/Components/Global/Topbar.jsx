import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../../assets/Logo.png";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Test", "Test", "Test"];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-transparent"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand justify="start">
        <img src={Logo} alt="logo" className=" sm:w-1/2 md:w-1/3" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold"
            color="foreground"
            href="/prodotti"
            aria-current="page"
          >
            Prodotti
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="/azienda">
            Azienda
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:flex justify-end" justify="end">
        <NavbarItem className="hidden md:block">
          <Link color="foreground" href="/azienda">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Button color="primary" radius="sm">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-xl"
              color={
                index === 2
                  ? "foreground"
                  : index === menuItems.length - 1
                  ? "foreground"
                  : "foreground"
              }
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
