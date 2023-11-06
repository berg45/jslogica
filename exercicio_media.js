const prompt = require('prompt-sync')()

var n1, n2, n3, mediaExer, mediaAprov

var n1 = parseFloat(prompt('informe a nota1: '))
var n2 = parseFloat(prompt('informe a nota2: '))
var n3 = parseFloat(prompt('informe a nota3: '))
var mediaExer = parseFloat(prompt('informe a media de exercicio: '))
 
mediaAprov = (n1 + n2 * 2 + n3 * 3 + mediaExer) / 7

if(mediaAprov >= 9.0) {
   console.log(`Aluno com media de aproveitamento ${mediaAprov.toFixed(2)} tem o conceito "A"`)
}else if (mediaAprov >= 7.5 && mediaAprov < 9){ 
   console.log(`aluno com media de aproveitamento ${mediaAprov.toFixed(2)} tem o conceito "B"`)
}else if (mediaAprov >= 6.0 && mediaAprov < 7.5) {
   console.log(`Aluno com media de aproveitamento ${mediaAprov.toFixed(2)} tem conceito "C"`)
} else {
   console.log(`Aluno com media de aproveitamento ${mediaAprov.toFixed(2)} tem o conceito "D"`)
}




 