const prompt = require('prompt-sync')()

var nome, continuar, confirmarSaida
var nomeAluno = [] // Arrays

continuar = true

while (continuar) {
    nome = prompt('informe o nome do aluno: ')
    nomeAluno.push(nome) // inserir elementos no array

    confirmarSaida = prompt('Deseja continuar? S - Sim | N - Não ')
    if (confirmarSaida.toUpperCase() === 'N') {
        continuar = false
    }
}

for (let index = 0; index < nomeAluno.length; index++) {
    console.log(nomeAluno[index])
    
}