const express = require('express'); //Declaração require para importar o express
const router = express.Router(); // Chamando o método .Router()
// Requisição para trazer as funções do controller
const personagensController = require('../controllers/personagens.controller'); 

// Chamando as funções do controller
router.get('/find-personagens', personagensController.findPersonagensController);
router.get('/find-personagem/:id', personagensController.findPersonagemByIdController);
router.post('/create', personagensController.createPersonagemController);
router.put('/update/:id', personagensController.updatePersonagemController);
router.delete('/delete/:id', personagensController.deletePersonagemController)
// Exportando as funções
module.exports = router;
