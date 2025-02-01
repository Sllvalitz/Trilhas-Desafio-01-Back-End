//Utilizando a biblioteca Prompt-sync (npm install prompt-sync)

// 1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
function exercicio01(){
    console.log('----------------Exercicio 01----------------')
    nome = 'Anderson da Silva'
    console.log(nome)
}
exercicio01()


// 2. Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.
function exercicio02() {
    console.log('----------------Exercicio 02----------------')
    const idade = 25
    console.log(idade)
    const altura = 1.75
    console.log(altura)
}
exercicio02()

// 3. Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
function exercicio03() {
    console.log('----------------Exercicio 03----------------')
    const preco = 50
    const desconto = 0.2
    const precoComDesconto = preco - (preco * desconto)
    console.log(precoComDesconto)
}
exercicio03()

// 4. Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".
function exercicio04() {
    console.log('----------------Exercicio 04----------------')
    const temperatura = 30
    if (temperatura > 25) {
        console.log('Está calor!')
    } else {
        console.log('Está fresco!')
    }
}
exercicio04()

// 5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".
function exercicio05() {
    console.log('----------------Exercicio 05----------------')
    const idade = 18 
    if (idade >= 18){
        console.log('Você é maior de idade')
    } else {
        console.log('Você é menor de idade')
    }
}
exercicio05()

// 6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
function exercicio06() {
    console.log('----------------Exercicio 06----------------')
    const nota = 3
    if (nota >= 7){
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}
exercicio06()

// 7. Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".
function exercicio07() {
    console.log('----------------Exercicio 07----------------')
    const numero1 = 12
    const numero2 = 19
    if (numero1 === numero2){
        console.log('Os números são iguais')
    } else {
        console.log('Os números são diferentes')
    }
}
exercicio07()

// 8. Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.
function exercicio08() {
    console.log('----------------Exercicio 08----------------')
    const nome = 'Anderson'
    const idade = 19
    console.log('Olá, meu nome é ' + nome + ' e eu tenho ' + idade + ' anos') //Poderia ser escrito assim também: console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`)
}
exercicio08()

// 9. Crie um loop que imprima os números de 1 a 10 na tela.
function exercicio09() {
    console.log('----------------Exercicio 09----------------')
    for (let i = 1; i <= 10; i++){
        console.log(i)
    }
}
exercicio09()

// 10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
function exercicio10() {
    console.log('----------------Exercicio 10----------------')
    const prompt = require('prompt-sync')();
    while (true) {
       let numeroDigitado = prompt('Qual o número romano representado pela letra V?').toLowerCase()
       if (numeroDigitado === '5' || 'cinco') {
          console.log('Número correto digitado')
          break
       } else {
          console.log('Número incorreto, tente novamente')
       }
    }
}  
exercicio10()

// 11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.
function exercicio11() {
    console.log('----------------Exercicio 11----------------')
    for (let i = 1; i<=10; i++) {
    console.log(i * 7)
  }
}
exercicio11()
  
// 12. Crie um loop que exiba todos os números pares de 0 a 20.
function exercicio12() {
    console.log('----------------Exercicio 12----------------')
    for (let i = 0; i <= 20; i+=2) {
      console.log(i)
    }
}
exercicio12()

// 13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
function exercicio13() {
    console.log('----------------Exercicio 13----------------')
    let raio = 5
    let area = Math.PI * raio ** 2
    console.log(area)
}
exercicio13()

// 14. Crie um programa simples que calcule a soma de dois números e imprima o resultado. Após isso comente cada linha do seu código explicando o que cada parte faz.
function exercicio14() {   
    console.log('----------------Exercicio 14----------------')  //Defino uma função chamada "exercicio14" para padroniza-la assim como as outras e não haver a possibilidade de conflito entre os nomes das variáveis.
    X = parseInt(Math.random() * 10)   //Defino o valor de X e Y utilizando o "Math.random() * 10" para que os números gerados sejam aleátorios
    Y = parseInt(Math.random() * 10)   //dentro do intervalo de 0 a 10. Além disso utilizo o "parseInt" para que o número gerado seja inteiro.
    Z = X + Y                     //Defino Z como a variável que irá armazenar o valor da soma de X e Y.
    console.log(Z)                //Utilizo o comando console.log(Z) para que o valo de Z seja impresso no terminal.
}                                 //Fim da função exercicio14 que calcula a soma de dois números aleatórios.            
exercicio14()                     //Chamo a função exercicio14 para que o código seja executado.

// 15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:
// `x = 10`          `y = 20`          `z = x+y`          `console.log(z)`
function exercicio15() {
    console.log('----------------Exercicio 15----------------')
    const valorX = 10
    const valorY = 20
    const resultadoZ = valorX + valorY
    console.log(`O resultado da soma de ${valorX} + ${valorY} é igual a ${resultadoZ}`)
}
exercicio15()