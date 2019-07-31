console.log("LOOPING PERTAMA");
var loopingpertama = 0;
while(loopingpertama < 20) {
    loopingpertama += 2;
    console.log(loopingpertama + " - I love coding");
}

console.log("LOOPING KEDUA");
var loopingkedua = 22;
while(loopingkedua > 0) {
    loopingkedua -= 2;
    console.log(loopingkedua + " - I will become fullstack developer");
}

console.log("LOOPING PERTAMA");
for(var loopingpertama = 0; loopingpertama <20; loopingpertama ++){
    console.log(loopingpertama + " - I love coding");
}

console.log("LOOPING KEDUA");
for(var loopingkedua = 20; loopingkedua > 0; loopingkedua -- ) {
    console.log(loopingkedua + " - I will become fullstack developer")
}

var counter = 0;
while(counter < 100) {
    counter ++;
    if ((counter %2) == 0) {
        console.log(counter + " -Genap")
    } else {
        console.log(counter + " -Ganjil")

    }
}

var counter = 1;
while(counter <= 100) {
    if ((counter %3) == 0) {
        console.log(counter + " kelipatan 3")
    } else {
        console.log(counter + " ")
    }
    counter +=2;
}
    
var counter = 1;
while(counter <= 100) {
    if ((counter %6) == 0) {
        console.log(counter + " kelipatan 6")
    } else {
        console.log(counter + " ")
    }
    counter +=5;
}
    
var counter = 1;
while(counter <= 100) {
    if ((counter %10) == 0) {
        console.log(counter + " kelipatan 10")
    } else {
        console.log(counter + " ")
    }
    counter +=9;
}
    























