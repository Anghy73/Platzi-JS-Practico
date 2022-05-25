// Código del cuadrado
// console.group | Para encapsular los console.log
console.group("Cuadrado");

const ladoCuadrado = 5;
// las comillas `` se llaman Template literals y se hacen con alt + 96 = `
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro de mi cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado}cm²`);

console.groupEnd("Cuadrado");

// Código del triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoBase = 4;

console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${ladoBase}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoBase;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (ladoBase * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm²`);

console.groupEnd("Triángulo");

// Código del círculo
console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);
// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);
// PI
// const PI = 3.1416;
const PI = Math.PI;
console.log(`PI es: ${PI}cm`);
// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`);
// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
// alt + 253 = ²
console.log(`El área del círculo es: ${areaCirculo}cm²`);


console.groupEnd("Círculo");

console.clear();
console.warn("PELIGRO!");
console.error("ERROR!");