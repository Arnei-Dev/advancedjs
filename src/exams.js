import months from './months.js'

const filteredMonths = months.filter((months)=>{
    return months.days === 31
})
console.log(filteredMonths)

let toPrint = ''

filteredMonths.forEach(month => {
    toPrint += month.month + ', '
});

//Reduce - função com todos os items do array e devolve um valor único
let sumMonthDay = filteredMonths.reduce((sum, month)=>{
    return {days: sum.days + month.days}
})

//document.getElementById('main').innerHTML = toPrint
document.getElementById('main2').innerHTML = toPrint + '<br> Somando os dias = '+ sumMonthDay.days