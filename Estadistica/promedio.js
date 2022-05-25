// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];


function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista.toFixed(1);
}


function mostrarResultado() {
    const inputPromedio = document.getElementById("inputPromedio");
    const inputPromedioValor = inputPromedio.value;
    // console.log(inputPromedioValor);
    // console.log(typeof(inputPromedioValor));

    const inputPromedioArray = inputPromedioValor.split("");
    // console.log(inputPromedioArray);
    // console.log(typeof(inputPromedioArray));

    var final = inputPromedioArray.filter(function(inputPromedioArray) {
        return inputPromedioArray != " ";
    });
    // console.log(final);
    var arrayUnico = [];
    for(let i = 0; i < final.length; i++){
        arrayUnico.push(parseInt(final[i]));
    }
    alert(calcularMediaAritmetica(arrayUnico));
}