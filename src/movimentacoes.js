class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco =  banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = ''
        this.movimentacoes.forEach(lancamento => {
            if(lancamento.banco.match(/y/i)){
           // if(!lancamento.nome.match(/imposto/)){ //sem impostos
           // if(lancamento.nome.match(/imposto/)){  // só impostos
                valorAtualizado += lancamento.saldo
                tipo  += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Banco A', 'salario', 20000)
const m02 = new Movimentacao('Banco Y', 'comissao', 2000)
const m03 = new Movimentacao('Banco A', 'imposto', -5000)
const m04 = new Movimentacao('Banco Y', 'outros gastos', -1000)
const m05 = new Movimentacao('Banco A', 'outros impostos', -1000)

const registro01 = new Registro(22,05,2022)
registro01.novaMovimentacao(m01, m02, m03, m04, m05)
console.log('O saldo da operação foi: ' + registro01.resumo())