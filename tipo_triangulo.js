const prompt = require('prompt-sync')()

var a, b, c 

a = parseInt(prompt('valor lado 1:'))
b = parseInt(prompt('valor lado 2:'))
c = parseInt(prompt('valor lado 3:'))

if (a !== 0 && b !== 0 && c !== 0){
    if (a !== b && a !== c && b !== c) {
        console.log('O triangulo é isoceles')
    } else if (a === b && c !== b && c !== a) {
        console.log('O triangulo é isoceles')
    } else if (a !== b && c === b && c !== a) {
        console.log('O triangulo é isoceles')
    }else if (a === c && a !== b && b !== c) {
        console.log('O triangulo é isoceles')
    }
    else {
    console.log('Os valores não formam um triangulo')
    }
} else {
    console.log('Os valores não formam um triagulo')
}