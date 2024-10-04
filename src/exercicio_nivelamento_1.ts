/**
 * Conta a quantidade de vogais que contêm a palavra passada via parâmetro da função.
 * A função considera vogais normais e acentuadas, e realiza a contagem ignorando a
 * diferença entre maiúsculas e minúsculas.
 * @param palavra - A palavra a ser verificada.
 * @returns Void - A função não retorna valor, apenas imprime no console o nome da palavra passada e a sua quantidade de vogais.
 */
function contarVogaisParametro(palavra: string): void {
  /**
   * Lista de vogais, incluindo versões acentuadas.
   * Usada para verificar se cada caractere digitado é uma vogal.
   */
  const vogais: string[] = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "á",
    "é",
    "í",
    "ó",
    "ú",
    "à",
    "è",
    "ì",
    "ò",
    "ù",
    "ã",
    "õ",
    "â",
    "ê",
    "î",
    "ô",
    "û",
  ];
  /**
   * Inicializa a variável quantidadeVogais com 0, a mesma é incrementada durante o loop de verificação.
   */
  let quantidadeVogais: number = 0;
  /**
   * Converte a palavra digitada para minúsculas, para garantir que a comparação seja case-insensitive.
   */
  palavra = palavra.toLowerCase();
  /**
   * Itera sobre cada caractere da palavra
   * Verifica se o caractere é uma vogal (com ou sem acento)
   * se o caracter for uma vogal incrementa o contador de vogais
   */
  for (let index: number = 0; index < palavra.length; index++) {
    const char: string = palavra[index];
    if (vogais.includes(char)) {
      quantidadeVogais++;
    }
  }
  /**
   * Imprime o número de vogais da palavra no console
   */
  return console.log(
    `A palavra ${palavra} passada via parâmetro para a função contarVogaisParametro contêm: ${quantidadeVogais}`
  );
}

/**
 * Solicita que o uspuario digite uma palavra através de um prompt e conta o número de vogais.
 * A função considera vogais normais e acentuadas, e realiza a contagem ignorando a
 * diferença entre maiúsculas e minúsculas.
 * @returns void - A função não retorna valor, apenas imprime no console o nome da palavra passada e a sua quantidade de vogais.
 */
function contarVogaisPrompt(): void {
  /**
   * Lista de vogais, incluindo versões acentuadas.
   * Usada para verificar se cada caractere digitado é uma vogal.
   */
  const vogais: string[] = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "á",
    "é",
    "í",
    "ó",
    "ú",
    "à",
    "è",
    "ì",
    "ò",
    "ù",
    "ã",
    "õ",
    "â",
    "ê",
    "î",
    "ô",
    "û",
  ];
  /**
   * Armazena a quantidade de vogais encontradas na palavra digitada pelo usuário.
   * Inicializa a variável quantidadeVogais com 0, a mesma é incrementada durante o loop de verificação.
   */
  let quantidadeVogais: number = 0;
  /**
   * Solicita que o usuário digite uma palavra. O valor retornado pode ser uma string ou `null`
   * (se o usuário cancelar o prompt).
   */
  const palavraDigitada: string | null = prompt("Digite a palavra: ");
  /**
   * Verifica se o usuário realmente digitou algo (ou seja, se o valor não é `null`)
   */
  if (palavraDigitada !== null) {
    /**
     * Converte a palavra digitada para minúsculas, para garantir que a comparação seja case-insensitive.
     */
    const palavra: string = palavraDigitada.toLowerCase();
    /**
     * Itera sobre cada caractere da palavra
     * Verifica se o caractere é uma vogal (com ou sem acento)
     * se o caracter for uma vogal incrementa o contador de vogais
     */
    for (let index: number = 0; index < palavra.length; index++) {
      const char: string = palavra[index];
      if (vogais.includes(char)) {
        quantidadeVogais++;
      }
    }
    /**
     * Imprime o número de vogais da palavra no console
     */
    return console.log(
      `A palavra ${palavra} contêm: ${quantidadeVogais} vogais`
    );
  }
}
/**
 * Chamada da função contarVogaisParametro passando como parâmetro da função a palavra ("aeiouAEIOUáéíóúÁÉÍÓÚ")
 */
contarVogaisParametro("aeiouAEIOUáéíóúÁÉÍÓÚ");
/**
 * Chamada da função contarVogaisPrompt que espera uma palavra digitada pelo usuário
 */
contarVogaisPrompt();
