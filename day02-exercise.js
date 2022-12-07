// Exercise Day-02

//Question 1 Write a code to convert celsius to fahrenheit.
const CWeather = 36;
FWeather = (9 / 5 * CWeather) + 32;
console.log("The weather in fahrenheit is : " + FWeather + " Fahrenheit");

//Question 2 Write a code to check whether the number is odd or even.
const mynumber = 36;
const mynumber2 = mynumber % 2;
console.log(mynumber2);
if(mynumber2 === 0) {
    console.log(mynumber2 + " is an even number");
} else {
    console.log(mynumber2 + " is an odd number");
    //The modulus of any odd number divided by 2 is 1
}
//iya ini salah karena mynumber 36 tapi hasil odd kalau mynumber2 = 0 krn dia kira boolean tp klo === 0 dia benerr krn value n tipe data hrs sama yaitu angka 0 

//Question 3 Write a code to check whether the number is prime number or not.
//How do you know a prime number? If a number has only two factors 1 and itself, then the number is prime.

const thisnumber = 17;
if(thisnumber === 1) {
    console.log(thisnumber + " is not a prime number");
} else if (thisnumber > 1) {
    for (let i = 2; i < thisnumber; i++) {
        if (thisnumber % i == 0) {
            ////The condition number % i == 0 checks if the number is divisible by numbers other than 1 and itself.
            console.log(thisnumber + " is not a prime number");
            break;
        } else {
            console.log(thisnumber + " is a prime number");
            break;
            // kalau ini ga di break dia ngeloop terus is a prime number to infinity
        }
    }
} else {
    console.log("invalid");
}


//Question 4 Write a code to find the sum of the numbers 1 to N.
//sebenernya ada rumus gampang dan cepetnya yaitu (n * (n + 1)) / 2
//ini rumus bawah buat blajar looping, so its better
const n = 5;
let sumi = 0;
//i local scope gbs kepengaruh yg luar
//var sumi gbs const krn const statis
for (let i = 1; i <= n; i++) {
    sumi = sumi + i;
    console.log(sumi);
    //0+1, 1+2, 3+3, 6+4, 10+5
}
console.log("The sum of the numbers 1 to 5 is : " + sumi);

//Question 5 Write a code to find factorial of a number.
let fact = 1;
//var fact gbs const krn const statis
const number7 = 7;
for (i = 1; i <= number7; i++) {
    fact *= i; //same as fact * i
    console.log(fact);
    //1*1, 1*2, 2*3, 6*4, 24*5, 120*6, 720*7
}
console.log(fact);
//7*6*5*4*3*2*1

//Question 6 Write a code to print the first N fibonacci numbers.
// The Fibonacci sequence, also known as Fibonacci numbers, is defined as the sequence of numbers in which each number in the sequence is equal to the sum of two numbers before it
let n1 = 0,  n2 = 1;
//n1 n2 harus let gbole const krn const statis
const numFibonacci = 5;
for (i = 0; i < numFibonacci; i++) {
    let next_number = n1 + n2; // 0 + 1
    console.log(n1);
    n1 = n2; // n1 = 1
    n2 = next_number; //n2 = 1 + 1
    // console.log(n1);
    // , ini cuma dr quokka sebenernya ga muncul

}  
console.log("The first " + numFibonacci + " fibonacci number is : " + n1);

