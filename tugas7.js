var baris1 = 4;
for(var i = 0; i <= baris1; i++){
console.log("*")
}

    
var baris2 = 5;
for(i = 0; i < baris2; i++){
    for(j = 0; j < baris2; j++){
        process.stdout.write("*");
    }
    console.log()
}

var baris3 = 5;
for(i = 0; i < baris3; i++){
    console.log();
    for(j = 0; j <= i; j++){
        process.stdout.write("*");
    }
}
