"use strict"
function Pessoa() {
  this.idade = 0

    setInterval(()=>{
        console.log(this.idade++)
    }, 1000);
}

const p1 = new Pessoa()