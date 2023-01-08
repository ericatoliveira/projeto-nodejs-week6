const notas = [9.5, 10, 6, 8, 10];

let i = 0;
let soma = 0;
let media;
let tam = notas.length;

do {
    soma = (soma + notas[i]);
    media = soma/tam;
    i = i + 1;
} while (i < tam)

console.log(media >7?`Média: ${media}. Aprovado`:`Média: ${media}. Reprovado`);

