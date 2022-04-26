const mongoose = require('mongoose');
// Requisição para trazer as funções do Service
const personagensService = require('../services/personagens.service');

//  Guardando resultado em uma constante para enviar como resposta da requisição
const findPersonagensController = async (req,res) => {
    const allPersonagens = await personagensService.findPersonagensService();
    res.send(allPersonagens);
};
const findPersonagemByIdController = async (req,res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res
          .status(400)
          .send({ message: 'ID inválido!' });
        return;
      }   
    const chosenPersonagem = await personagensService.findPersonagemByIdService(req.params.id);
    res.send(chosenPersonagem);
};
const createPersonagemController = async (req,res) => { 
    var retorno;
    if (req.body) { 
        retorno = await personagensService.createPersonagemService(req.body);
        res.send({message: 'Personagem cadastrado com sucesso!'});
    }
        else if (!req.body){
            res.send({message:'Houve um erro ao cadastrar! Personagem não cadastrado'});
        }
};
const updatePersonagemController = async (req,res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).send({ message: 'ID inválido!' });
        return;
    }
    const chosenPersonagem = await personagensService.findPersonagemByIdService(req.params.id);
    if (!chosenPersonagem) {
        return res.status(404).send({ message: "Personagem não encontrado!" })
    }  
    if (
        !req.body || 
        !req.body.nome || 
        !req.body.descricao || 
        !req.body.imagem
        ) 
    {
        return res.status(400).send({ message: "Você não preencheu todos os dados para editar o personagem!" });
    }
    const updatedPersonagem = await personagensService.updatePersonagemService(req.params.id, req.body);
    res.send(updatedPersonagem);
};
const deletePersonagemController = async (req,res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).send({ message: 'ID inválido!' });
        return;
      }
    const chosenPersonagem = personagensService.findPersonagemByIdService(req.params.id);
        if (!chosenPersonagem) {
            return res.status(404).send({ message: "Personagem não encontrado!" })
        }  
    await personagensService.deletePersonagemService(req.params.id);
    res.send({message: 'Personagem excluído com sucesso!'});  
};
// Exportando as funções
module.exports = {
    findPersonagensController,
    findPersonagemByIdController,
    createPersonagemController,
    updatePersonagemController,
    deletePersonagemController
};
