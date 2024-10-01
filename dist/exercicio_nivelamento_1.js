"use strict";
// Devido a necessidade de criar uma página web e exibir o resultado das funções/métodos presentes neste documento, decidi reescreve-los e move-los para o arquivo exercicio-nivelamento-3.ts. Assim o código ficou mais otimizado e estruturado. Deixarei o código comentado.
// function contarVgsParametro(palavra: string) {
//   let vogais: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let quantidadeVgs = 0;
//   for (let i = 0; i < palavra.length; i++) {
//     const char = palavra[i];
//     if (vogais.includes(char)) {
//       quantidadeVgs++;
//     }
//   }
//   return console.log(
//     "A palavra " +
//       palavra +
//       " passada via parâmetro para a função contarVgsParametro contêm: " +
//       quantidadeVgs +
//       " vogais."
//   );
// }
// function contarVgsPrompt() {
//   let vogais: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let quantidadeVgs = 0;
//   const palavraDigitada: string | null = prompt("Digite a palavra: ");
//   if (palavraDigitada !== null) {
//     for (let i = 0; i < palavraDigitada.length; i++) {
//       const char = palavraDigitada[i];
//       if (vogais.includes(char)) {
//         quantidadeVgs++;
//       }
//     }
//     return console.log(
//       "A palavra digitada: " +
//         palavraDigitada +
//         " contêm: " +
//         quantidadeVgs +
//         " vogais"
//     );
//   }
//   return quantidadeVgs;
// }
// contarVgsParametro("aeiouAEIOU");
// contarVgsPrompt();
//# sourceMappingURL=exercicio_nivelamento_1.js.map