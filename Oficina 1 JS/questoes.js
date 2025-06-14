// 1. Crie uma função que recebe dois números e retorne o maior dos dois. 
function NunMaior(n1, n2){
    if (n1 != n2){
        if(n1 > n2){
            console.log("Esse é o maior: ", n1)
        }else {
            console.log("Esse é o maior: ", n2)
        } 
    } else {
        console.log("Números iguais: ",n1)
    }
}

// 2. Crie uma função de calcule a potência do primeiro número elevado ao segundo número. 
function NumPoten(n1, n2){
    if(n1 > 0 && n2 > 0){
        console.log("N1 elevado a N2 é: ", n1 ** n2)
    }else{
        console.log("Valor invalido, números negativos")
    }
}

//3. Calcule o fatorial de um número passado por uma função. 
function fatorial(n){
    let fator = 1

    if (n ===0 || n === 1){
        console.log("Resultado: ", n)
        return
    }

    for(let i = 2; i <= n; i++){
        fator*=i
    }
    console.log("Resultado: ", fator)
}

//4. Calcule a área de um círculo baseada na passagem de parâmetro de seu raio.
function AreaCirc(raio){
    if(raio > 0){
        let area = 3.14 * (raio**2)
        console.log("Area do circulo: ", area)
    }else {
        console.log("Valor invalido")
    }
}

//5. Escreva uma função que receba um array de números e retorne apenas os números pares.
function NumPares(numeros){
    let pares = []
    for (let i = 0; i <=numeros.length; i++){
        if (numeros[i] % 2 === 0){
            pares.push(numeros[i])
        }
    }
    console.log("Lista dos números pares: ", pares)
}

//6. Escreva uma função que receba um array de números e retorne o maior número presente no array. 
function ListaMaior(numeros){
    let maior = 0
    for(let i = 0; i <= numeros.length; i++){
        if (numeros[i]>maior){
            maior = numeros[i]
        }
    }
    console.log("Maior numero na lista é: ", maior)
}

//7. Crie uma função que gere os primeiros n números da sequência de Fibonacci.
function Fibonacci(n){
    if(n <= 0){
        console.log("Valor inválido")
        return
    }
    let fibo = [0, 1]
    for(let i = 2; i < n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    fibo.length = n  
    console.log("Sequência de Fibonacci: ", fibo)
}


// 8. Escreva uma função que conte quantas vogais existem em uma string fornecida.
function ContaVogais(texto){
    let contador = 0
    let vogais = "aeiouAEIOU"

    for(let i = 0; i < texto.length; i++){
        for(let j = 0; j < vogais.length; j++){
            if(texto[i] === vogais[j]){
                contador++
                break
            }
        }
    }

    console.log("Quantidade de vogais: ", contador)
}

// 9. Escreva uma função que recebe um número e retorna se ele é par ou ímpar. 
function ParOuImpar(num){
    if(num % 2 === 0){
        console.log(num, "é par")
    }else{
        console.log(num, "é ímpar")
    }
}

// 10. Crie uma função que recebe uma string e retorna essa string invertida. 
function InverterString(texto){
    let invertida = ""
    for(let i = texto.length - 1; i >= 0; i--){
        invertida += texto[i]
    }
    console.log("String invertida: ", invertida)
}

// 11. Crie uma função que receba dois números e um operador (+, -, *, /) e retorne o resultado da operação. 
function Calculadora(n1, n2, operador){
    let resultado
    if(operador === "+"){
        resultado = n1 + n2
    } else if(operador === "-"){
        resultado = n1 - n2
    } else if(operador === "*"){
        resultado = n1 * n2
    } else if(operador === "/"){
        if(n2 === 0){
            console.log("Erro: divisão por zero")
            return
        }
        resultado = n1 / n2
    } else {
        console.log("Operador inválido")
        return
    }
    console.log("Resultado: ", resultado)
}

//12. Crie uma função que valide um CPF (formato brasileiro) de acordo com as regras oficiais.
function ValidarCPF(cpf){
    if(cpf.length !== 11){
        console.log("CPF inválido: tamanho incorreto")
        return
    }

    let soma = 0
    let resto

    // Validação do primeiro dígito
    for(let i = 1; i <= 9; i++){
        soma += parseInt(cpf[i - 1]) * (11 - i)
    }

    resto = (soma * 10) % 11
    if(resto === 10 || resto === 11){
        resto = 0
    }

    if(resto !== parseInt(cpf[9])){
        console.log("CPF inválido: primeiro dígito verificador errado")
        return
    }

    // Validação do segundo dígito
    soma = 0
    for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf[i - 1]) * (12 - i)
    }

    resto = (soma * 10) % 11
    if(resto === 10 || resto === 11){
        resto = 0
    }

    if(resto !== parseInt(cpf[10])){
        console.log("CPF inválido: segundo dígito verificador errado")
        return
    }

    console.log("CPF válido")
}


// 13. Desenvolva uma função que implemente um cronômetro simples, contando segundos e exibindo o resultado no console.
function cronometro(segundos){
    function contar(i){
        if(i > segundos){
            console.log("Cronômetro finalizado")
            return
        }
        console.log("Segundos: ", i)
        setTimeout(function(){
            contar(i + 1)
        }, 1000)
    }
    contar(0)
}
