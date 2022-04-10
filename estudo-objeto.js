const listaDeReceitas = [{
        id: 1,
        titulo: 'Cachorro Quente',
        dificuldade: 'Simples',
        ingredientes: ['1 pão de leite', '1 salsicha', '1 colher de batata palha'],
    },
    {
        id: 2,
        titulo: 'Ovo frito',
        dificuldade: 'Simples',
        ingredientes: ['1 ovo', '1 colher de azeite', 'Sal a gosto'],
    },
    {
        id: 3,
        titulo: 'Bolo de Fubá',
        dificuldade: 'Simples',
        ingredientes: ['3 ovo', '1 chícara de leite', '2 colheres de manteiga'],
    },
    {
        id: 6,
        titulo: 'Bolo de Fubá',
        dificuldade: 'Simples',
        ingredientes: ['3 ovo', '1 chícara de leite', '2 colheres de manteiga'],
    },
    {
        id: 8,
        titulo: 'Bolo de Fubá',
        dificuldade: 'Simples',
        ingredientes: ['3 ovo', '1 chícara de leite', '2 colheres de manteiga'],
    },
    {
        id: 10,
        titulo: 'Bolo de Fubá',
        dificuldade: 'Simples',
        ingredientes: ['3 ovo', '1 chícara de leite', '2 colheres de manteiga'],
    },
]


// Trazer o index do array buscando pelo atributo id do objeto
function pegaidListaReceita(id) {
    const indexReceita = listaDeReceitas.map(function(o) { return o.id; }).indexOf(id);
    console.log(indexReceita);
}

pegaidListaReceita(1)
console.log(indexReceita);



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
const index = peoples.map(function(o) { return o.attr1; }).indexOf("john");
console.log(index);