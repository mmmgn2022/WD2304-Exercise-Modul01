// Question 1
// ● Create a function to calculate array of student data//bisa pake objek literal atau pakai class (pke class krn ad data yg hrs diperiksa)
// ● The object has this following properties : //properti dlm objek ada apa aja yg utama, hrs disimpen dlm bentuk objek untuk tiap data studentnya
    // ○ Name → String
    // ○ Email → String
    // ○ Age → Date
    // ○ Score → Number

// ● Parameters : array of student
// ● Return values :
    // ○ Object with this following properties :
        // ■ Score
            // ● Highest
            // ● Lowest
            // ● Average
        // ■ Age
            // ● Highest
            // ● Lowest
            // ● Average

class Student {
  constructor(name, email, birth, score) {
    let date = new Date(birth);
    let dateNow = new Date();
    console.log(date);
    this.name = name;
    this.email = email;
    this.birth = date;
    this.age = dateNow.getFullYear() - date.getFullYear();
    this.score = score;
  }
}

console.log(new Student("Edo", "edo@mail.com", "1997-04-25", 85));
let dbStudent = [];
dbStudent.push(new Student("Edo", "edo@mail.com", "1997-04-25", 85));
dbStudent.push(new Student("Andrew", "and@mail.com", "1998-11-12", 65));
dbStudent.push(new Student("Zafran", "zaf@mail.com", "1992-02-01", 80));
dbStudent.push(new Student("Budi", "budi@mail.com", "1996-11-11", 75));
console.log(dbStudent);

let calculateStudent = (arr) => {
  let scrTotal = 0,
    ageTotal = 0;
  let scores = [...arr.sort((a, b) => a.score - b.score)]; //kalau ...arr ini pake spread operator,,,, (a, b) => a.score - b.score) ini cbfn
  let ages = [...arr.sort((a, b) => a.age - b.age)];

  for (let i = 0; i < arr.length; i++) {
    scrTotal += arr[i].score;
    ageTotal += arr[i].age;
  }
  return {
    score: {
      highest: scores[arr.length - 1],
      lowest: scores[0],
      average: scrTotal / scores.length,
    },
    age: {
      highest: ages[arr.length - 1],
      lowest: ages[0],
      average: ageTotal / arr.length,
    },
  };
};
console.log(calculateStudent(dbStudent));

// Exercise 2
/*  //tipe data yg diinginkan itu objek
● Create a program to create transaction
● Product Class
    ○ Properties    
        ■ Name
        ■ Price
● Transaction Class
    ○ Properties (ada 2 total dan produk(keranjang))
        ■ Total
        ■ Product
            ● All product data
            ● Qty  //jumlah barang yang dibeli

            //ada 3 function dalem object (bentuknya function itu method)
○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data
*/

class Product {
  constructor(_name, _price) {
    //blueprint dr data produknya
    this.name = _name;
    this.price = _price;
  }
}

let dbProduct = [
  //buat tau di database punya produk apa aja var tambahan ga disebut disoal tp bantuin jalanin fungsinya , var khusus untuk menyimpan seluruh list produk
  new Product("Apel", 5000),
  new Product("Lemon", 10000),
];

class Transaction {
  constructor() {
    this.cart = []; //property cart biar ga bingung data keranjang konteks transaksi brarti data" produk yang dimasukkan keranjang
    this.total = 0; //total itu buat semuanya seluruh harga produk yang ada
  }

  addToCart = (product = null, qty = 1) => {
    //null krn yg mau disimpen objek, jd null bkn '' ini buat string, krn null buat nyimpen objek
    let amount = 0;
    this.cart.push({
      product: { ...product, qty }, //yg di push dlm bentuk objek, pake spread operator
      subTotal: qty * product?.price, //tanda ? itu untuk mengetahui pd kelas produk apakah ada properti price ato engga harga per produk
    });

    this.cart.forEach((val) => (amount += val.subTotal)); //cbfn pake anonymous function (fungsi gapunya nama)
    this.total = amount;
  };

  //(method) Array<any>.forEach(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void

  show = () => {
    return "Your total transaction Rp." + this.total.toLocaleString("id");
  }; //() krn g butuh data dr luar, dia ambil datanya lsg dr classnya dr properti yg udah ada, butuh parameter untuk ambil data diluar class mknya show ama class g butuh parameter, msi dlm class yg sama datanya yg mau diolah. kalau addToCart kan butuh data dr luar jd ad parameter

  //klo map bentuknya array harus pake join biar berubah jd string

  checkout = () => {
    let print = "";
    this.cart.forEach((val, idx) => {
      print += `${idx + 1}. ${
        val.product.name
      }, ${val.product.price.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
      })}, Qty: ${val.product.qty}, ${val.subTotal.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
      })}\n`; //val. buat nyetak objek .product .name yg apel
    }); //mau langsung val.name val.price val.qty jg bisa
    print += `Total payment : ${this.total.toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    })}`;
    //tolocalestring kenapa hrs ubah angka jd string? biar bisa format harganya lsg angka mentah nya doang klo number
    this.cart = []; //tiap kali check out keranjang nya dikosongin
    return print;
  };
}
let transaction = new Transaction();
console.log(dbProduct);
transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 2);
console.log(transaction.show());
transaction.addToCart(dbProduct[1], 3);
console.log(transaction.show());
console.log(transaction.checkout());
