const express = require("express");
const routes = express.Router();
const pacienteController = require("../controller/pacienteController");

routes.get("/pacientes", pacienteController.listar);
routes.post("/pacientes", pacienteController.cadastrarPost);
routes.get("/pacientes/cadastrar/:cpf?", pacienteController.cadastrarGet);
routes.get("/pacientes/:cpf", pacienteController.detalhar);
routes.get("/pacientes/remover/:cpf", pacienteController.remover);

module.exports = routes;