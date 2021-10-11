// 1. Apa itu synchronous?
//    proses eksekusi code program dijalankan secara berurutan, artinya untuk menjalankan code selanjutnya harus menunggu code sebelumnya selesai dieksekusi

// 2. Apa itu asynchronous?
//    proses eksekusi yang dijalankan tanpa harus menunggu code sebelumnya selesai diproses, dengan kata lain, code dapat diproses dalam waktu bersamaan tanpa harus menunggu proses antrian

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
//    bisa

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
//    first log:  1
//    first log:  2
//    first log:  3
//    first log:  4
//    first log:  5
//    second log:  6
//    second log:  6
//    second log:  6
//    second log:  6
//    second log:  6

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
//    karena var menjadikan i sebagai variabel global dan pada console.log pertama variabel i
//    sudah diubah valuenya dan untuk console.log kedua dijalankan ketika waktu sudah lebih dari 100 detik
//    maka dari itu yang tampil adalah 6 sebanyak 5 kali
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }
  