//Menggunakan while
console.log("LOOPING PERTAMA");
var loopingpertama = 0;
while (loopingpertama < 20) {
    loopingpertama += 2;
    console.log(loopingpertama + " - I love coding");
}

console.log("LOOPING KEDUA");
var loopingkedua = 22;
while(loopingkedua > 2) {
    loopingkedua -= 2;
    console.log(loopingkedua + " - I will become fullstack developer");
}

//Menggunakan For
console.log("LOOPING PERTAMA");
for(var loopingpertama = 1; loopingpertama <= 20; loopingpertama ++){
    console.log(loopingpertama + " - I love coding");
}

console.log("LOOPING KEDUA");
for(var loopingkedua = 20; loopingkedua >= 1; loopingkedua -- ) {
    console.log(loopingkedua + " - I will become fullstack developer")
}


//Angka Ganjil dan Genap
var counter = 0;
while(counter < 100) {
    counter ++;
    if ((counter % 2) == 0) {
        console.log("Genap")
    } else {
        console.log("Ganjil")

    }
}

//Pertambahan counter 2
var counter = 1;
while(counter <= 100) {
    if ((counter % 3) == 0) {
        console.log(counter + " kelipatan 3")
    }
    counter +=2;
}
    
var counter = 1;
while(counter <= 100) {
    if ((counter % 6) == 0) {
        console.log(counter + " kelipatan 6")
    }
    counter +=5;
}
    
var counter = 1;
while(counter <= 100) {
    if ((counter %10) == 0) {
        console.log(counter + " kelipatan 10")
    }
    counter +=9;
}
    























