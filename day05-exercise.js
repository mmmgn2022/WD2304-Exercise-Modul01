// ● Question 1
// Write a function to get the lowest, highest and average value in the array (with and without sort
// function).

let numbersForQ1 = [12, 6, 35, 70, 28, 51, 40];

//cara WITHOUT SORT
function withoutSort(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let average = 0;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        average = sum / arr.length; //jangan tulis const average
    }
    return ["max : " + max,"min : " + min,"average : " + average.toPrecision(4)];
}
console.log(withoutSort(numbersForQ1));

//cara WITH SORT
function withSort(arr) {
  let min = ""; //jgn const
  let max = ""; //jgn const
  let average = 0; //jgn const 
  let sum = 0; //jgn const krn mau dijumlahin jd 0 pas dilooping dia akan jumlahin (pas nge loop)
  arr.sort((a, b) => a - b); //baca di dokumentasi ini selection sort untuk ascending dan descending
  //arr.sort() kalo gini doang dia ambil angka awalnya doang 
  //dia uda otomatis ascending
  console.log(arr);
  min = arr[0];
  max = arr[arr.length - 1]; //di -1 krn index array mulai dari 0 jd index ke 6 itu yang max
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    average = sum / arr.length;
  }
  return ["max : " + max,"min : " + min,"average : " + average.toPrecision(4)];
}

console.log(withSort(numbersForQ1));


console.log(
    numbersForQ1.sort(function (a, b) {
      return a - b;
    })
  );


// ● Question 2
// Write a function that takes an array of words and returns a string by concatenating the words in
// the array, separated by commas and - the last word - by an 'and'.
//manfaatin looping

//kalo kata terakhir pake and jangan pake koma

let wordsForQ2 = ["Hiu", "Paus", "Ikan Pari", "Belut"];
function stringMaker(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    console.log(result);
    if(i == arr.length - 1) { //yg paling belakang
      result += "and " + arr[i];
    } else if(i == arr.length - 2) {
      result += arr[i] + " ";
    }  else {
      result += arr[i] + ", ";
      // return result; //jangan disini cuma bakal kluar output index pertama (index ke 0) si hiu
    }
  } 
  return result;
}

console.log(stringMaker(wordsForQ2));

// ● Question 4
// Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length.
// ○ Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
//jika salah satu array lebih dari yang lain, akalin bgmn caranya output tidak NaN namun 0 + angka di array yang lebih itu
let numbersForQ4a = [1, 2, 1, 2, 1, 2, 3, 10];
let numbersForQ4b = [4, 4, 4, 4, 4, 4];
function arraySum(arr1, arr2) {
  let result = [];

  let length = arr1.length > arr2.length ? arr1.length : arr2.length; //kalau length arr 1 > length arr 2 maka output arr1.length
  for (let i = 0; i < length; i++) {
    result.push((arr1[i] || 0) + (arr2[i] || 0)); 
  } 
  return result;
}
console.log(arraySum(numbersForQ4a, numbersForQ4b));


// ● Question 5
// Write a function that adds an element to the end of an array. However, the element should only
// be added if it is not already in the array.

let newItem = "dog";
let arrayForQ5 = ["cat", "dog", "hamster", "iguana", "marmot", "sugar glider"];
function arrayAdd(arr, str){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(str) === -1){
      arr.push(str);
    } else {
      console.log("existing item");
      break;
    }
  }
  return arr;
}
console.log(arrayAdd(arrayForQ5, newItem));