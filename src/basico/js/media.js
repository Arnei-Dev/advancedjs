import { calcularMedia } from "./media02.js";

export function aprovacao (notas){
    let media = calcularMedia(notas)
    let condicao = media >= 8 ? "aprovado" : "reprovado";
    return 'Média: ' + media + ' | Aluno: ' + condicao 
}