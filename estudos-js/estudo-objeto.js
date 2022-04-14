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
]

function prorpiedadePorID(idReceita, propriedade) {
    // listaDeReceitas[id].(propriedade)
    const indexReceita = listaDeReceitas.map(function(o) { return o.id; }).indexOf(idReceita);
    console.log(idReceita, indexReceita, propriedade);
    console.log(typeof listaDeReceitas[indexReceita].titulo)
    console.log(typeof propriedade)
    console.log(listaDeReceitas[1].titulo)
    console.log(listaDeReceitas[1])
    console.log(listaDeReceitas[indexReceita])
    console.log(listaDeReceitas[indexReceita][propriedade])

}

prorpiedadePorID(102, "dificuldade")

// Utilizado para percorrer os registros de um array
listaDeReceitas.forEach((receita, index) => {
    console.log(`${index} - ${receita.titulo}`);
});









// const indexReceita = listaDeReceitas.map(function(o) { return o.titulo; }).indexOf("Ovo frito");
// console.log(indexReceita);

// const indexReceita = listaDeReceitas.map(function(o) { return o.id; }).indexOf(102);

// console.log(indexReceita)







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