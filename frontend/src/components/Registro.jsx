import React, { useState } from "react";
import { Button, Divider, Input } from "@nextui-org/react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import Axios from "axios";
import Swal from "sweetalert2";

export default function Registro() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [nombre, setNombre] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const registrar = () => {
    if (!nombre || !paterno || !materno || !usuario || !contraseña) {
      alert("Por favor, llena todos los campos.");
      return; // Detener el proceso de registro si falta algún campo
    }

    Axios.post("http://localhost:3001/registrar", {
      nombre: nombre,
      paterno: paterno,
      materno: materno,
      usuario: usuario,
      contraseña: contraseña,
    }).then(() => {
      limpiarCampos();
      Swal.fire({
        title: "<strong>¡Registro exitoso!</strong>",
        html:
          "<i>El usuario <strong>" +
          usuario +
          "</strong> fue registrado con éxito </i>",
        icon: "success",
        timer: 3000,
      });
    });
  };

  const limpiarCampos = () => {
    setNombre("");
    setPaterno("");
    setMaterno("");
    setUsuario("");
    setContraseña("");
  };

  return (
    <>
      <div id="fondo">
        <div id="blur">
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-11/12 sm:w-11/12 md:4/6 lg:w-2/6 xl:w-2/6">
              <div id="card" className="rounded-lg px-3 py-4">
                <div className="flex justify-center">
                  <h1 id="titulo" className="text-3xl font-bold">
                    REGISTRO
                  </h1>
                </div>
                <div className="flex justify-center my-6">
                  <h2 className="text-xl text-center">DATOS PERSONALES</h2>
                </div>
                <Divider />
                <div className="mt-6 flex justify-center grid grid-cols-2 gap-2">
                  <div className="col-span-2">
                    <Input
                      variant="bordered"
                      value={nombre}
                      onChange={(event) => {
                        setNombre(event.target.value);
                      }}
                      id="nombre"
                      type="text"
                      label="Nombre(s)"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      variant="bordered"
                      value={paterno}
                      onChange={(event) => {
                        setPaterno(event.target.value);
                      }}
                      id="paterno"
                      type="text"
                      label="Apellido Paterno"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      variant="bordered"
                      value={materno}
                      onChange={(event) => {
                        setMaterno(event.target.value);
                      }}
                      id="materno"
                      type="text"
                      label="Apellido Materno"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-center grid grid-cols-2 gap-2">
                  <div className="col-span-2 flex justify-center my-6">
                    <h2 className="text-xl text-center">
                      CREACIÓN DE USUARIO Y CONTRASEÑA
                    </h2>
                  </div>
                  <div className="col-span-2 mb-6">
                    <Divider />
                  </div>
                  <div className="col-span-1">
                    <Input
                      variant="bordered"
                      value={usuario}
                      onChange={(event) => {
                        setUsuario(event.target.value);
                      }}
                      id="usuario"
                      type="text"
                      label="Usuario"
                      required
                    />
                  </div>

                  <div className="col-span-1">
                    <Input
                      variant="bordered"
                      value={contraseña}
                      onChange={(event) => {
                        setContraseña(event.target.value);
                      }}
                      id="contraseña"
                      label="Contraseña"
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <i className="bi bi-eye-slash text-2xl text-default-400 pointer-events-none"></i>
                          ) : (
                            <i className="bi bi-eye text-2xl text-default-400 pointer-events-none"></i>
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                      className=""
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <Button onClick={registrar} color="secondary" variant="ghost">
                    Registrar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
