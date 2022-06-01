
const user01 = new Object()
      user01.id = 1
      user01.nome = 'Arney'
      user01.idade = 34

const user02 = new Object()
      user02.id = 2
      user02.nome = 'Mario'
      user02.idade = 35
      
console.log(Object.keys(user01))   
console.log(Object.keys(user02))

console.log(Object.values(user01))
console.log(Object.values(user02))

console.log(Object.entries(user01))
console.log(Object.entries(user02))

Object.defineProperty(user01, 'cpf', {
    enumerable: true,
    whitable: false,
    value: '000.000.000.00'
})
console.log(Object.entries(user01))