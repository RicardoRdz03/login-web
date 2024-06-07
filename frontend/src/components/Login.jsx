import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./estilos/styles.css";

function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const iniciarSesion = () => {
    Axios.post("http://localhost:3001/login", { usuario, contraseña })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Login exitoso");
        navigate("/main");
      })
      .catch((error) => {
        alert("Usuario o contraseña incorrectos");
      });
  };

  return (
    <>
      <div id="fondo">
        <div id="blur">
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-11/12 sm:6/12 md:4/6 lg:w-2/6 xl:w-2/6">
              <div
                id="card"
                className="rounded-lg px-8 py-12 sm:px-8 md:px-auto lg:px-6 xl:px-6 sm:py-12 md:py-auto lg:py-12 xl:py-12"
              >
                <div className="flex justify-center">
                  <h1 id="titulo" className="text-3xl font-bold text-center">
                    INICIO DE SESIÓN
                  </h1>
                </div>
                <div className="mt-6 flex justify-center grid grid-cols-2 gap-2">
                  <div className="col-span-2">
                    <Input
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      variant="bordered"
                      id="usuario"
                      type="text"
                      label="Usuario"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      value={contraseña}
                      onChange={(e) => setContraseña(e.target.value)}
                      label="Contraseña"
                      variant="bordered"
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <i className="fi fi-rs-crossed-eye text-2xl text-default-400 pointer-events-none"></i>
                          ) : (
                            <i className="fi fi-rr-eye text-2xl text-default-400 pointer-events-none"></i>
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                      className=""
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <Button onClick={iniciarSesion}>Iniciar sesión</Button>
                </div>
                <div className="flex justify-center mt-8">
                  <p>¿No puedes iniciar sesión?</p>
                </div>
                <div className="flex justify-center mt-2">
                  <a href="/registro">
                    <p>Haz clic aquí para registrarte</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
