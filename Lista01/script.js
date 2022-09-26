/*1.	A lanchonete Gostosura vende apenas um tipo de sanduíche, 
cujo recheio inclui duas fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. 
Sabendo que cada fatia de queijo ou presunto pesa 50 gra-mas, e que a rodela de hamburguer pesa 100 gramas, 
faça um algoritmo em que o dono forneça a quantida-de de sanduiches a fazer, e a máquina informe as quantidades (em quilos) de queijo, 
presunto e carne neces-sários para compra*/

function lanchoneteGostosura(){

    let sanduiches = parseInt(prompt("Qual a quantidade de sanduiches?"))

    let presunto = sanduiches * 0.05
    let queijo = sanduiches * 0.05
    let hamburguer= sanduiches * 0.1


    console.log("Comprar " + presunto + " kg de presunto " + queijo + " kg de queijo " + hamburguer+ " kg de hamburguer")
    alert("Comprar " + presunto + " kg de presunto " + queijo + " kg de queijo e " + hamburguer+ " kg de hamburguer")
}

/*2.	Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. 
Faça um algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit
 (pesquise como fazer este tipo de conversão). */

function converterTemp(){

    let opcao = parseInt(prompt("Deseja converter Celsius ou Fahrenheit? (1/2)"))

    if (opcao == 1)
        converterCelsius()
    else if(opcao == 2)
        converterFahrenheit()
    else
        alert("Opcao invalida")

}

 function converterCelsius(){

    let temperatura = parseInt(prompt("Qual a temperatura em Celsius?"))

    let fahr = (temperatura * 1.8) + 32

    console.log(fahr)
    alert(temperatura + " ºC são " + fahr + " ºF")



}

function converterFahrenheit(){

    let temperatura = parseInt(prompt("Qual a temperatura em Fahrenheit ?"))

    let celsius = (temperatura - 32) / 1.8

    alert(temperatura + " ºF são " + celsius + " ºC")


}

/*3.	A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. 
Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário. 
Considere que o sa-lário líquido é igual ao salário bruto descontando-se 10% de impostos. */

function horaSalario(){

    let regime = confirm("Voce está fazendo horas normais?")

    if (regime == true){
    let horas = parseInt(prompt("Quantas horas foram trabalhadas?"))
    let salarioBruto = horas * 10
    let salarioLiquido = salarioBruto * 0.9
    alert("Seu salário bruto foi de " + salarioBruto + " reais, e o salário liquido foi de " + salarioLiquido)
    }
    else {
    let horas = parseInt(prompt("Quantas horas foram trabalhadas?"))
    let salarioBruto = horas * 10
    let salarioLiquido = salarioBruto * 0.9
    alert("Seu salário bruto foi de " + salarioBruto + " reais, e o salário liquido foi de " + salarioLiquido)
    }
}

/*4.	A granja Frangotech possui um controle automatizado de cada frango da sua produção. 
No pé direito do fran-go há um anel com um chip de identificação; no pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. 
Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, 
faça um algoritmo para calcular o gasto total da granja para marcar todos os seus frangos. */

function granja(){

    let frangos = parseInt(prompt("Quantos frangos a granja tem?"))

    let gasto = (frangos * 4) + ((frangos*2) * 3.5) 

    alert("Serão gastos " + gasto + " reais")

}

/*5.	Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos.
 Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa. */

 function confeccao(){

    let blusas = parseInt(prompt("Quantas blusas foram feitas?"))
    let novelos = parseInt(prompt("Quantos novelos foram utilizados?"))
    

    let total = novelos/blusas

    alert("Foram utilziados " + total + " novelos por blusa")

}




/*6.	A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: 
lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. 
Se um comerciante compra uma determinada quantidade de cada formato, 
faça um algorit-mo para calcular quantos litros de refrigerante ele comprou. */

