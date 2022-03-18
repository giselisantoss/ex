const input=require("readline-sync")

const numeros=[7, 26, 25, 4, 2, 1]

function imprimeMaiorEMenor(numeros) {

    let maior = 0
    let menor = 10

    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return `o maior nùmero é ${maior} e o menor número é ${menor}`
}

console.log(imprimeMaiorEMenor(numeros))