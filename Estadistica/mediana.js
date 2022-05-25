function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
	100,
	200,
	500,
	400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);
mitadLista1;

function esPar(numero) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

let mediana;

if (esPar(lista1.length)) {
	const elemento1 = lista1[mitadLista1 - 1];
	elemento1;
	const elemento2 = lista1[mitadLista1];
	elemento2

	const promedioE1y2 = calcularMediaAritmetica([elemento1, elemento2]);
	promedioE1y2;

	mediana = promedioE1y2;
} else {
	mediana = lista1[mitadLista1];
}

mediana;


function calcularMediana (lista) {
	let nuevaLista = lista.sort(function(antes, siguente) {
		// if (antes > siguente) {
		// 	return 1;
		// }
		// if (antes < siguente) {
		// 	return -1;
		// }
		// return 0;
		return antes - siguente;
	});

	console.log(nuevaLista);

	let mediana;
	const mitadListaN = parseInt(nuevaLista.length / 2);

	if (esPar(nuevaLista.length)) {
		console.log("Es par");
		const elemento1 = nuevaLista[mitadListaN - 1];
		const elemento2 = nuevaLista[mitadListaN];
		const promedioE1y2 = calcularMediaAritmetica([elemento1, elemento2]);
		mediana = promedioE1y2;
		let resultado = `La mediana es: ${mediana}`;
		return resultado;
	} else {
		console.log("Es inpar");
		mediana = nuevaLista[mitadListaN];
		let resultado = `La mediana es: ${mediana}`;
		return resultado;
	}
}

// function compareNumbers(a, b) {
// 	return a - b;
// }}

// let numberArray = [10, 22, 33, 17];
// numberArray.sort((a, b) => a - b);
// numberArray;