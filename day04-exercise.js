// Exercise Day-04

// Question 1 (ini latihan nested looping ini/looping bersarang)
//Create a FUNCTION that can create a triangle pattern according to the height we provide like the following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

//pseudocode
//1. get value from parameter
//2. bikin function
//3. dalemnya iteration looping (for loop) tapi dibedain paragrafnya (new line pake \n)
//4. kayannya tiap loop kalo dah lebih gede 1 aja dari yg atas dibikin new line (pake if else)
//5. return string variable (output) =>return print;

//tujuan exercise itu review materi dan nerapin materi, usahain dari pengerjaan sendiri pemahaman materi sendiri

const heightQ1 = 5; //limit seharusnya output 5 baris
function Triangle(height) {
  //   console.log(height); => gausa
  let value = 1; //buat bikin angka urutnya
  let result = "";
  //nampung jawaban string
  //[i] itu buat array aja
  for (let i = 0; i < height; i++) {
    // console.log(result);
    for (let j = 0; j <= i; j++) {
      // result += value++ + " ";
      // console.log(result);
      if (value > 9) {
        result += value++ + " ";
        console.log(result);
      } else {
        result += "0" + value++ + " ";
        console.log(result);
      }
      //   result += "\n"; //ini salah
    }
    result += "\n"; //pindah new line nya untuk kedua loop stelah 2"nya slese
  }

  return result;
}

let heightAQ1 = Triangle(5); //atauheightQ1
console.log(heightAQ1);

//Question 2
// ● Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping

//pseudocode
//1. get value from parameter
//2. bikin function dec
//3. dalemnya iteration looping (for loop)
//4. dalem loopnya ada if elseif else deh kalo 3 jadi fizz kalo 5 jadi buzz, trus 3*5 = 15 jadi fizzbuzz
//5. return string variable (output) =>return print;

let Fizzy = 15;
function fizzPop(f) {
  let result = "";
  for (let i = 1; i <= f; i++) {
    //i jangan mulai dr 0 karena 0 == 0 pasti akan kebaca maka fizzbuzz jd result dr 0

    if (i % 15 == 0) { //15 duluan krn dia klo di 15 ga stop klo kebagi 3 atau kebagi 5
      result += "FizzBuzz" + " ";
      console.log(result);
    } else if (i % 5 == 0) {
      result += "Buzz" + " ";
      console.log(result);
    } else if (i % 3 == 0) {
      result += "Fizz" + " ";
      console.log(result);
    } else {
      result += i + " ";
      console.log(result);
    }
  }
  return result;
}
// console.log(Fizzy);
let FizRes = fizzPop(15);
console.log(FizRes);


//kalau ternary agak ga guna krn ribet ada else if else if

//ati" kalau javascript out of memory itu infinite loop

//Question 3
// ● Create a FUNCTION to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● PARAMETERS : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

//pseudocode
//1. get value from parameter
//2. bikin function
//3. height sama weight dibikin rumus bmi dlu dlm function
//4. ini pake if else if functionnya buat bmi dgn hierarki bmi tergede ke kecil
//5. return string variable (output) =>return print;

function yourBMI(weight, height) {
  let bmi = weight / (height ** 2);
  console.log(bmi);
  if (bmi > 39.9) {
    message = "obesity";
    console.log(message);
  } else if (bmi >= 30.0) {
    message = "very overweight";
    console.log(message);
  } else if (bmi >= 25.0) {
    message = "overweight";
    console.log(message);
  } else if (bmi >= 18.5) {
    message = "ideal";
    console.log(message);
  } else if (bmi < 18.5) {
    message = "less weight";
    console.log(message);
  }
  return message;
}

let myBMI = yourBMI(70, 1.57);
console.log("you are " + myBMI);

//Question 4 => belum bentuk function
//● Write a FUNCTION to REMOVE all ODD numbers in an array and RETURN a NEW ARRAY that contains
// even numbers only

//pseudocode
//1. get value from parameter
//2. bikin function
//3. bikin iteration (looping) dimn kalau nemu odd number dia ilangin (if else)
//   harus looping 2 kali deh biar dia klo uda nemu yg odd dia ngulang dr awal lg nyari yg odd buat diilangin lagi
//4. blom ilang koma paling ujung kanan nya, pake if else
//5. harus dijadiin bentuk array lagi? dr awal result[] apa Array.from()
//6. return array variable (output) =>return print;


let boxAngka = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];
function oddRemover(num) {
  let result = "";
  // let TempArr = [];
  //i j 0 krn array diitung dr 0
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[j] % 2 === 1) {
        result += num.splice(j, 1);
        //dia nemu yg dibagi 2 sisa 1 di posisi j akan remove 1
        //javascript function to remove element from array
        console.log(result);
        if (i == num.length - 1) {
          result = num; //biar plg ujung gaada koma
        } else {
          result = num + ", ";
        }
        break;
    }
  }
}
// TempArr.push(result);
return result;
}
let boxRemoved = oddRemover(boxAngka);
console.log(boxRemoved.length);
console.log(boxRemoved);
console.log(typeof boxRemoved); //array bentuknya
// console.log(oddRemover([31,32,33,34,35,36,37,38,39,40]))
//otomatis hasil jd bentuk array krn if elsenya buat array yg num.length - 1 (for last array element)


//cara nomor 4 yang paling enak
let boxAngka1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

function removeOdd(num){
  for(let i = 0; i < num.length; i++){
    if(num[i] % 2){ //why? klo 0 otomatis false lsg return g masuk  if, klo g sama dengan 0 masuk true
    num.splice(i, 1);//di index ke 0 remove 1 (jumlah data yg dihapus)
    //gausah pake result" gitu let result =""/ result +=...
    console.log(num);
    }
  }
  return num;
}
let boxRemoved1 = removeOdd(boxAngka1);
console.log(boxRemoved1);
console.log(boxRemoved1.length);
console.log(typeof boxRemoved);

//cara lain pake built in method filter
let boxAngka2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];
function OddREMOVER(num){
  console.log(num % 2 == 0);
  return num % 2 == 0;  
}
let genapAja = boxAngka2.filter(OddREMOVER); //.filter = Returns the elements of an array that meet the condition specified in a callback function.
console.log(genapAja);

// let cobaGenap = OddREMOVER(boxAngka2);
// console.log(cobaGenap); //gabisa


//Question 5
// ● Write a FUNCTION to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

//pseudocode
//1. get value from parameter
//2. bikin function (mau ubah string ke array)
//3. bikin iteration (looping) dimn kalau nemu spasi harus dipisahin jd array pake if else
//4. harus dijadiin bentuk array
//5. return array variable (output) =>return print;

//str for string!
let sentenceQ5 = "Sun Goes Down";
function Arraysplitmaker(str) {
  let result = "";
  let TempArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") { //charAt() method returns the character at a specified index (position) in a string.
      TempArr.push(result);
      result = "";//nampung hasil looping, kosongin untuk hasil selanjutnya
      console.log(result);
      continue;//biar kalau ad spasi dia longkapin trs nerusin loopnya
    }
    result += str.charAt(i); //pisahin tiap kata sun goes down
  }
  TempArr.push(result);
  return TempArr; //krn td result di push masuk ke TempArr
}

let sentenceAQ5 = Arraysplitmaker(sentenceQ5);
console.log(sentenceAQ5);
