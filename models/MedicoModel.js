const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicoSchema = Schema({
    crm: Number,
    nome: String,
    area: String,
});

module.exports = mongoose.model("Medico", medicoSchema);

