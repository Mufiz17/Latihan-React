class Person {
    constructor(name, lokasi) {
      this.name = name;
      this.lokasi = lokasi;
    }
  
    greet() {
      console.log(`Hai, Nama saya ${this.name} dan saya tinggal di ${this.lokasi}`);
    }
  }
  
  // Contoh penggunaan
  const person1 = new Person("Mufiz", "Bekasi");
  person1.greet();
  
  class Employee extends Person {
    constructor(name, lokasi, pekerjaan, hobi) {
      super(name, lokasi);
      this.pekerjaan = pekerjaan;
      this.hobi = hobi;
    }
  
    work() {
      console.log(`${this.name} merupakan seorang ${this.pekerjaan}.`);
    }
  
    displayHobi() { // Mengganti nama metode untuk menghindari konflik
      console.log(`${this.name} memiliki hobi ${this.hobi} dan membaca 3 buku per bulan.`);
    }
  }
  
  // Contoh penggunaan
  const employee1 = new Employee("Mufiz", "Bekasi", "siswa", "Membaca");
  employee1.greet();
  employee1.work();
  employee1.displayHobi();
  