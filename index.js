function exibirReceitas() {
    console.log("------------------------------------------------------------------------");
    console.log("Receitas Cadastradas:");
    console.log("------------------------------------------------------------------------");
    listaDeReceitas.forEach((receita) => {
        console.log(receita.titulo)
        console.log("Lista de Ingredientes:");
        receita.ingredientes.forEach((ingrediente) => {
            console.log(`   - ${ingrediente}`)
        })
        console.log(`Vegano: ${receita.vegano ? "Sim" : "Não"}`);
        console.log("------------------------------------------------------------------------");
    })
}

console.log("------------------------------------------------------------------------");
console.log("Lista de Receitas Inicial");
console.log("------------------------------------------------------------------------");
const listaDeReceitas = [{
    id: 1,
    titulo: "Cachorro Quente",
    dificuldade: "Simples",
    ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"],
    preparo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati rem officia atque, officiis odio.",
    link: "http://youtube.com",
    vegano: false,
}, ]

exibirReceitas()

console.log("------------------------------------------------------------------------");
console.log("Lista de Receitas com a 2ª e 3ª receitas Cadastradas");
console.log("------------------------------------------------------------------------");

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

exibirReceitas()

console.log("------------------------------------------------------------------------");
console.log("Lista de Receitas com os id(s) existente(s) deletado(s)");
console.log("------------------------------------------------------------------------");

function deletarReceita(idDeletar) {
    const indexReceita = listaDeReceitas.map(function(o) { return o.id; }).indexOf(idDeletar);

    if (indexReceita == -1) {
        console.log("Receita não encontrada")
    } else {
        listaDeReceitas.splice(indexReceita, 1)
        console.log("Receita exluída")
    }
}
deletarReceita(7)
exibirReceitas()

console.log("------------------------------------------------------------------------");
console.log("Buscar");
console.log("------------------------------------------------------------------------");

const buscarReceita = (termo) => {
    const resultadoBusca = listaDeReceitas.filter((receita) => {
        return receita.titulo.indexOf(termo) != -1
    })
    console.log(resultadoBusca);
}

buscarReceita("Quente")