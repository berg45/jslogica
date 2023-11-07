var lista = ['Pera', 'Uva', 'Jaca', 'Mamão', 'melancia', 'Abacaxi', 'Goiaba', 'Morango']

var cont = 0

while (cont < lista.length) {
    console.log(lista[cont])
    cont++
}

for (let cont = 0; cont < lista.length; cont++) {
console.log(`${cont + 1} - ${lista[cont]} `)
    
}