"use strict";
function limparInput() {
    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
    });
}
function contarVgsParametro(palavra) {
    const palavraInput = document.getElementById("palavraInput");
    const palavraUserInput = palavraInput.value;
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let caracteresEspeciais = [
        // Números
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        // Pontuação
        ".",
        ",",
        ";",
        ":",
        "?",
        "!",
        '"',
        "'",
        "-",
        "_",
        "+",
        "=",
        "*",
        "/",
        "\\",
        "|",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "(",
        ")",
        "[",
        "]",
        "{",
        "}",
        "<",
        ">",
        "`",
        "~",
        // Outros caracteres
        " ",
        "\t",
        "\n", // Espaço, tabulação e nova linha
    ];
    let quantidadeVgs = 0;
    for (let i = 0; i < palavraUserInput.length; i++) {
        const char = palavraUserInput[i];
        if (vogais.includes(char)) {
            quantidadeVgs++;
        }
        else if (caracteresEspeciais.includes(char)) {
            alert("ERRO: A palavra digitada não é válida! Por favor, tente novamente.");
            limparInput();
            return;
        }
    }
    if (palavraUserInput) {
        alert("A palavra " + palavraUserInput + " contém: " + quantidadeVgs + " vogais.");
        limparInput();
    }
    else {
        alert("ERRO: Nenhuma palavra foi digitada! Por favor, digite uma palavra!");
    }
}
let lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];
function getBioById(id) {
    const userIdInput = document.getElementById("userId");
    const userId = Number(userIdInput.value);
    const user = lista.find((user) => user.id === userId);
    if (user) {
        const userItem = document.getElementById(`user${user.id}`);
        if (userItem) {
            userItem.textContent = `ID: ${user.id}, Nome: ${user.name}, Bio: ${user.bio}`;
            alert("A bio do usuário com ID " + userId + " é: " + user.bio);
            limparInput();
        }
    }
    else {
        alert("ERRO: Nenhuma bio foi encontrada para o ID informado, ou nenhum ID foi informado.");
        limparInput();
    }
}
function getNameById(id) {
    const userIdInput = document.getElementById("userId");
    const userId = Number(userIdInput.value);
    const user = lista.find((user) => user.id === userId);
    if (user) {
        const userItem = document.getElementById(`user${user.id}`);
        if (userItem) {
            userItem.textContent = `ID: ${user.id}, Nome: ${user.name}, Bio: ${user.bio}`;
            alert("A bio do usuário com ID " + userId + " é: " + user.name);
            limparInput();
        }
    }
    else {
        alert("ERRO: Nenhum nome foi encontrado para o ID informado, ou nenhum ID foi informado.");
        limparInput();
    }
}
function deleteItemById(id) {
    const userIdInput = document.getElementById("userId");
    const userId = userIdInput.value;
    const userElement = document.getElementById(`user${userId}`);
    if (userElement) {
        userElement.remove();
        alert("Usuário com ID " + userId + " foi deletado.");
        limparInput();
    }
    else {
        alert("ERRO: Nenhum usuário encontrado com o ID informado, ou nenhum ID foi informado.");
        limparInput();
    }
}
function updateNameById(id) {
    const userIdInput = document.getElementById("userId");
    const userId = userIdInput.value;
    const userElement = document.getElementById(`user${userId}`);
    if (userElement) {
        alert("Usuário com ID " + userId + " foi atualizado.");
        userElement.textContent = `ID: ${userId}, Nome: Atualização do nome, Bio: Atualição da bio.`;
        limparInput();
    }
    else {
        alert("ERRO: Nenhum usuário encontrado com o ID informado, ou nenhum ID foi informado.");
        limparInput();
    }
}
//# sourceMappingURL=exercicio_nivelamento_3.js.map