class Animal {

    constructor(especie) {
        this.especie = especie
    }

    falar(){
        console.log(this.especie + ' au au au')
    }

    comer(){
        console.log(this.especie + ' come ração')
    }

    dormir(){
        console.log(this.especie + ' dormi o dia todo')
    }
}

export class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' fala Au au au')
    }

    comer(){
        console.log(this.especie + ' come ração ')
    }
}