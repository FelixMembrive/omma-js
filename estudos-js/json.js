const fs = require("fs");


// Ler o artquivo JSON e trazer em formato binário
const rawData = fs.readFileSync("exemplo.json");

// Transforma o código binário em JavaScript
const pessoas = JSON.parse(rawData);

log

const novaPessoa = {
    ...pessoas[0],
    nome: "Francisco",
    email: "email@qualquer.com",
};

pessoas.push(novaPessoa);

// Lê o arquivo passado no primeiro argumento, e então o segundo argumento é inserido no arquivo
fs.writeFileSync("exemplo.json", JSON.stringify(pessoas));