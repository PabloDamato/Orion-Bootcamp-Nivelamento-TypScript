"use strict";
function contarVgsParametro(palavra) {
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let quantidadeVgs = 0;
    for (let i = 0; i < palavra.length; i++) {
        const char = palavra[i];
        if (vogais.includes(char)) {
            quantidadeVgs++;
        }
    }
    return console.log("A palavra " +
        palavra +
        " passada via parâmetro para a função contarVgsParametro contêm: " +
        quantidadeVgs +
        " vogais.");
}
function contarVgsPrompt() {
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let quantidadeVgs = 0;
    const palavraDigitada = prompt("Digite a palavra: ");
    if (palavraDigitada !== null) {
        for (let i = 0; i < palavraDigitada.length; i++) {
            const char = palavraDigitada[i];
            if (vogais.includes(char)) {
                quantidadeVgs++;
            }
        }
        return console.log("A palavra digitada: " +
            palavraDigitada +
            " contêm: " +
            quantidadeVgs +
            " vogais");
    }
    return quantidadeVgs;
}
contarVgsParametro("aeiouAEIOU");
contarVgsPrompt();
//# sourceMappingURL=exercicio_nivelamento_1.js.map