function exibirReceitas(listaAlvo = listaDeReceitas) {
    console.log("------------------------------------------------------------------------");
    console.log("Receitas Cadastradas:");
    console.log("------------------------------------------------------------------------");
    listaAlvo.forEach((receita) => {
        console.log(`${receita.titulo} (${receita.id})`)
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
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    };
    listaDeReceitas.push(novaReceita)
    console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
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
    "Simples", ["3 ovos", "1 chícara de leite", "2 colheres de manteiga"],
    "Bata tudo e leve ao forno",
    "https://app.gama.academy/",
    true, )

exibirReceitas()

console.log("------------------------------------------------------------------------");
console.log("Lista de Receitas com os id(s) existente(s) deletado(s)");
console.log("------------------------------------------------------------------------");

function deletarReceita(idDeletar) {
    // const indexReceita = listaDeReceitas.map((receita) => { return receita.id; }).indexOf(idDeletar);
    const indexReceita = listaDeReceitas.findIndex((receita) => receita.id === idDeletar);
    if (indexReceita == -1) {
        console.log(`Receita de id: ${idDeletar} não encontrada`)
    } else {
        listaDeReceitas.splice(indexReceita, 1)
        console.log(`Receita de id: ${idDeletar} exluída com sucesso!`)
    }
}
deletarReceita(7)
deletarReceita(2)
deletarReceita(3)
exibirReceitas()

cadastrarReceita(
    5,
    "Ovo frito",
    "Simples", ["1 ovo", "1 colher de azeite", "Sal a gosto"],
    "Quebre o ovo em um copo americano, jogue sal, e leve à frigideira.",
    "https://google.com",
    false, )

cadastrarReceita(
    6,
    "Bolo de Fubá",
    "Simples", ["3 ovos", "1 chícara de leite", "2 colheres de manteiga"],
    "Bata tudo e leve ao forno",
    "https://app.gama.academy/",
    true, )



// const buscarReceita = (termo) => {
//     const resultadoBusca = listaDeReceitas.filter((receita) => {
//         return (receita.titulo.indexOf(termo) != -1 ? (receita.titulo.indexOf(termo) != -1) : (receita.titulo.indexOf(termo)));
//     })
//     console.log("------------------------------------------------------------------------");
//     console.log(`Buscar por "${termo}":`);
//     exibirReceitas(resultadoBusca)
// }

console.log("------------------------------------------------------------------------");
console.log("buscarReceita");
console.log("------------------------------------------------------------------------");


// const busca = listaDeReceitas[0].indexOf("preparo")
// console.log(busca);

function newFunction() {
    console.log(listaDeReceitas.titulo.indexOf('a') != -1);
}

newFunction()



// const buscarReceita = (termo) => {
//     const resultadoBusca = listaDeReceitas.filter((receita) => {
//         return (receita.titulo.indexOf(termo) != -1)

//     }) { `${exibirReceitas(resultadoBusca)}` }

//     console.log("------------------------------------------------------------------------");
// }


// buscarReceita("o")


console.log("------------------------------------------------------------------------");
console.log("Atualizar Receita");
console.log("------------------------------------------------------------------------");


const atualizarReceita = (id, prop, alteracao) => {
    const indice = listaDeReceitas.findIndex((receita) => receita.id === id);
    if (indice === -1) {
        return console.log(`Identificador ${id} não encontrado`);
    }
    const conteudoPropAntiga = listaDeReceitas[indice][prop]
    if (listaDeReceitas[indice][prop]) {
        listaDeReceitas[indice][prop] = alteracao;
        return console.log(
            `Receita ${listaDeReceitas[indice].titulo} alterada com sucesso!
            de:
            ${conteudoPropAntiga}
            para:
            ${alteracao}`);
    }
    return console.log(`A categoria "${prop}" não foi encontrada na receita de id "${id}"`);
};

atualizarReceita(1, "titulo", "Cachorro muito quente")

exibirReceitas(listaDeReceitas)

atualizarReceita(8, "titulo", "Cachorro muito quente")
atualizarReceita(5, "Título", "Bolinho de Fubá")
atualizarReceita(6, "preparo", "Bata tudo e leve ao forno e deixe por 40min.")