function konversimenit(menit) {
    var h = Math.floor(menit / 60);
    var m = (menit % 60).toString().length === 1 ? "0" + Math.floor(menit % 60) : Math.floor(menit % 60) ;
    return h + " : " + m;
}

console.log(konversimenit(63));
console.log(konversimenit(124));
console.log(konversimenit(53));
console.log(konversimenit(88));
console.log(konversimenit(120));