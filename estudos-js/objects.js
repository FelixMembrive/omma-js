const pessoas = [{
        _id: "6254a5266c92229bd97d0384",
        isActive: true,
        age: 31,
        name: "Katrina Dickson",
        gender: "female",
        email: "katrinadickson@orbean.com",
        phone: "+1 (859) 466-3606",
        address: "461 Harkness Avenue, Century, Arizona, 7101",
        tags: [
            "commodo",
            "officia",
            "excepteur",
            "incididunt",
            "ad",
            "minim",
            "proident",
        ],

        friends: [{
                id: 0,
                name: "Potts Jacobs",
            },
            {
                id: 1,
                name: "Terrell Lawrence",
            },
            {
                id: 2,
                name: "Sawyer Cross",
            },
        ],
        favoriteFruit: "strawberry",
    },
    {
        _id: "6254a526a0a33b6b7954879c",
        isActive: false,
        age: 34,
        name: "Marlene Ochoa",
        gender: "female",
        email: "marleneochoa@orbean.com",
        phone: "+1 (977) 592-2168",
        address: "529 Lee Avenue, Yonah, West Virginia, 9545",
        tags: [
            "reprehenderit",
            "deserunt",
            "ut",
            "ex",
            "enim",
            "laboris",
            "nostrud",
        ],
        friends: [{
                id: 0,
                name: "Violet Murray",
            },
            {
                id: 1,
                name: "Brady Banks",
            },
            {
                id: 2,
                name: "Johnson Dawson",
            },
        ],
        favoriteFruit: "strawberry",
    },
    {
        _id: "6254a5267c0759888c9556d3",
        isActive: false,
        age: 25,
        name: "Ramos Graham",
        gender: "male",
        email: "ramosgraham@orbean.com",
        phone: "+1 (817) 577-2821",
        address: "700 Willoughby Avenue, Beason, Connecticut, 3216",
        tags: ["irure", "ad", "mollit", "incididunt", "dolor", "consequat", "duis"],
        friends: [{
                id: 0,
                name: "Pamela Good",
            },
            {
                id: 1,
                name: "Hillary Zamora",
            },
            {
                id: 2,
                name: "Lindsay Walters",
            },
        ],
        favoriteFruit: "apple",
    },
    {
        _id: "6254a526ce8ef46bc436682d",
        isActive: true,
        age: 36,
        name: "Eva Pacheco",
        gender: "female",
        email: "evapacheco@orbean.com",
        phone: "+1 (975) 453-2678",
        address: "441 Lake Avenue, Levant, Michigan, 3659",
        tags: ["do", "amet", "nostrud", "cupidatat", "do", "velit", "duis"],
        friends: [{
                id: 0,
                name: "Cruz Levy",
            },
            {
                id: 1,
                name: "Jordan Suarez",
            },
            {
                id: 2,
                name: "Mays Martinez",
            },
        ],
        favoriteFruit: "apple",
    },
    {
        _id: "6254a526ddf52be3e4aa15ab",
        isActive: false,
        age: 34,
        name: "Gill Castillo",
        gender: "male",
        email: "gillcastillo@orbean.com",
        phone: "+1 (847) 589-3592",
        address: "948 Lamont Court, Ernstville, Washington, 1245",
        tags: ["fugiat", "quis", "est", "est", "esse", "proident", "occaecat"],
        friends: [{
                id: 0,
                name: "Christian Guy",
            },
            {
                id: 1,
                name: "Karina Page",
            },
            {
                id: 2,
                name: "Karen Stevens",
            },
        ],
        favoriteFruit: "strawberry",
    },
    {
        _id: "6254a52685d3f9224aaaa554",
        isActive: true,
        age: 34,
        name: "Sarah Hinton",
        gender: "female",
        email: "sarahhinton@orbean.com",
        phone: "+1 (857) 524-3053",
        address: "822 Greenpoint Avenue, Harrison, Maine, 819",
        tags: [
            "amet",
            "reprehenderit",
            "consequat",
            "exercitation",
            "laboris",
            "proident",
            "exercitation",
        ],
        friends: [{
                id: 0,
                name: "Nancy Meadows",
            },
            {
                id: 1,
                name: "Karyn Burnett",
            },
            {
                id: 2,
                name: "Robbins Woods",
            },
        ],
        favoriteFruit: "apple",
    },
    {
        _id: "6254a52665680840299afb4d",
        isActive: true,
        age: 34,
        name: "Melissa Bradley",
        gender: "female",
        email: "melissabradley@orbean.com",
        phone: "+1 (801) 482-2853",
        address: "764 Brown Street, Wilmington, Oregon, 8068",
        tags: [
            "officia",
            "eu",
            "consectetur",
            "mollit",
            "cillum",
            "voluptate",
            "consequat",
        ],
        friends: [{
                id: 0,
                name: "Lucille Morgan",
            },
            {
                id: 1,
                name: "Medina Padilla",
            },
            {
                id: 2,
                name: "Day Young",
            },
        ],
        favoriteFruit: "apple",
    },
];



// Retornar uma propriedade procurando pelo ID
pessoas.forEach((value, index, array) => {
    console.log(` ${value.name}`);
});


//Cria uma nova Lista (map serve para criar uma nova Array e manter a Array original)
const novaPessoas = pessoas.map((pessoa) => {
    return {
        nome: pessoa.name,
        idade: pessoa.age,
        opcao: pessoa.gender,
    };
})
console.log(novaPessoas);



//Retornar o objeto por uma condi????o
const pessoasAtivas = pessoas.filter((pessoa) => {
        return pessoa.isActive
    })
    //Retornar o objeto por uma condi????o de nega????o
const pessoasNaoAtivas = pessoas.filter((pessoa) => {
        return !pessoa.isActive
    })
    //total do retorno acima
console.log(pessoasAtivas.length)
console.log(pessoasNaoAtivas.length)



//Procurando por um texto espec??fico e retornando o indice do Array que o cont??m
const pessoasQueMoramNoArizona = pessoas.filter((pessoa) => {

    return newFunction()

    function newFunction() {
        return pessoa.address.indexOf('Arizon') != -1;
    }
})

console.log("aqui");
console.log(pessoasQueMoramNoArizona);







// Excluindo um objeto do Array
console.log(pessoas.length);
const indice = pessoas.findIndex((pessoa) => {
    return pessoa._id === "6254a52665680840299afb4d"
})
pessoas.splice(indice, 1)
console.log(pessoas.length);