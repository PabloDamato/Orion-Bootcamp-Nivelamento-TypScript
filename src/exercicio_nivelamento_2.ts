/**
 * @interface IPessoa
 * Representa uma pessoa com informações básicas.
 * id: Identificador único da pessoa.
 * name: Nome da pessoa.
 * bio: Breve biografia da pessoa.
 */
interface IPessoa {
  id: number;
  name: string;
  bio: string;
}

/**
 * Lista de pessoas com informações básicas.
 */
let lista: IPessoa[] = [
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

/**
 * Função que busca a biografia de uma pessoa por ID e a exibe no console.
 * @param id - O identificador da pessoa.
 * @param lista - A lista de pessoas para buscar a biografia.
 * @returns - Void - A função não retorna valor, apenas imprime no console a biografia.
 */
function getBioById(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const Id: IPessoa | undefined = lista.find((person) => person.id === id);
  if (Id) {
    console.log(`getBioById => ${Id.bio}`);
  } else {
    console.log(
      "getBioById => Nenhuma bio foi encontrada para o Id informado."
    );
  }
}

/**
 * Função funcional que busca a biografia de uma pessoa por ID e a exibe no console.
 * @param id - O identificador da pessoa.
 * @param lista - A lista de pessoas para buscar a biografia.
 * @returns - Void - A função não retorna valor, apenas imprime no console a biografia.
 */
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

/**
 * Função imperativa que busca a biografia de uma pessoa por ID e a exibe no console.
 * @param id - O identificador da pessoa.
 * @param lista - A lista de pessoas para buscar a biografia.
 * @returns - Void - A função não retorna valor, apenas imprime no console a biografia.
 */
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

/**
 * Função que busca o nome de uma pessoa por ID e o exibe no console.
 * @param id - O identificador da pessoa.
 * @param lista - A lista de pessoas para buscar o nome.
 * @returns - Void - A função não retorna valor, apenas imprime no console o nome da pessoa.
 */
function getNameById(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const index: IPessoa | undefined = lista.find((person) => person.id === id);
  if (index) {
    console.log(`getNameById => ${index.name}`);
  } else {
    console.log(
      "getNameById => Nenhum nome foi encontrado para o Id informado."
    );
  }
}

/**
 * Função funcional que busca o nome de uma pessoa por ID e o exibe no console.
 * @param id - O identificador da pessoa.
 * @param lista - A lista de pessoas para buscar o nome.
 * @returns - Void - A função não retorna valor, apenas imprime no console o nome da pessoa.
 */
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

/**
 * Função imperativa que busca o nome de uma pessoa por ID e o exibe no console.
 * @param id - O identificador da pessoa.
 * @param lista - A lista de pessoas para buscar o nome.
 * @returns - Void - A função não retorna valor, apenas imprime no console o nome da pessoa.
 */
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

/**
 * Função que deleta uma pessoa da lista por ID e exibe a lista atualizada.
 * @param id - O identificador da pessoa a ser deletada.
 * @param lista - A lista de pessoas para buscar o item a ser deletado.
 * @returns - Void - A função não retorna valor, apenas imprime no console qual item da lista foi deletado.
 */
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

/**
 * Função funcional que deleta uma pessoa da lista por ID e exibe a lista atualizada.
 * @param id - O identificador da pessoa a ser deletada.
 * @param lista - A lista de pessoas para buscar o item a ser deletado.
 * @returns - Void - A função não retorna valor, apenas imprime no console qual item da lista foi deletado.
 */
function deleteItemByIdFuncional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const listaOriginal: number = lista.length;
  const listaNova: IPessoa[] = lista.filter((item) => item.id !== id);

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

/**
 * Função imperativa que deleta uma pessoa da lista por ID e exibe a lista atualizada.
 * @param id - O identificador da pessoa a ser deletada.
 * @param lista - A lista de pessoas para buscar o item a ser deletado.
 * @returns - Void - A função não retorna valor, apenas imprime no console qual item da lista foi deletado.
 */
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

/**
 * Função que atualiza o nome de uma pessoa da lista por ID e exibe a lista atualizada.
 * @param id - O identificador da pessoa a ser atualizada.
 * @param lista - A lista de pessoas a ser atualizada.
 * @returns - Void - A função não retorna valor, apenas imprime no console qual nome da lista foi atualizado.
 */
function updateNameById(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const index: IPessoa | undefined = lista.find((person) => person.id === id);
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

/**
 * Função funcional que atualiza o nome de uma pessoa da lista por ID e exibe a lista atualizada.
 * @param id - O identificador da pessoa a ser atualizada.
 * @param lista - A lista de pessoas a ser atualizada.
 * @returns - Void - A função não retorna valor, apenas imprime no console qual nome da lista foi atualizado.
 */
function updateNameByIdFuncional(
  id: number,
  lista: { id: number; name: string; bio: string }[]
): void {
  const index: IPessoa | undefined = lista.find((person) => person.id === id);
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

/**
 * Função imperativa que atualiza o nome de uma pessoa da lista por ID e exibe a lista atualizada.
 * @param id - O identificador da pessoa a ser atualizada.
 * @param lista - A lista de pessoas a ser atualizada.
 * @returns - Void - A função não retorna valor, apenas imprime no console qual nome da lista foi atualizado.
 */
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

/**
 * @description Exibe a biografia da pessoa com o ID 0.
 * @example
 * getBioById(0, lista);
 */
getBioById(0, lista);
/**
 * @description Exibe a biografia da pessoa com o ID 0 usando a função no estilo funcional.
 * @example
 * getBioByIdFunctional(0, lista);
 */
getBioByIdFunctional(0, lista);
/**
 * @description Exibe a biografia da pessoa com o ID 0 usando a função no estilo imperativo.
 * @example
 * getBioByIdImperativo(0, lista);
 */
getBioByIdImperativo(0, lista);
/**
 * @description Exibe o nome da pessoa com o ID 0.
 * @example
 * getNameById(0, lista);
 */
getNameById(0, lista);
/**
 * @description Exibe o nome da pessoa com o ID 0 usando a função no estilo funcional.
 * @example
 * getNameByIdFuncional(0, lista);
 */
getNameByIdFuncional(0, lista);
/**
 * @description Exibe o nome da pessoa com o ID 0 usando a função no estilo imperativo.
 * @example
 * getNameByIdImperativo(0, lista);
 */
getNameByIdImperativo(0, lista);
/**
 * @description Deleta a pessoa com o ID 0 da lista.
 * @example
 * deleteItemById(0, lista);
 */
deleteItemById(0, lista);
/**
 * @description Deleta a pessoa com o ID 0 da lista usando a função no estilo funcional.
 * @example
 * deleteItemByIdFuncional(0, lista);
 */
deleteItemByIdFuncional(0, lista);
/**
 * @description Deleta a pessoa com o ID 0 da lista usando a função no estilo imperativo.
 * @example
 * deleteItemByIdImperativo(0, lista);
 */
deleteItemByIdImperativo(0, lista);
/**
 * @description Atualiza o nome da pessoa com o ID 0.
 * @example
 * updateNameById(0, lista);
 */
updateNameById(0, lista);
/**
 * @description Atualiza o nome da pessoa com o ID 0 usando a função no estilo funcional.
 * @example
 * updateNameByIdFuncional(0, lista);
 */
updateNameByIdFuncional(0, lista);
/**
 * @description Atualiza o nome da pessoa com o ID 0 usando a função no estilo imperativo.
 * @example
 * updateNameByIdImperativo(0, lista);
 */
updateNameByIdImperativo(0, lista);
