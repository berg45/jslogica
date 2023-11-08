const prompt = require('prompt-sync')()

var nomeFunc, anoNascFunc, anoTrabFuunc, idadefunc, tempoServico

continuar = true

while (continuar) {
    nomeFunc = prompt('nome do funcionario: ')
    anoNascFunc = parseInt(prompt('Ano de nascimento: '))
    anoTrabFunc = parseInt(prompt('ano de admissão: '))

    idadefunc = 2023 - anoNascFunc
    tempoServico = 2023 - anoTrabFunc
   

 if (idadefunc >= 60 && tempoServico >= 25) {
    console.log(`Sr(a) ${nomeFunc} tem ${idadefunc} anos de idade e atua á
    ${tempoServico} anos de serviços - requer Aposentadoria`)
    
  } else if (idadefunc >= 65 ) {
    console.log(`Sr(a) ${nomeFunc} tem ${idadefunc} anos de idade e atua á
    ${tempoServico } anos de serviços - requer Aposentadoria`)

  } else if (tempoServico>= 30 ) {
    console.log(`Sr(a) ${nomeFunc} tem ${idadefunc} anos de idade e atua á
    ${tempoServico } anos de serviços - requer Aposentadoria`)

  } else {
    console.log(`Sr(a) ${nomeFunc} tem ${idadefunc} anos de idade e atua á
    ${tempoServico } anos de serviços -  Não requer Aposentadoria`) 
  } 
  opcao = prompt('deseja continuar ? S - Sim | N - Não ')
  if (opcao.toUpperCase() === 'N') {
    cntinuar = false
  }
}