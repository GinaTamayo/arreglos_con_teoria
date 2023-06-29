
let arregloA = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
//a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
for (let i = 0; i < arregloA.length; i++) {
    for (let j = 0; j < arregloA[i].length; j++) {
        console.log(arregloA[i][j]);
    }
}

//b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach
arregloA.forEach(i => {
    i.forEach(j => {
        console.log(j);
    });
});