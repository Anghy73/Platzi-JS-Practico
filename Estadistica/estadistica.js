function calcularModa(lista) {
    const lista1Count = {};
    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1]
        }
    );
    let moda = lista1Array[lista1Array.length - 1];
    return moda[0];
}

function esPar(numero) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(lista) {
    let nuevaLista = lista.sort(function(antes, siguente) {
        return antes - siguente;
    });
    let mediana;
    const mitadListaN = parseInt(nuevaLista.length / 2);
    console.log(mitadListaN);
    if (esPar(nuevaLista.length)) {
        const elemento1 = nuevaLista[mitadListaN - 1];
        const elemento2 = nuevaLista[mitadListaN];
        const promedioE1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioE1y2;
        let resultado = mediana;
        return resultado;
    } else {
        mediana = nuevaLista[mitadListaN];
        let resultado = mediana;
        return resultado;
    }
}


function calcularEstaditicas() {
    // Media Aritmetica
    const inputEstadistica = document.getElementById("inputEstadistica");
    const inputEstadisticaValor = inputEstadistica.value;
    const inputEstadisticaArray = inputEstadisticaValor.split("");
    var final = inputEstadisticaArray.filter(function(inputEstadisticaArray) {
        return inputEstadisticaArray != " ";
    });
    var arrayUnico = [];
    for(let i = 0; i < final.length; i++){
        arrayUnico.push(parseInt(final[i]));
    }
    // Promedio
    const resultadoPromedio = document.getElementById("pPromedio");
    resultadoPromedio.innerHTML = calcularMediaAritmetica(arrayUnico);
    // Moda
    const resultadoMedina = document.getElementById("pMediana");
    resultadoMedina.innerHTML = calcularMediana(arrayUnico);
    // Mediana
    const resultadoModa = document.getElementById("pModa");
    resultadoModa.innerHTML = calcularModa(arrayUnico);
}
