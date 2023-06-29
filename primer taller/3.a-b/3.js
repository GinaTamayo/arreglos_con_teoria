let arregloC =  [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
//a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o forEach.

for (let i = 0; i < arregloC.length; i++) {
    for (let j = 0; j < arregloC[i].length; j++) {
        if (arregloC[i][j] % 2 != 0) {
            console.log(arregloC[i][j]);
        }
    }
}

//b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
//para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach.
let acumuladora = 0
arregloC.forEach(i => {
    i.forEach(j => {
            acumuladora+=j
    });
});
console.log(acumuladora);