function refrigerante(){

    let lata = parseInt(prompt("Quantas latas?"))
    let garrafa = parseInt(prompt("Quantas garrafas de 600 ml?"))
    let pet = parseInt(prompt("Quantas garrafas de 2 litros?"))

    let total = (lata * 0.35) + (garrafa * 0.6) + (pet * 2)

    alert("Foram comprados " + total + " litros de refrigerante")

}

/*7.	Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. 
Faça um algo-ritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais. 
Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real.
 Não havendo moeda de um tipo, a quantidade respectiva é zero. */

 function economias(){


    let moeda01 = parseInt(prompt("Moedas de 1 centavo:"))
    let moeda5 = parseInt(prompt("Moedas de 5 centavo:"))
    let moeda10 = parseInt(prompt("Moedas de 10 centavo:"))
    let moeda25= parseInt(prompt("Moedas de 25 centavo:"))
    let moeda50= parseInt(prompt("Moedas de 50 centavo:"))
    let moeda1 =  parseInt(prompt("Moedas de 1 real: "))

    let total = (moeda01 * 0.01) + (moeda5 * 0.05) + (moeda10 * 0.10) + (moeda25 * 0.25) + (moeda50 * 0.50) + moeda1 
   
    alert("Pedrinho economizou " + total.toFixed(2))

 }

/*8.	Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. 
Assu-mindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, 
faça um algoritmo para ler os dados necessários e calcular a altura do prédio. */

function diaSol(){

    let alturaPessoa = parseInt(prompt("Qual a sua altura:"))
    let sombraPessoa = parseInt(prompt("Qual o tamanho da sua sombra?"))
    let sombraPredio = parseInt(prompt("Qual o tamanho da sombra do predio?"))

    alert("O prédio tem" + ((alturaPessoa * sombraPredio)/sombraPessoa) + " metros de altura")

}


/*9.	Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. 
Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer 
X litros de refresco (informados pelo usuário). */

function refresco(){

    let refresco = parseInt(prompt("Quantos litros de refresco serão feitos?"))

    alert("Serão necessarios " + (refresco*0.8) + " partes de agua e " + (refresco*0.2) + " partes de suco")
}

//10.	Calcule o volume de uma caixa d'água cilíndrica. 

function cilindro(){

    let raio = parseInt(prompt("Qual o raio da base?"))
    let altura = parseInt(prompt("Qual a altura?"))

    alert("O volume é de " + ((Math.PI * Math.pow(raio,2))*altura).toFixed(2) + " metros cúbicos")

}


//11.	Faça um algoritmo que receba três números, calcule e mostre a multiplicação desses números.

function multiplica(){

    let num1 = parseInt(prompt("Insira um numero?"))
    let num2 = parseInt(prompt("Insira mais um numero?"))
    let num3 = parseInt(prompt("Insira outro numero?"))
    

    alert("A multiplicação deles da um total de = " + (num1*num2*num3))

}

/*12.	Faça um algoritmo que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo. 
Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações.*/ 

function divide(){

    let num1 = parseInt(prompt("Insira um numero?"))
    let num2 = parseInt(prompt("Insira mais um numero?"))

    alert("A divisao deles da um total de = " + (num1/num2))

}

/*13.	Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas, 
considerando peso 2 para a primeira nota e peso 3 para a segunda nota.*/

function mediaNotas(){

    let num1 = parseInt(prompt("Insira uma nota?"))
    let num2 = parseInt(prompt("Insira mais uma nota"))

    alert("A média é de = " + (((num1*2)+(num2*3))/5).toFixed(2))

}

/*14.	Faça um algoritmo que receba o preço de um produto, 
calcule e mostre o novo preço, sabendo-se que este sofreu um desconto de 10%. */

function desconto(){

    let num1 = parseInt(prompt("Insira o valor do produto?"))

    alert("O novo preço é de = " + (num1 * 0.9))

}

/*15.	Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. 
Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, 
calcule e mostre a comissão e o salário final do funcionário. */

function comissaao(){

    let num1 = parseInt(prompt("Insira o valor do salario:"))
    let num2 = parseInt(prompt("Insira o valor de suas vendas"))

    alert("A média é de = " + (((num1) + (num2 * 0.04)).toFixed(2)))

}

