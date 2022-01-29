const express = require ("express");
const routes = express.Router();

const ControllerPasien = require("../controller/ControllerPasien");

routes.get("/patients", ControllerPasien.index);
routes.get("/patients/:id", ControllerPasien.show);
routes.post("/patients", ControllerPasien.store);
routes.delete("/patients/:id", ControllerPasien.destroy);
routes.put("/patients/:id", ControllerPasien.update);
routes.get("/patients/status/positive", ControllerPasien.positive);
routes.get("/patients/status/negatif", ControllerPasien.negatif);

module.exports = routes;