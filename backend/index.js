const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "login",
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos: ", err);
    return;
  }
  console.log("Conectado a la base de datos MYSQL");
});

const SECRET_KEY = "your_secret_key";

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.post("/registrar", (req, res) => {
  const nombre = req.body.nombre;
  const paterno = req.body.paterno;
  const materno = req.body.materno;
  const usuario = req.body.usuario;
  const contraseña = req.body.contraseña;

  db.query(
    "INSERT INTO usuarios(nombre,paterno,materno,usuario,contraseña) VALUES (?,?,?,?,?)",
    [nombre, paterno, materno, usuario, contraseña],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { usuario, contraseña } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?",
    [usuario, contraseña],

    (err, result) => {
      if (err) {
        res.status(500).send({ error: "Error en el servidor" });
      } else {
        if (result.length > 0) {
          const token = jwt.sign({ id: result[0].id }, SECRET_KEY, {
            expiresIn: "1h",
          });
          res.send({ message: "Login exitoso", token });
        } else {
          res.status(401).send({ message: "Llena los campos" });
        }
      }
    }
  );
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en localhost:${PORT}`);
});