//16.	Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: 
//a.	o novo peso se a pessoa engordar 15% sobre o peso digitado;
//b.	o novo peso se a pessoa emagrecer 20% sobre o peso digitado. 

function alteraPeso(){

    let peso = parseInt(prompt("Qual é o peso?"))

    alert("Se voce engordar 15% seu novo peso sera de " + (peso * 1.15).toFixed(2) + "\n Se emagrecer 20% seu novo peso sera de " + (peso * 0.8))

}

//17.	Faça um algoritmo que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas. 

function convertePeso(){

    let peso = parseInt(prompt("Qual é o peso em quilos?"))

    alert("O peso é de " + (peso*1000).toFixed(2) + " gramas")

}


//18.	Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior + base menor)* altura)/2 ; 

function trapezio(){

    let baseMaior = parseInt(prompt("Qual o tamanho da base maior?"))
    let baseMenor = parseInt(prompt("Qual o tamanho da base Menor?"))
    let altura = parseInt(prompt("Qual o tamanho da altura?"))

    alert("A área é de " + (((baseMaior + baseMenor)*altura)/2).toFixed(2) + " metros quadrados")

}


//19.	Faça um algoritmo que calcule e mostre a área de um quadrado. Sabe-se que: A = lado * lado; 

function quadrado(){

    let lado = parseInt(prompt("Qual o tamanho do lado?"))

    alert("A área é de " + Math.pow(lado,2).toFixed(2) + " metros quadrados")

}

//20.	Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A = (diagonal_maior * diago-nal_menor)/2; 

function losango(){

    let diagonalMaior = parseInt(prompt("Qual o tamanho da diagonal maior?"))
    let diagonalMenor = parseInt(prompt("Qual o tamanho da diagonal Menor?"))

    alert("A área é de " + (((diagonalMenor * diagonalMaior)/2).toFixed(2) + " metros quadrados"))

}


/*21.	Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, 
calcule e mos-tre a quantidade de salários mínimos que ganha esse funcionário. */

function quadrado(){

    let salario = parseInt(prompt("Qual é o seu salario?"))

    alert("O salario corresponde a  " + (salario/1200).toFixed(2) + " salarios minimos")

}

//22.	Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário. 

function tabuada(){

    let num = parseInt(prompt("Qual o numero que deseja?"))

    for(let i = 1; i <= 10; i++){
        console.log(num + "x" + i + "=" + num*i)
    } 
}


/*23.	Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
a.	a idade dessa pessoa em anos;
b.	a idade dessa pessoa em meses; 
c.	a idade dessa pessoa em dias
d.	a idade dessa pessoa em semanas. */

function ano(anoAtual,anoNasc){

    let anos = anoAtual - anoNasc;
    let meses = anos * 12;
    let dias = anos * 365;
    let semanas = dias / 7;

    console.log(anos + " anos")
    console.log(meses + " meses")
    console.log(dias + " dias")
    console.log(semanas.toFixed(2) + " semanas")

}


/*24.	João recebeu seu salário de R$ 1200,00 e precisa pagar duas contas (C1=R$ 200,00 e C2=R$120,00) que estão atrasadas. 
Como as contas estão atrasadas, João terá de pagar multa de 2% sobre cada conta. 
Faça um algo-ritmo que calcule e mostre quanto restará do salário do João */

function contas(salario){

    let multa1 = 200 * 1.02;
    let multa2 = 120 * 1.02;
    let multas = multa1 + multa2;
    let salarioFinal= salario - multas;

    console.log("O salario final sera de " + salarioFinal)

}


//25.	Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa. 

function hipotenusa(catetoAdj, catetoOpost){

    let hipotenusa = Math.sqrt((Math.pow(catetoAdj, 2)) + (Math.pow(catetoOpost, 2)));

    console.log("Hipotenusa = " + hipotenusa.toFixed(2))

}


