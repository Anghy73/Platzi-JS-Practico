const lista1 = [
    1,
    2,
    3,
    4,
    4,
    2,
    3,
    1,
    2,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

lista1;
lista1Count;

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1]
    }
);

lista1Array;
console.log(lista1Array.length);


const moda = lista1Array[lista1Array.length - 1];
console.log(moda[0]);
    
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
    return moda;
}

// function calcularModa(lista) {
//     const listaObject = {};
//     lista.map(
//         function (elemento) {
//             if (listaObject[elemento]) {
//                 listaObject[elemento] += 1;
//             } else {
//                 listaObject[elemento] = 1;
//             }
//         }
//     );
//     const listaArray = Object.entries(listaObject).sort((a, b) => a - b);
//     return moda = listaArray[listaArray.length - 1];
// }