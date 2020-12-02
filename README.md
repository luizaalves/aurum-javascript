# Desafio aurum-javascript

1. Escreva uma função que receba 2 parâmetros, uma String e um Inteiro. Essa função deve ter como retorno outra String. O objetivo da função é remover os caracteres repetidos consecutivamente e que extrapolam o limite (valor inteiro) passado como segundo parâmetro, ou seja, se o limite for 2, os caracteres podem ser repetidos no máximo duas vezes. Exemplos:

   * function removeRepeated("xxxyzzaaayy", 1) => "xyzay"
   * function removeRepeated("xxxyzzaaayy", 2) => "xxyzzaayy"

   **Código**: [Exercício 1](./src/exer1.js)

   ___

2. Escreva uma função que receba 2 parâmetros, uma String e um Inteiro.Essa função deve ter como retorno outra String. O Objetivo da função é substituir o caracter "?" criando uma repetição do caracter que está antes dele o numero de vezes do parametro Inteiro. Caso o caracter "?" seja o primeiro da String fornecida ele deve repetir o último caracter da String. Exemplos:

   * function replaceChar("x?yzza?y?", 1) => "xxyzzaayy"
   * function replaceChar("x?yzza?y?", 2) => "xxxyzzaaayyy"
   * function replaceChar("?x?yzza?y?", 2) => "yyxxxyzzaaayyy"

   **Código**: [Exercício 2](./src/exer2.js)

___

3. Escreva uma função que receba 2 Strings. Essa função deve ter como retorno um número. O Objetivo da função é ordenar as 2 strings alfabeticamente e extrair de cada uma a maior e a menor letra. Trasforme essa letra em um número considerando que o Alfabeto é uma sequencia numérica e a letra "a" é igual a 1 a letra "b" é igual a 2 e assim sucessivamente. O retorno da função deve ser a soma da multiplicação entre a maior letra da primeira String e a menor letra da segunda String com a multiplicação entre a maior letra da segunda String e a menor letra da primeira String.

   *retorno =(maiorLetraString1 menorLetraString2 ) + (maiorLetraString2  menorLetraString1)*

   * function lettersSum("dacb", "gdab") => 11
   * function lettersSum("dcb", "gdab") => 18
   
   **Código**: [Exercício 3](./src/exer3.js)
