    
    let media;
    export const calcularMedia = (notas) => {

    let soma = 0;
    for(let c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}