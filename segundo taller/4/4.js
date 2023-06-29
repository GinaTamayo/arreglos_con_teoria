let cuartoArreglo = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ];

//a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log
cuartoArreglo[1][1] = "?"
console.log(cuartoArreglo[1][1]);

//b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log
cuartoArreglo[3][1] = 9
console.log(cuartoArreglo[3][1]);

//c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log
cuartoArreglo[0][0] = "¡"
console.log(cuartoArreglo[0][0]);

//d) Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
cuartoArreglo[1].splice(2, 1)
console.log(cuartoArreglo[1]);

//e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
cuartoArreglo[0].splice(2, 1);
console.log(cuartoArreglo[0]);

//f) Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreglo.
cuartoArreglo[3].splice(2, 1);
console.log(cuartoArreglo[3]);