const prompt = require('prompt-sync')()

var salario, tempoTrabalho, resultado

var salario = parseFloat(prompt('informe o salario: '))
var tempoTrabalho = parseFloat(prompt('informr o tempo de trabalho em anos:'))

if (tempoTrabalho >= 5) {
    resultado = (salario * 0.2) + salario
} else {
    resultado = (salario * 0.1) + salario
} 

console.log(`Em ${tempoTrabalho} anos de trabalho será de ${resultado}: `)                                          