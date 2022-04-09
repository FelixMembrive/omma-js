console.log("------------------------------------------------------------------------");
console.log("Lista de Receitas Inicial");
const listaDeReceitas = [{
    id: 1,
    titulo: "Cachorro Quente",
    dificuldade: "Simples",
    ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"],
    preparo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati rem officia atque, officiis odio.",
    link: "http://youtube.com",
    vegano: false,
}, ]

console.log(listaDeReceitas)

const cadastrarReceita = (id, titulo, dificuldade, ingredientes, preparo, link, vegano) => {
    listaDeReceitas.push({
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano
    })
}

cadastrarReceita(
    2,
    "Ovo frito",
    "Simples", ["1 ovo", "1 colher de azeite", "Sal a gosto"],
    "Quebre o ovo em um copo americano, jogue sal, e leve à frigideira.",
    "https://google.com",
    false, )

cadastrarReceita(
    3,
    "Bolo de Fubá",
    "Simples", ["3 ovo", "1 chícara de leite", "2 colheres de manteiga"],
    "Bata tudo e leve ao forno",
    "https://app.gama.academy/",
    true, )

console.log("------------------------------------------------------------------------");;
console.log("Lista de Receitas com a 2ª e 3ª receitas Cadastradas");
console.log(listaDeReceitas)


const deletarReceita = (idDeletar = 0) => {
    idSplice = idDeletar - 1
}

console.log("------------------------------------------------------------------------");;
console.log("Lista de Receitas com o id passado deletado");
console.log(listaDeReceitas)

// listaDeReceitas.find({ id: 1 })

const keys = listaDeReceitas.keys();
let text = "";
for (let x of keys) {
    text += x + "<br>";
}

console.log(text)