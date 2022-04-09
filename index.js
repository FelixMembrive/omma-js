const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

const listaDeReceitas = [{
    id: 1,
    titulo: "Cachorro Quente",
    dificuldade: "Simples",
    ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"],
    preparo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati rem officia atque, officiis odio.",
    link: "http://youtube.com",
    vegano: false,
}]

const cadastrarReceita = (id, titulo, dificuldade, ingredientes, preparo, link, vegano) => {
    listaDeReceitas.id = id,
        listaDeReceitas.titulo = titulo,
        listaDeReceitas.dificuldade = dificuldade,
        listaDeReceitas.ingredientes = ingredientes,
        listaDeReceitas.preparo = preparo,
        listaDeReceitas.link = link,
        listaDeReceitas.vegano = vegano,

}

console.log(listaDeReceitas)

cadastrarReceita(
    2,
    "Ovo frito",
    "Simples", ["1 Ovo", "1 colher de azeite", "Sal a gosto"],
    "quebre o ovo em um copo americano, jogue o sal, e leve à frigideira",
    "http://youtube.com",
    false
)

console.log(listaDeReceitas)

// const exibirReceitas() => {
//     console.log(id, titulo);
// }

// const exibirReceitas = () => {
//     console.log(id, titulo)
// }

// exibirReceitas()