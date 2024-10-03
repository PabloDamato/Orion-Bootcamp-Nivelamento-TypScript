//corrigido, implementado a interface
interface lista {
  id: number;
  name: string;
  bio: string;
}

let lista: lista[] = [
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

// a)Crie uma função que retorne a bio do id passado, versões normal, funcional e imperativo

//corrigido atribuido o tipo de retorno da função
//Samuel, segundo a minha pesquisa, na documentação diz que o método find() retorna undefined caso o valor informado não satisfaça a condição, que, nesse caso seria lista.id igual ao id passado via parâmetro da função. Caso eu estiver errado por favor me corrija. Segue o link que usei como referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find Eu testei inserindo o valor -1 e ele cai no else exibindo o console.log("getBioById => Nenhuma bio foi encontrada para o Id informado.");
function getBioById(id: number): void {
  const index = lista.find((lista) => lista.id === id);
  if (index) {
    console.log("getBioById => " + index.bio);
  } else {
    console.log(
      "getBioById => Nenhuma bio foi encontrada para o Id informado."
    );
  }
}

//corrigido retirado o else desnecessário e atribuido e tipo de retorno da função
function getBioByIdFunctional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const bio = lista.find((person) => person.id === id)?.bio;
  if (bio) {
    return console.log("getBioByIdFunctional => " + bio);
  }
  return console.log(
    "getBioByIdFunctional => Nenhuma bio foi encontrada para o Id informado."
  );
}

//corrigido atribuido o tipo de retorno da função
function getBioByIdImperativo(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  for (const person of lista) {
    if (person.id === id) {
      return console.log("getBioByIdImperativo => " + person.bio);
    }
  }
  return console.log(
    "getBioByIdImperativo => Nenhuma bio foi encontrada para o Id informado."
  );
}

// b)Crie uma função que retorne o name do id passado

//corrigido atribuido o tipo de retorno da função
function getNameById(id: number): void {
  const index = lista.find((lista) => lista.id === id);
  if (index) {
    console.log("getNameById => " + index.name);
  } else {
    console.log(
      "getNameById => Nenhum nome foi encontrado para o Id informado."
    );
  }
}

//corrigido atribuido o tipo de retorno da função
function getNameByIdFuncional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const bio = lista.find((person) => person.id === id)?.name;
  if (bio) {
    return console.log("getNameByIdFunctional => " + bio);
  } else {
    return console.log(
      "getNameByIdFunctional => Nenhum nome foi encontrado para o Id informado."
    );
  }
}

//corrigido atribuido o tipo de retorno da função
function getNameByIdImperativo(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  for (const person of lista) {
    if (person.id === id) {
      return console.log("getNameByIdImperativo => " + person.name);
    }
  }
  return console.log(
    "getNameByIdImperativo => Nenhum nome foi encontrada para o Id informado."
  );
}

// c) Crie uma função que apague um item da lista a partir de um id passado

//corrigido atribuido o tipo de retorno da função
function deleteItemById(id: number): void {
  const index = lista.findIndex((lista) => lista.id === id);
  if (index !== -1) {
    console.log(
      "deleteItemById => O item correspondente ao Id: " +
        (index + 1) +
        " foi deletado com sucesso!"
    );
    lista.splice(index, 1);
    console.log(lista);
  } else {
    console.log(
      "deleteItemById => Nenhum item foi encontrado para o Id informado."
    );
  }
}

//corrigido atribuido o tipo de retorno da função
function deleteItemByIdFuncional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const listaOriginal = lista.length;
  const listaNova = lista.filter((item) => item.id !== id);

  if (listaNova.length !== listaOriginal) {
    console.log(
      "deleteItemByIdFuncional => O item correspondente ao Id: " +
        id +
        " foi deletado com sucesso!"
    );
    return console.log(listaNova);
  } else {
    console.log(
      "deleteItemByIdFuncional => Nenhum item foi encontrado para o Id informado."
    );
  }
}

//corrigido atribuido o tipo de retorno da função e alterado o nome da variavel controladora do for de i para index.
function deleteItemByIdImperativo(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  for (let index = 0; index < lista.length; index++) {
    if (lista[index].id === id) {
      console.log(
        "deleteItemByIdImperativo => O item correspondente ao Id: " +
          lista[index].id +
          " foi deletado com sucesso!"
      );
      lista.splice(index, 1);
      console.log(lista);
      return;
    }
  }
  console.log(
    "deleteItemByIdImperativo => Nenhum item foi encontrado para o Id informado."
  );
}

// d)Crie uma função que altere a bio ou o name a partir de um id passado

//corrigido atribuido o tipo de retorno da função
function updateNameById(id: number): void {
  const index = lista.find((lista) => lista.id === id);
  if (index) {
    console.log(
      "updateNameById => O nome: " +
        index.name +
        " será alterado para: " +
        (index.name = "Novo Nome via função updateNameById")
    );
    console.log(lista);
  } else {
    console.log(
      "updateNameById => Nenhum nome foi encontrado para o Id informado."
    );
  }
}

//corrigido atribuido o tipo de retorno da função
function updateNameByIdFuncional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  let person = lista.find((person) => person.id === id);
  if (person) {
    console.log(
      "updateNameByIdFuncional => O nome: " +
        person.name +
        " será alterado para: " +
        (person.name = "Novo nome via função updateNameByIdFuncional")
    );
    console.log(lista);
    return;
  } else {
    return console.log(
      "updateNameByIdFuncional => Nenhuma bio foi encontrada para o Id informado."
    );
  }
}

//corrigido atribuido o tipo de retorno da função
function updateNameByIdImperativo(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  for (let index = 0; index < lista.length; index++) {
    if (lista[index].id === id) {
      console.log(
        "updateNameByIdImperativo => O nome: " +
          lista[index].name +
          " será alterado para: " +
          (lista[index].name = "Novo Nome via função updateNameByIdImperativo")
      );
      console.log(lista);
      return;
    }
  }
  console.log(
    "updateNameByIdImperativo => Nenhum item foi encontrado para o Id informado."
  );
}

getBioById(0);
getBioByIdFunctional(0, lista);
getBioByIdImperativo(0, lista);
getNameById(0);
getNameByIdFuncional(0, lista);
getNameByIdImperativo(0, lista);
deleteItemById(0);
deleteItemByIdFuncional(0, lista);
deleteItemByIdImperativo(0, lista);
updateNameById(0);
updateNameByIdFuncional(0, lista);
updateNameByIdImperativo(0, lista);
