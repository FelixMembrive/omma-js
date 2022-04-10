const listaDeReceitas = [{
        id: 101,
        titulo: 'Cachorro Quente',
        dificuldade: 'Simples',
        ingredientes: ['1 pão de leite', '1 salsicha', '1 colher de batata palha'],
    },
    {
        id: 102,
        titulo: 'Ovo frito',
        dificuldade: 'Simples',
        ingredientes: ['1 ovo', '1 colher de azeite', 'Sal a gosto'],
    },
    {
        id: 103,
        titulo: 'Bolo de Fubá',
        dificuldade: 'Simples',
        ingredientes: ['3 ovo', '1 chícara de leite', '2 colheres de manteiga'],
    },
    {
        id: 106,
        titulo: 'Bolo de Fubá',
        dificuldade: 'Simples',
        ingredientes: ['3 ovo', '1 chícara de leite', '2 colheres de manteiga'],
    },
    {
        id: 108,
        titulo: 'Bolo de Fubá',
        dificuldade: 'Simples',
        ingredientes: ['3 ovo', '1 chícara de leite', '2 colheres de manteiga'],
    },
    {
        id: 110,
        titulo: 'Bolo de Fubá',
        dificuldade: 'Simples',
        ingredientes: ['3 ovo', '1 chícara de leite', '2 colheres de manteiga'],
    },
]

console.log(
    listaDeReceitas[2].titulo
);

function prorpiedadePorID(id, propriedade) {
    listaDeReceitas[id].(propriedade)
    const indexReceita = listaDeReceitas.map(function(o) { return o.id; }).indexOf(id);
    console.log(id, indexReceita);
}

prorpiedadePorID(102, titulo)



// console.log(
//     for
//     listaDeReceitas[0].id
// )

// for (let index = 0; index < listaDeReceitas.length; index++) {
//     const element = (listaDeReceitas[index].id);
//     console.log(element);
// }

// console.log(
//     index(listaDeReceitas)
// );


// // Trazer o index do array buscando pelo atributo id do objeto
// function pegaidListaReceita(id) {
//     const indexReceita = listaDeReceitas.map(function(o) { return o.id; }).indexOf(id);
//     console.log(indexReceita);
// }

// pegaidListaReceita(1)
// console.log(indexReceita);

// console.log(
// indexOf(listaDeReceitas[id])
// listaDeReceitas[1].ingredientes.indexOf("Sal a gosto")
// )
// log(
//     function(o) { return o.id; }
// )


var peoples = [{
        attr1: "bob",
        attr2: "pizza"
    },
    {
        attr1: "john",
        attr2: "sushi"
    },
    {
        attr1: "larry",
        attr2: "hummus"
    }
];
// Trazer o index do array buscando pelo atributo id do objeto
// const index = peoples.map(function(o) { return o.attr1; }).indexOf("john");
// console.log(index);