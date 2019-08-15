// var baris1 = 4;
// for(var i = 0; i <= baris1; i++){
// console.log("*")
// }

    
var i = 5;
var angka = ""
for(var baris = i; baris >= 1; baris--){
    for(var kolom = 1; kolom <= baris; kolom++){
        angka += kolom ;
    }
    angka += '\n';
}
console.log(angka);
 
var height = 5;
var num = '';
for (var i = height ; i >= 1; i--){
   for (var j = 1 ; j <= i; j++){
       num += j;
   }
   num += '\n';
}
console.log(num);



// var baris3 = 5;
// for(i = 0; i < baris3; i++){
//     console.log();
//     for(j = 0; j <= i; j++){
//         process.stdout.write("*");
//     }
// }

// var rows = 5;

// for(i = rows; i >= 1 ; i--){
//     for(j = 0; j <= i; j++){
//         console.log(" * ");
//     }
// }
 