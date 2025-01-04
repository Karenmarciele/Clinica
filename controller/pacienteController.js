const PacienteModel = require("../models/PacienteModel");

class PacienteController{
    static async listar(req,res){
        const sucesso = req.query.s;
        const pacientes = await PacienteModel.find();
        res.render("paciente/Listagem", {pacientes, sucesso});
    }    
    
    static async cadastrarGet(req,res){
        const cpf = req.params.cpf;
        let paciente = {};
        console.log(cpf);
        if(cpf != undefined){
            paciente = await PacienteModel.findOne({cpf});
        }
        res.render("paciente/Cadastrar", {paciente});
    }

    static async cadastrarPost(req,res){
        if(req.body._id){
            await PacienteModel.findOneAndUpdate({_id: req.body._id},{
                cpf: req.body.cpf,
                nome: req.body.nome,
                caso: req.body.caso

            });
            res.redirect("/pacientes?s=3");
        }else{
            const novaPaciente = new PacienteModel({

                cpf: req.body.cpf,
                nome: req.body.nome,
                caso: req.body.caso
                
                });
        
                await novaPaciente.save();
                res.redirect("/pacientes?s=1");
        }

    
    }

    static async detalhar(req,res){
        const cpf = req.params.cpf;
        const paciente = await PacienteModel.findOne({cpf});
        res.render("paciente/detalhar",{paciente});
    }

    static async remover(req,res){
        const cp = req.params.cpf;
        await PacienteModel.deleteOne({cpf: cp});
        res.redirect("/pacientes?s=2");
    }


}
    

module.exports = PacienteController;