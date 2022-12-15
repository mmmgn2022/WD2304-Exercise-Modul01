//1. ● Create a function to check if two objects are equal

//mau ngecek kalo propertinya sama atau engga, value beda gppa
/*
pseudocode:
1. bikin function declaration
2. tp ktanya pake Object.keys()
3. JSON.stringify(k1) === JSON.stringify(k2) buat jdiin string (//objek gbs dibandingin sama objek hrs bentuk string dlu, krn yg mau dibandingin parameter nya aja)
4. trus bikin if else equal or not equal

*/
const k1 = {
  color: "red", //ini juga dibolak balik gbs detect, harus di sort dulu katanya biar ascending parameter sama smua gak bolak balik
  basket: 10,
  fruit: "apple",
  main: "putih",
};
const k2 = {
  color: "orange",
  keranjang: 10,
  fruit: "orange",
  main: "hitam",
};

var equalObject = function (obj1, obj2) {
  let A1 = Object.keys(obj1).sort(); //untuk jd alphabetical order sort() aja, jika ada cbfn pake localcompare untuk sorting string dia bakal urutin berdasarkan ascii
  let A2 = Object.keys(obj2).sort();
  console.log(A1);
  console.log(A2);
  if (JSON.stringify(A1) === JSON.stringify(A2)) {
    //Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    console.log("Two objects are equal");
    return "Two objects are equal";
  } else {
    console.log("Two objects are not equal");
    return "Two objects are not equal";
  }
  return result;
};
console.log(equalObject(k1, k2));

// 2.
// ● Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

//untuk nomor 2 , properti dan value itu harus sama
const b1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 2,
};
const b2 = {
  a: 1,
  b: 3,
  c: 1,
  d: 2,
};

var intersection = function (obj1, obj2) {
  let result = {}; //sbg penampung krsn diharapkan objek hasilnya
  for (let key in obj1) {
    //key mewakili properti , looping objek ga melihat urutan jd tidak perlu di sorting
    console.log(key);
    console.log(obj1[key]); //pake [] krn nama properti nya dalam bentuk string, memang hrs kurung siku, kalau pakai . nanti
    console.log(obj1);
    if (obj1[key] === obj2[key]) {
      result[key] = obj1[key]; // gak += krn kita gamau nimpa hasilnya tp mau show aja hasilnya
    } //menambahkan objek secara langsung
  }
  return result;
};
console.log(intersection(b1, b2));

// 3.
// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]

//gbungin 2 array dan remove duplikat

let array1 = [
  { name: "Student 1", email: "student1@mail.com" }, //index 0 = student 1, 1 = student 2, 2 = student 1
  { name: "Student 2", email: "student2@mail.com" },
];
let array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

const remove = (data1, data2) => {
  const gabung = data1.concat(data2); //data yang mau diproses ada 2 jadi untuk menggabungkan bisa pake spread operator atau concat
  let result = []; //[]kosong untuk menampung array hasil
  for (let i = 0; i < gabung.length; i++) {
    let newArr = result.filter((val) => {
      //tiap kali looping akan dibandingkan dengan value data temp supaya mencegah terjadinya duplikasi. conditional statementnya berdasarkan value dicompare dgn var gabung
      //filter untuk menghasilkan array baru sesuai kondisi
      return val.name == gabung[i].name; //compare dgn property.name krn ingin mencari data yang unique
    }); //jd tuh return false makanya [] kosong di console.log(newArr), pake == krn dia mau membandingkan datanya sama

    console.log(newArr); //yang index ke 2 returnnya true tp tidak memenuhi if condition dibawahnya maka ga dipush ke var temp [] (result)
    if (newArr.length == 0) {
      //untuk cek apakah newArr ada isinya apa tidak newArr.length == 0, jika gaada akan dipush ke var temp yang kosong [] ini
      result.push(gabung[i]);
      console.log(gabung[i]);
    }
    // return result; salah return bukan disini
  }
  return result;
};

console.log(remove(array1, array2));

//4.
// ● Create a function that can accept input as an array of objects and switch all values into
// property and property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

//konsep hampir sama dengan nomor 2
//nambahin for loop / forEach untuk mengakses key dalam bentuk string

//kalau isinya bisa lsg dibandingin tanpa hrs dijadiin string
//dia cuma munculin yang sama aja outputnya
/* pseudocode:
1. bikin function declaration
2. for loop/foreach
3. for of buat objek
*/

//klo ad 2 buah array, salah satu hrs menjadi acuan
//string dijadiin property dan sebaliknya

let input = [
  { name: "David", age: 20 },
  { name: "Gabriel", age: 21 },
];
//expected output : [{David : "name"; 20 : "Age"}]
console.log(input[0]["age"]);

const switch1 = function (array) {
  let output = [];
  // let temp = {};

  for (let i = 0; i < input.length; i++) {
    let temp = {}; // supaya arraynya beda
    for (var keys in array[i]) {
      keys; //manggil doang
      console.log(keys);
      console.log(array[i][keys]);
      let newProp = array[i][keys]; //krn data nya string pake [keys], kalo number baru array[i].keys (mas abdi )
      temp[newProp] = keys;
      console.log(temp);
    }
    output.push(temp); //biar masuk array
  }
  // output.push(temp);
  return output;
};
console.log(switch1(input));
