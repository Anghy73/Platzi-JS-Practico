// Código del cuadrado
// console.group | Para encapsular los console.log
console.group("Cuadrado");

// const ladoCuadrado = 5;
// las comillas `` se llaman Template literals y se hacen con alt + 96 = `
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado();

// console.log(`El perímetro de mi cuadrado es: ${perimetroCuadrado}cm`);

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log(`El área del cuadrado es: ${areaCuadrado}cm²`);

console.groupEnd("Cuadrado");

// Código del triángulo
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoBase = 4;

// console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${ladoBase}cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoBase;
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const areaTriangulo = (ladoBase * alturaTriangulo) / 2;
// console.log(`El área del triángulo es: ${areaTriangulo}cm²`);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd("Triángulo");

// Código del círculo
console.group("Círculo");

// Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo}cm`);
// Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

// function diametroCirculo(radio) {
//     return radio * 2;
// }

// PI
// const PI = 3.1416;
const PI = Math.PI;
// console.log(`PI es: ${PI}cm`);
// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`);

// function perimetroCirculo(radio) {
//     const diametro = diametroCirculo(radio);
//     return diametro * PI;
// }

// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

// function areaCirculo(radio) {
//     return (radio * radio) * PI;
// }

// alt + 253 = ²
// console.log(`El área del círculo es: ${areaCirculo}cm²`);


function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    const resultado = diametro * PI;
    return resultado.toFixed(2);
}
function areaCirculo(radio) {
    const resultado = (radio * radio) * PI;
    return resultado.toFixed(2);
}

console.groupEnd("Círculo");


// Js en HTML
// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultado = document.getElementById("resultadoCuadrado");
    // alert(perimetroCuadrado(value));
    resultado.innerHTML = perimetroCuadrado(value);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultado = document.getElementById("resultadoCuadrado");
    // alert(areaCuadrado(value));
    resultado.innerHTML = areaCuadrado(value);
}

// Triángulo

function calcularPerimetroTriangulo() {
    const inputOne = document.getElementById("inputTrianguloOne");
    const valueOne = parseInt(inputOne.value);
    const inputTwo = document.getElementById("inputTrianguloTwo");
    const valueTwo = parseInt(inputTwo.value);
    const inputThree = document.getElementById("inputTrianguloThree");
    const valueThree = parseInt(inputThree.value);
    const resultado = document.getElementById("resultadoTriangulo");
    resultado.innerHTML = perimetroTriangulo(valueOne, valueTwo, valueThree);
    // alert(perimetroCuadrado(value));
}

function calcularAreaTriangulo() {
    const inputThree = document.getElementById("inputTrianguloThree");
    const valueThree = parseInt(inputThree.value);
    const inputfour = document.getElementById("inputTriangulofour");
    const valuefour = parseInt(inputfour.value);
    const resultado = document.getElementById("resultadoTriangulo");
    resultado.innerHTML = areaTriangulo(valueThree, valuefour);
    // alert(areaCuadrado(value));
}

// Círculo

function calcularPerimetroCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const valorCirculo = parseInt(inputCirculo.value);
    const resultadoCirculo = document.getElementById("resultadoCirculo");
    resultadoCirculo.innerHTML = perimetroCirculo(valorCirculo);
}

function calcularAreaCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const valorCirculo = parseInt(inputCirculo.value);
    const resultadoCirculo = document.getElementById("resultadoCirculo");
    resultadoCirculo.innerHTML = areaCirculo(valorCirculo);
}