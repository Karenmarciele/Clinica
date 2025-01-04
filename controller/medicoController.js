const MedicoModel = require("../models/MedicoModel");

class MedicoController{
    static async listar(req,res){
        const sucesso = req.query.s;
        const medicos = await MedicoModel.find();
        res.render("medico/Listagem", {medicos, sucesso});
    }    
    
    static async cadastrarGet(req,res){
        const crm = req.params.crm;
        let medico = {};
        console.log(crm);
        if(crm != undefined){
            medico = await MedicoModel.findOne({crm});
        }
        res.render("medico/Cadastrar", {medico});
    }

    static async cadastrarPost(req,res){
        if(req.body._id){
            await MedicoModel.findOneAndUpdate({_id: req.body._id},{
                crm: req.body.crm,
                nome: req.body.nome,
                area: req.body.area,

            });
            res.redirect("/medicos?s=3");
        }else{
            const novoMedico = new MedicoModel({

                crm: req.body.crm,
                nome: req.body.nome,
                area: req.body.area,
                
                });
        
                await novoMedico.save();
                res.redirect("/medicos?s=1");
        }

    
    }

    static async detalhar(req,res){
        const crm = req.params.crm;
        const medico = await MedicoModel.findOne({crm});
        res.render("medico/detalhar",{medico});
    }

    static async remover(req,res){
        const mat = req.params.crm;
        await MedicoModel.deleteOne({crm: mat});
        res.redirect("/medicos?s=2");
    }


}
    

module.exports = MedicoController;