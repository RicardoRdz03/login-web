import React from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "./estilos/styles.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

function Principal({ loggedUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">LOGIN</p>
        </NavbarBrand>

        <NavbarContent as="div" justify="end">
          {loggedUser}
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="Jason Hughes"
                size="md"
                src="/hombre.png"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold text-center">Bienvenido</p>
                <p className="font-semibold text-center">{loggedUser}</p>
              </DropdownItem>

              <DropdownItem
                onClick={handleLogout}
                key="logout"
                color="danger"
                className="text-center"
              >
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div
        id="fondo2"
        className=" flex justify-center items-center flex-col"
        style={{ height: "90vh" }}
      >
        <div>
          <h1
            id="negritas"
            className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl  text-center"
          >
            Bienvenido a la página principal
          </h1>
        </div>
        <div className="mt-8">
          <p className="text-base text-center">{loggedUser}</p>
        </div>
      </div>
    </>
  );
}

export default Principal;
