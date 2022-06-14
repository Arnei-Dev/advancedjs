import months from './months.js'

const filteredMonths = months.filter((months)=>{
    return months.days === 31
})
console.log(filteredMonths)

let toPrint = ''

filteredMonths.forEach(month => {
    toPrint += month.month + ', '
});

let monthColor = ''
filteredMonths.forEach(color => {
    monthColor += color.color + ', '
});

console.log(monthColor)

//Reduce - função com todos os items do array e devolve um valor único
let sumMonthDay = filteredMonths.reduce((sum, month)=>{
    return {days: sum.days + month.days}
})

//Map - Função que retorna valores por cada intem invocado de dentro do array, obs 'sem chamar objeto'
let dogs = [10, 15, 8, 7, 9]
let ageDogs = dogs.map((mult) =>{
    return mult * 2 
   // return mult.dog * 2 - Essa seria a chamada caso dog fosse importado de um export, obs 'nessa chamada não haveria a necessidade do let dogs = [10, 15, 8, 7, 9]' 
})

console.log(ageDogs)

//document.getElementById('main').innerHTML = toPrint
document.getElementById('months').innerHTML = toPrint + '<br> Somando os dias = '+ sumMonthDay.days + '<br> Cores dos meses - ' + monthColor