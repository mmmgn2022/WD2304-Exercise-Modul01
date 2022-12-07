// Exercise Day-03

// Question 1 Write a code to display the multiplication table of a given integer (number).
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

const numMulti = 5;
for (i = 1; i <= numMulti; i++) {
    numMultiTable = numMulti + " x " + i;
    const hasil = i * numMulti;
    console.log(numMultiTable + " = " + hasil);
}

// Question 2 Write a code to check whether a string is a palindrome or not.
/*How do you check whether a string is palindrome or not using for loop?
During the for loop execution, we check whether the nth index value from the front matches the nth index value from the back. 
Now, if it DOES NOT match, the string is NOT a palindrome. Otherwise, the string is a palindrome*/
//contoh penyelesaian pakai loop
const worD = "MAMAM";
const Palin = worD.length;  //panjang nama string var MAMAM panjang stringnya 5
for (let i = 0; i < Palin / 2; i++) {
    console.log(Palin); //WORD LENGTH 5
    //kenapa i itu 0? krn mulai dr 0;  01234 MAMAM nya
    //kenapa harus dibagi 2? aku lupa ====

    // check if first and last string are same
    //!== strict inequality
    if (worD[i] !== worD[Palin - 1 - i]) {
        console.log(worD + " is not a palindrome");
        break;
    } else {
        console.log(worD + " is a palindrome");
        break; // As long as the characters from each part match, the FOR loop will go on
        //makanya di break
    }   
}
//!== itu strict not equal
/* Here Palin / 2 = 5
      For each iteration: i = ?    i < Palin/2   i++   if(str[i] !== str[len - 1 - i])?
      1st iteration:        0        yes         1     if(str[0] !== str[5 - 1 - 0])? => if("M"  !==  "M")? // false
      2nd iteration:        1        yes         2     if(str[1] !== str[5 - 1 - 1])? => if("A"  !==  "A")? // false      
      3rd iteration:        2        yes         3     if(str[2] !== str[5 - 1 - 2])? => if("M"  !==  "M")? // false  
      4th iteration:        3        yes         4     if(str[3] !== str[5 - 1 - 3])? => if("A"  !==  "A")? // false  
      5th iteration:        4        yes         5     if(str[4] !== str[5 - 1 - 4])? => if("M"  !==  "M")? // false
      6th iteration:        5        no               
    End of the FOR Loop*/


//contoh penyelesaian pakai built in method array (reverse split join)
let kata = 'madam';
let reverseString = kata.split("").reverse().join("");
//dipisah"in dulu pake split m a d a m trus di reverse m a d a m lalu digabungin lagi jd madam?
console.log(reverseString);
if (kata === reverseString){
    console.log(kata + ' is a palindrome');
} else {
    console.log(kata + ' is not a palindrome');
};

//Question 3 Write a code to convert centimeter to kilometer.
let centimeter = 3;
kilometer = centimeter * 10 ** -5; // cm * 10^-5
console.log("3 centimeters converted into kilometers is : " + kilometer + " km");

//Question 4 Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
let uang = 1000.00;
uang = uang.toFixed(2).replace(".", ","); //kalau .replace lagi bisa ternyata
console.log("Rp. " + uang);
//untuk 1.000,00 katanya build in method pasti bisa tp blm aja


//atau cara lainnya ada built in method;

//ada syntaxnya langsung yang hasilin ini rupiah formatnya, hover ke NumberFormat buat liat details
const harga = 1000;
let rupiah = new Intl.NumberFormat('id-IN', {
    style : "currency",
    currency : "IDR"
});
console.log(rupiah.format(harga));


rupiah = harga.toLocaleString('id-IN', {
    style : "currency",
    currency : "IDR"
});
console.log(rupiah);

//Question 5 Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
//cara 1:
//ini smua const ga ngefek
const str1 = "hello world hello world";
const firstOccurence = "ell";
const result12 = str1.replace(firstOccurence, "");
console.log(result12);

//cara 2:
let mynameis = "marceline megan marceline megan";
const REMOVE = mynameis.replace("rceline", "");
console.log(REMOVE);

//Question 6 Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
let kalimat1 = "if you believe it you can do it !";
let kataSplit = kalimat1.split(" "); 
// di ubah ke array dulu (menghilangkan spasi dan diubah ke koma)
console.log(kataSplit);  

for (let i = 0; i < kataSplit.length; i++) {
    //i = 0 itu IF , 1 itu YOU, 2 itu CAN, 3 itu DO
    console.log(kataSplit[i],kataSplit[i][0], i);
    // hanya index ke 0 dari kata yang di ubah ke huruf besar + ambil kata dari index 1 sampir akhir
    kataSplit[i] = kataSplit[i][0].toUpperCase() + kataSplit[i].slice(1); 
    //yg pertama itu huruf besarnya + huruf belakang"nya
}

//join = mengubah isi array ke bentuk string
console.log(kataSplit.join(" ")); 

//Question 7 Write a code to reverse a string
let str3 = "give my best";
let temp = "";
console.log(str3.length);
//5 itu jumlah string, klo index yg 0 1 2 3 4
for (let i = 0; i < str3.length; i++) {

    //kalau ga salah i = 0 ini "g", trus dikurangin 1 krn ada 12 "give my best" itu (01234)
    console.log(str3[str3.length - i - 1]);
    //dibolak balik - i - 1 sama aja
    console.log(str3.length - 1 - i);
    console.log(str3[str3.length - 1 - i], str3.length - 1 - i);
    temp += str3[str3.length - 1 - i];
    //hrs pake [] krn ini functionnya
    //coba pake phytontutor juga tp disini bisa liat tampilan looping jg sih
}
console.log(str3 + " if reversed becomes " + temp);

//bisa cara ini juga lebih cepet
let str4 = "i believe i can";
let reverseString1 = str4.split("").reverse().join(""); 
// split = membagi string ke dalam array, reverse = membalikkan index dari depan ke belakang, join = menggabungkan isi array menjadi string.

console.log(str4 + " if reversed becomes " + reverseString1);