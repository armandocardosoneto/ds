var A=5;
var B=4;
var C=3;
var D=6;

//    V        v
if( A > C && C <= D )
{
    console.log("Mensagem do operador e AND");
}

//      F       OU      V
if((A + B) > 10 || (A + B) == (C + D))
{
    console.log("Mensagem do operador e OU")
}

//Exercício 7

var letra = prompt("Digite uma letra: ");

if(letra == "")
{
    alert("Erro. Valor Vazio.");
}
else if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
{
    alert("Letra digitada é uma vogal.");
}
else
{
    alert("Letra digitada é uma consoante.");
}

function solicitarNome() {
    var nome = prompt("Inserir Nome");
    alert("O nome inserido é " + nome);
}

solicitarNome();

function verificarPar()
{
    var numero = prompt("Digite um número");

    if( numero % 2 == 0 )
    {
        alert("Número é par.");
    }
    else{
        alert("Número é impar.");
    }
}

verificarPar();
verificarPar();
verificarPar();

function unirPalavras(palavra1 , palavra2)
{
    console.log(palavra1 + " " + palavra2);
}

unirPalavras("Olá" , "Coder");

unirPalavras("Cursando" , "JS");

function somar(PrimeiroNumero , segundonumero)
{
    return PrimeiroNumero + segundonumero;
}
var resultado = somar(5, 8);

alert("Resultado: " + resultado);


function subtrair(num1, num2)
{
if(num1 > num2){
    resultado = num1 - num2;
}
else if(num1 == num2)
{
resultado = 0;
}
else{
    resultado = num2 - num1;
}
console.log("Resultado da subtração: " + resultado);

}


subtrair(100, 20);

subtrair(10, 50);

//função de seta
var soma = (a, b) => {return a + b}
var subtrair = (a, b) => a - B;
console.log(soma(15, 20))
console.log(subtrair(20, 5))

//função anônima
var soma = function (a, b) {return a + b};
var subtrair = function (a, b) {return a - b};
console.log(soma(15, 20))
console.log(subtrair(20, 5))

