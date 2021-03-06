/*
    20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function sacarDinheiro(valorSaque){
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota1 = 0;
    let valorNota = calcularValorNota(valorSaque)
    while(valorSaque >= valorNota){
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                nota100++
                break;
            case 50:
                valorSaque -= 50
                nota50++
                break;
            case 10:
                valorSaque -= 10
                nota10++
                break;
            case 5:
                valorSaque -= 5
                nota5++
                break;
            case 1:
                nota1++
                valorSaque -= 1
                break;
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(nota100, nota50, nota10, nota5, nota1)
}

function calcularValorNota(valorSaque){
    if(valorSaque >= 100){
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(nota100, nota50, nota10, nota5, nota1) {
    let resultado = ''

    if (nota100 > 0) {
        resultado += `${nota100} nota(s) de R$ 100. `
    }

    if (nota50 > 0) {
        resultado += `${nota50} nota(s) de R$ 50. `
    }

    if (nota10 > 0) {
        resultado += `${nota10} nota(s) de R$ 10. `
    }

    if (nota5 > 0) {
        resultado += `${nota5} nota(s) de R$ 5. `
    }

    if (nota1 > 0) {
        resultado += `${nota1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));