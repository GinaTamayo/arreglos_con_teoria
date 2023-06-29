let arregloB = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,66, 77], [1, 2, 3, 4] ] ];

//a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
for (let index = 0; index < arregloB.length; index++) {
    for (let i = 0; i < arregloB[index].length; i++) {
        for (let j = 0; j < arregloB[index][i].length; j++) {
            
            console.log(arregloB[index][i][j]);
        }
    }
}

//b) Recorrer el arreglo imprimiendo todos sus elementos mas internos usando ciclo forEach
arregloB.forEach(index => {
    index.forEach(i => {
        i.forEach(j => {
            console.log(j);
        });
    });
});