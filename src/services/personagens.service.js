// Array para guardar informações dos personagens
const personagens = [
    {
        id: 1,
        nome: "Mônica",
        descricao: "Conhecida por sua personalidade forte e ainda sensível, junto a sua pose de líder nata com seu jeito desajeitado, cômico e apaixonante para sua idade, Mônica é a visão das crianças desastradas aos olhos infantis, mas que ainda encanta com seu aspecto divertido e otimista de ver as coisas.",
        imagem: "https://turmadamonica.uol.com.br/home/images/img_tm.png"
    },
    {
        id: 2,
        nome: "Cebolinha",
        descricao: "Cebolinha é um ligeiro causador de problemas por conta da arrogância (já que tem muito talento e é mais esperto que a maioria das crianças), cheio de teimosia e super descarado – mesmo se achando o maioral e bambambã, não vale de nada e sempre acaba saindo na pior!",
        imagem: "https://pbs.twimg.com/profile_images/1190759003/cebolinha4_400x400.jpg"
    },
    {
        id: 3,
        nome: "Magali",
        descricao: "Magali, a comilona da fome nunca saciada, meiga e desastrada criança, faz jus a um nome nacionalmente conhecido como uma das personagens principais, se não, uma das maiores protagonistas.",
        imagem: "https://i.pinimg.com/736x/3a/bc/6e/3abc6e59d3d74d30a279ec12ecddf75b.jpg"
    },
    {
        id: 4,
        nome: "Cascão",
        descricao: "Cascão é o espevitado sujinho do Bairro do Limoeiro, o garotinho é conhecidíssimo pelas peripécias no futebol, nas brincadeiras de rua, coleções de bugigangas e acervo de gibis e figurinhas, sua característica marcante é ele não gostar de banho, embora em suas primeiras aparições tomava aos sábados. ",
        imagem: "https://capricho.abril.com.br/wp-content/uploads/2020/03/cascao.jpg?quality=85&strip=info&w=650"
    }
];
// Retorna o array com todas as paletas
const findPersonagensService = () => {
    return personagens;
};
// Retorna o objeto por id
const findPersonagemByIdService = (id) => {
    return (personagens.find((personagem) => personagem.id == id));
};
// Adiciona o objeto criado ao array
const createPersonagemService = (personagem) => {
    personagens.push(personagem);
};
// Edita o personagem por id
const updatePersonagemService = (id, personagemEdit) => {
    personagemEdit[`id`] = id;
    const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
    personagens[personagemIndex] = personagemEdit;
    return (personagemEdit);
};
// Exclui personagem por id
const deletePersonagemService = (id) => {
    const personagemIndex  = personagens.findIndex((personagem) => personagem.id == id);
    return personagens.splice(personagemIndex, 1);
};

// Exportando as funções
module.exports =  {
    findPersonagensService,
    findPersonagemByIdService,
    createPersonagemService,
    updatePersonagemService,
    deletePersonagemService
};
