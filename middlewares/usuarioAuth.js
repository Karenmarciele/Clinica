const express = require("express");
const routes = express.Router();
const medicoController = require("../controller/medicoController");

routes.get("/medicos", medicoController.listar);
routes.post("/medicos", medicoController.cadastrarPost);
routes.get("/medicos/cadastrar/:crm?", medicoController.cadastrarGet);
routes.get("/medicos/:crm", medicoController.detalhar);
routes.get("/medicos/remover/:crm", medicoController.remover);

module.exports = routes;