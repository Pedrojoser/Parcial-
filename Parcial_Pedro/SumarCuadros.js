function sumarCuadros(arrayNumeros) {
    let sum = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        sum += arrayNumeros[i];
    }
    for (let i = 0; i < arrayNumeros.length; i++) {
        console.log('+ ' + '-'.repeat(arrayNumeros[i].toString().length) + ' +') 
        console.log(`| ${arrayNumeros[i]} ` +  `|`);
        console.log('+ ' + '-'.repeat(arrayNumeros[i].toString().length) + ' +') 
    }
    console.log('+ ' + '='.repeat(sum.toString().length) + ` +`);
    console.log(`| ${sum} ` + `|`);
    console.log('+ ' + '='.repeat(sum.toString().length) + ` +`);
}

const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);