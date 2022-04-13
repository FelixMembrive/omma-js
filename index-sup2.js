function exibirReceitas(listaAlvo = listaDeReceitas) {
    console.log("------------------------------------------------------------------------");
    console.log("Receitas Cadastradas:");
    console.log("------------------------------------------------------------------------");
    listaAlvo.forEach((receita) => {
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
    const indexReceita = listaDeReceitas.map((receita) => { return receita.id; }).indexOf(idDeletar);

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



const buscarReceita = (termo) => {
    const resultadoBusca = listaDeReceitas.filter((receita) => {
        return (receita.titulo.indexOf(termo) != -1);
    })
<<<<<<< HEAD:index-sup2.js
    console.log(resultadoBusca.receita);
}

buscarReceita("Quente")

console.log(listaDeReceitas[1]);
=======
    console.log("------------------------------------------------------------------------");
    console.log(`Buscar por "${termo}":`);
    exibirReceitas(resultadoBusca)
}

buscarReceita("o")

const atualizarReceita = (id, prop, alteracao) => {
    const indice = listaDeReceitas.findIndex((receita) => receita.id === id);
    if (indice === -1) {
        return console.log(`Identificador ${id} não encontrado`);
    } else if (listaDeReceitas[indice][prop]) {
        listaDeReceitas[indice][prop] = alteracao;
        return console.log("Receita alterada com sucesso!");
    }
    return console.log(`categoria ${prop} não encontrada na receita de id ${id}`);
};

atualizarReceita(1, "titulo", "Cachorro muito quente")

exibirReceitas(listaDeReceitas)

listaDeReceitas[0].titulo = "renomeado"

console.log(listaDeReceitas[0]);
>>>>>>> 6ade8a72de2ec4712f8bcb29600fe17908ca0d9d:index.js
