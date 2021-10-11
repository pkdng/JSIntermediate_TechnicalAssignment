//Soal - 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
//      kedua fungsi dapat berjalan, fun1 menghasilkan object berisi fun1 dan fun2
//      kemudian fun2 menghasilkan object kosong
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
//      beda
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
//      hal ini dikarenakan arrow function pada fun2 tidak dapat digunakan pada sebuah method dan this juga tidak support dengan arrow function
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();

//Soal - 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
//    merupakan cara untuk membatasi akses langsung ke properti atau method dari sebuah objek,
//    digunakan ketika kita ingin membatasi hak akses pada suatu atribut yang terdapat di dalam enkapsulasi tersebut
//    sehingga kita dapat membedakan atribut mana yang dapat diubah dan tidak dapat diubah dari luar class tersebut
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
//    merupakan cara menyembunyikan detail implementasi dan dibutuhkan di dalam inheritance untuk mengimplementasikam method yang sama bagi seluruh class yang diturunkan dari abstract class
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
//    merupakan sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau anaknya,
//    digunakan ketika suatu class memiliki method dan property yang sama sehingga tidak perlu membuat method dan property di masing-masing class lagi dan hanya perlu mewariskannya
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
//    merupakan kemampuan untuk membuat variabel, fungsi, atau objek yang memiliki banyak bentuk,
//    digunakan ketika kita ingin membuat banyak jenis penerapan pada suatu method


//Soal - 03
class Phone {
    constructor(brand, storage, ram){
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }

    getBrandName(){
        return this.brand
    }

    setBrandName(newBrand){
        this.brand = newBrand
    }

    printSpecification(){
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
    }

    setSpecification(storage, ram){
        this.storage = storage;
        this.ram = ram;
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();


//Soal - 04
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
    
    takeNewCourse(....) { .... }
    
    takeATest(....) { .... }
    
    courseAttendance(....) { .... }
  }
  
  class CourseOffering { .... }
  
  class Course { .... }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);
  