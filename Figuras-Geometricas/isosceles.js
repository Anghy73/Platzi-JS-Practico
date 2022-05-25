//  Triángulo isósceles

function alturaTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base) {
        // const mitadBase = base / 2;
        // const baseElevado = mitadBase ** 2; 
        // const ladoElevado = lado1 ** 2;
        // const alturaElevado = ladoElevado - baseElevado;
        // const resultado = Math.sqrt(alturaElevado);
        // alert(`La altura es: ${resultado}`);


        const altura = Math.sqrt(lado1**2 - base**2/ 4);
        console.log(base)
        alert(`La altura es: ${altura}`);
    } else {
        console.log("No es un Triángulo isósceles");
    }
}