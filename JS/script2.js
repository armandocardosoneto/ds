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