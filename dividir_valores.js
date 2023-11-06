const prompt = require('prompt-sync')()

var n1, n2, resultado, continua, opcao

continua = true

while (continua) {
   var n1 = parseFloat(prompt('digite o primeiro valor: '))
   var n2 = parseFloat(prompt('digite o segundo valor: '))

   if (n 2 === 0) {
       console.log('número invalido')
       var n2 = parseFloat(prompt('digite o segundo valor'))
   }

   resultado = n1 / n2
   console.log(`O resultado é ${resultado}`)
   opcao = prompt('Deseja continuar com a operação? S - Sim | N - Não')
   if (opcao.toUpperCase() === 'N') {
       continua = false
   } 
}