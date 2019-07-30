var nama = "Zero" ;
var peran = "Penyihir" ;

if(nama === "" && peran === "" ){
    console.log("Nama harus di isi")
} else if( nama === nama && peran === "") {
    console.log("Halo " +nama+", Pilih peranmu untuk memulai game!");
} else if( nama === nama && peran === "Ksatria") {
      console.log("Selamat datang di dunia Proxytia "+nama);
      console.log("Halo Ksatria " +nama+", Kamu dapat menyerang dengan senjatamu!");
} else if(nama === nama && peran === "Tabib") {
      console.log("Selamat datang di dunia Proxytia, "+nama);
      console.log ("Halo Tabib " +nama+", kamu akan membantu temanmu yang terluka.");
} else if(nama === nama && peran === "Penyihir") {
      console.log("Selamat datang di dunia Proxytia, "+ nama)
      console.log("Halo penyihir " +nama+" , ciptakan keajaiban yang membantu kemenanganmu!");
}
  
  
    

  