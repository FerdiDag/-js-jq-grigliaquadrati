// //Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde


// genero 25 numeri random tra 0 e 10
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
// var randomNumbers = [];

// var numero_generato = generateRandom(0, 10);


// do {
//     var numero_random = generateRandom(0, 10);
//
// //     randomNumbers.push(numero_random);
// //
// // } while (randomNumbers.length < 25);
// //
// // console.log(randomNumbers);


$('.quadrato').each(function() {
    var numero_generato = generateRandom(0, 10);
    console.log(numero_generato);
    $(this).append(numero_generato);
    console.log($(this).append());
});
