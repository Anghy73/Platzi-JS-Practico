// const lista1 = [4, 5, 6, 10, 12, 15];

function calcularMediaCuadratica(lista1) {
    const listaElevada = [];
    for (let i = 0; i<lista1.length; i++) {
        listaElevada[i] = lista1[i] * lista1[i];
    }
    const sumaLista = listaElevada.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const raizListaSumada = Math.sqrt(sumaLista); 
    const raizLista1 = Math.sqrt(lista1.length); 
    const divicionDeRaiz = raizListaSumada / raizLista1;
    const resultado = divicionDeRaiz.toFixed(2);
    return resultado;
};

function calcularCuadratica() {
    const inputCuadratica = document.getElementById("inputCuadratica");
    const inputCuadraticaValor = inputCuadratica.value;
    const inputCuadraticaArray = inputCuadraticaValor.split("");
    var final = inputCuadraticaArray.filter(function(inputCuadraticaArray) {
        return inputCuadraticaArray != " ";
    });
    var arrayUnico = [];
    for(let i = 0; i < final.length; i++){
        arrayUnico.push(parseInt(final[i]));
    }
    const pCuadratica = document.getElementById("pCuadratica");
    pCuadratica.innerHTML = calcularMediaCuadratica(arrayUnico);
}