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


// console.log("segitiga bintang 1");
// var input = 7;
// for(var a = 10; a >= input; a--) {
//     for(var b = a; b >= input; b--) {
//     process.stdout.write("*");
// }
// console.log("");
// }

// var name = "a";
// var age = 18 ;
// var money = 40000;

// if(name === "a") {
//     console.log("Kenalan dulu kali sebelum masuk !");
// } else if(age < 17) {
//     console.log("Jangan berjudi anak muda");
// } else if(age > 17){
//    if(money > 50000) {
//        money2 = money - 1000;
//        console.log("Anda bisa masuk kasino. Uang anda saat ini " + money2);
//    } else {
//        console.log("Uang tidak cukup. Anda harus pulang");
//    }
// }

// var deret = 5;

//  var jumlah = 0;
//  while(deret > 0) {
//      jumlah += deret;
//      deret --;
//      console.log("Jumlah saat ini: " + jumlah)
//  }

// // for(var angka = 15; angka >= 0; angka--) {
// //     console.log("Iterasi ke - " + angka);
// // }

// var jumlah = 0;
// for(var deret = 5; deret > 0; deret--) {
//     jumlah += deret;
//     console.log("Jumlah saat ini: " + jumlah);
// }
// console.log("Jumlah terakhir: " + jumlah);

// STORE "kecepatan" with 80
// STORE "kemiringanSudut" with any numerical value

// IF "kemiringanSudut" >= 15 AND "kemiringanSudut" <= 29
//     kecepatan = kecepatan - 10
// ELSE IF "kemiringanSudut" >= 30 AND "kemiringanSudut" <= 44
//     kecepatan = kecepatan - 15
// ELSE IF "kemiringanSudut" >= 45 AND "kemiringanSudut" <= 50
//     kecepatan = kecepatan - 25

// DISPLAY "kecepatan"

// var kecepatan = 80;
// var kemiringanSudut = 0;

// if(kemiringanSudut >= 15 && kemiringanSudut <=29){
//     kecepatan -= 10;
//     console.log(kecepatan);
// } else if(kemiringanSudut >= 30 && kemiringanSudut <= 44) {
//     kecepatan -= 15;    
//     console.log(kecepatan);
// } else if(kemiringanSudut >= 45 && kemiringanSudut <= 50) {
//     kecepatan -= 20;    
//     console.log(kecepatan);
// }

// var max = 5;

// for(var baris = max; baris >= 1; baris--) {
//     var kolom2 = " ";
//     for(var kolom = max; kolom >= 1; kolom--) {
//         kolom2 += kolom;
//     }
//     console.log(kolom2);
// }

// //second way
// var nums = "";

// function soal3(num) {

// for(var i = 0; i < num; i++) {
//     for(var j = num; j > 0; j--){
//         nums += j 
//     }
//     nums += "\n"
// }
// return nums
// }
// console.log(soal3(3));

// function drawThreeColsBox(height) {
//     var string = " ";
//     for(var i = 1; i <= height*3; i++) {
//         string += i + " ";
//         if(i % 3 === 0) {
//             console.log(string);
//             string = " ";
//         }
//     }
// }

// drawThreeColsBox(3);
// drawThreeColsBox(5);
// drawThreeColsBox(7);

// function drawThreeColsBox(height) {
//     var polaAngka = [1,2,3];
//     for(var i = 0; i < height; i++) {
//         if(i === 0) {
//         var polaAngkaBaris = String(polaAngka[0]) + " " + String(polaAngka[1]) + " " + String(polaAngka[2]);
//         } else {
//         polaAngka[0] = polaAngka[0] + 3;
//         polaAngka[1] = polaAngka[1] + 3;
//         polaAngka[2] = polaAngka[2] + 3;
//         var polaAngkaBaris = String(polaAngka[0]) + " " + String(polaAngka[1]) + " " + String(polaAngka[2]);
//         }
//         console.log(polaAngkaBaris);
//     }
// }

// drawThreeColsBox(5);

// 1. memfilter nilai object berdasarkan kondisi tertentu
​
