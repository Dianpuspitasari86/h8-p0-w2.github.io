// var nilai = 80 ;
//  if(nilai >= 81 && nilai <= 100){
//     console.log("Nilai A")
// } else if(nilai >= 76 && nilai <= 80) {
//     console.log("Nilai B")
// } else if(nilai >= 66 &&  nilai <=75) {
//     console.log("Nilai C")
// } else if (nilai >= 56  &&  nilai <=65) {
//     console.log("Nilai D")
// } else if (nilai <= 55 && nilai >=0) {
//     console.log("Nilai E")
// } else {
//     console.log("Nilai tidak valid")
// }

// for(i = -10; i <= 10 ; i++) {
//     console.log(i);
// }

// for(i = 0; i <= 100; i++) {
//     if(i % 10 == 0 && i % 2 == 0) {
//         console.log(i + " denny setiady");
//     } else if(i % 2 == 0){
//         console.log(i + " denny");
//     } else (i % 2 == 1); {
//         console.log(i + " setiady");
//     } 
// }


console.log("segitiga bintang 1");
var input = 5;
for(var a = 8 ; a >= input; a--) {
    for(var b = a; b >= input; b--) {
    process.stdout.write("*");
}
console.log("*");
}