// Requisição para trazer as funções do Service
const personagensService = require('../services/personagens.service');

//  Guardando resultado em uma constante para enviar como resposta da requisição
const findPersonagensController = (req,res) => {
    res.send(personagensService.findPersonagensService());
};
const findPersonagemByIdController= (req,res) => {
    const chosenPersonagens = personagensService.findPersonagemByIdService(req.params.id);
    if (!chosenPersonagens) {
        return res.status(404).send({ message: "Personagem não encontrada!" })
    }
    res.send(chosenPersonagens);
    
};
const createPersonagemController = (req,res) => { 
    let retorno;
    if (req.body) { 
        retorno = personagensService.createPersonagemService(req.body);
        res.send({message: 'Personagem cadastrado com sucesso!'});
    }
        else if (!req.body){
            res.send({message:'Houve um erro ao cadastrar! Personagem não cadastrado'});
        }
};
const updatePersonagemController = (req,res) => {
    if (!req.body || !req.body.nome || !req.body.descricao || !req.body.imagem) {
        return res.status(400).send({ message: "Você não preencheu todos os dados para editar o personagem!" });
    }
    res.send(personagensService.updatePersonagemService(+req.params.id, req.body));
};
const deletePersonagemController = (req,res) => {
    const chosenPersonagem = personagensService.findPersonagemByIdService(req.params.id);
        if (!chosenPersonagem) {
            return res.status(404).send({ message: "Personagem não encontrado!" })
        }  
    personagensService.deletePersonagemService(req.params.id);
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
