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

function getBioById(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const index:
    | {
        id: number;
        name: string;
        bio: string;
      }
    | undefined = lista.find((person) => person.id === id);
  if (index) {
    console.log(`getBioById => ${index.bio}`);
  } else {
    console.log(
      "getBioById => Nenhuma bio foi encontrada para o Id informado."
    );
  }
}

function getBioByIdFunctional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const bio: string | undefined = lista.find((person) => person.id === id)?.bio;
  if (bio) {
    return console.log(`getBioByIdFunctional => ${bio}`);
  }
  return console.log(
    "getBioByIdFunctional => Nenhuma bio foi encontrada para o Id informado."
  );
}

function getBioByIdImperativo(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  for (const person of lista) {
    if (person.id === id) {
      return console.log(`getBioByIdImperativo => ${person.bio}`);
    }
  }
  return console.log(
    "getBioByIdImperativo => Nenhuma bio foi encontrada para o Id informado."
  );
}

function getNameById(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const index:
    | {
        id: number;
        name: string;
        bio: string;
      }
    | undefined = lista.find((person) => person.id === id);
  if (index) {
    console.log(`getNameById => ${index.name}`);
  } else {
    console.log(
      "getNameById => Nenhum nome foi encontrado para o Id informado."
    );
  }
}

function getNameByIdFuncional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const bio: string | undefined = lista.find(
    (person) => person.id === id
  )?.name;
  if (bio) {
    return console.log(`getNameByIdFunctional => ${bio}`);
  } else {
    return console.log(
      "getNameByIdFunctional => Nenhum nome foi encontrado para o Id informado."
    );
  }
}

function getNameByIdImperativo(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  for (const person of lista) {
    if (person.id === id) {
      return console.log(`getNameByIdImperativo =>  ${person.name}`);
    }
  }
  return console.log(
    "getNameByIdImperativo => Nenhum nome foi encontrada para o Id informado."
  );
}

function deleteItemById(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const index: number = lista.findIndex((person) => person.id === id);
  if (index !== -1) {
    console.log(
      `deleteItemById => O item correspondente ao Id: ${
        index + 1
      } foi deletado com sucesso!`
    );
    lista.splice(index, 1);
    console.log(lista);
  } else {
    console.log(
      "deleteItemById => Nenhum item foi encontrado para o Id informado."
    );
  }
}

function deleteItemByIdFuncional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const listaOriginal: number = lista.length;
  const listaNova: lista[] = lista.filter((item) => item.id !== id);

  if (listaNova.length !== listaOriginal) {
    console.log(
      `deleteItemByIdFuncional => O item correspondente ao Id: ${id} foi deletado com sucesso!`
    );
    return console.log(listaNova);
  } else {
    console.log(
      "deleteItemByIdFuncional => Nenhum item foi encontrado para o Id informado."
    );
  }
}

function deleteItemByIdImperativo(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  for (let index: number = 0; index < lista.length; index++) {
    if (lista[index].id === id) {
      console.log(
        `deleteItemByIdImperativo => O item correspondente ao Id: ${lista[index].id} foi deletado com sucesso!`
      );
      lista.splice(index, 1);
      return console.log(lista);
    }
  }
  console.log(
    "deleteItemByIdImperativo => Nenhum item foi encontrado para o Id informado."
  );
}

function updateNameById(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const index:
    | {
        id: number;
        name: string;
        bio: string;
      }
    | undefined = lista.find((person) => person.id === id);
  if (index) {
    console.log(
      `updateNameById => O nome: ${
        index.name
      } será alterado para: ${(index.name =
        "Novo Nome via função updateNameById")}`
    );
    console.log(lista);
  } else {
    console.log(
      "updateNameById => Nenhum nome foi encontrado para o Id informado."
    );
  }
}

function updateNameByIdFuncional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const index:
    | {
        id: number;
        name: string;
        bio: string;
      }
    | undefined = lista.find((person) => person.id === id);
  if (index) {
    console.log(
      `updateNameByIdFuncional => O nome: ${
        index.name
      } será alterado para: ${(index.name =
        "Novo nome via função updateNameByIdFuncional")}`
    );
    return console.log(lista);
  }
  return console.log(
    "updateNameByIdFuncional => Nenhuma bio foi encontrada para o Id informado."
  );
}

function updateNameByIdImperativo(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  for (let index: number = 0; index < lista.length; index++) {
    if (lista[index].id === id) {
      console.log(
        `updateNameByIdImperativo => O nome: ${
          lista[index].name
        } será alterado para: ${(lista[index].name =
          "Novo Nome via função updateNameByIdImperativo")}`
      );
      console.log(lista);
      return;
    }
  }
  console.log(
    "updateNameByIdImperativo => Nenhum item foi encontrado para o Id informado."
  );
}

getBioById(0, lista);
getBioByIdFunctional(0, lista);
getBioByIdImperativo(0, lista);
getNameById(0, lista);
getNameByIdFuncional(0, lista);
getNameByIdImperativo(0, lista);
deleteItemById(0, lista);
deleteItemByIdFuncional(0, lista);
deleteItemByIdImperativo(0, lista);
updateNameById(0, lista);
updateNameByIdFuncional(0, lista);
updateNameByIdImperativo(0, lista);
