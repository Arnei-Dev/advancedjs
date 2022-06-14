
import feira from './index.js'

//Filtra especificações de comprada na feira
const compraDaSemana = feira.filter((x) => {
    return x.fruta
})

//Obtendo os valores quantitativos de frutas em array
let arrayQtdFrutas = ''
compraDaSemana.forEach((a) => {
    arrayQtdFrutas += a.qtdade + ' | '
})
console.log(arrayQtdFrutas)

//Map - multiplicando valores da qtd de frutas
let multQtdFrutas = compraDaSemana.map((mult) => {
    return mult.qtdade * 2
})

//Reduce - Soma total de frutas
const somaQtdFrutas = feira.reduce((previous, current) => {
    let allqtd = {qtdade: previous.qtdade + current.qtdade}
    return allqtd
})

let corFrutas = ''
compraDaSemana.forEach((color) => {
    return corFrutas += color.cor + ', '
})
console.log(corFrutas)



document.getElementById('feira').innerHTML = 
'Quantidade individual das frutas comprado na feira: '+ arrayQtdFrutas + 
'<br> Quantidade total de frutas: '+ somaQtdFrutas.qtdade +
'<br> Cor das frutas: '+ corFrutas +
'<br> Multiplicando qtd de frutas: '+ multQtdFrutas