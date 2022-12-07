// Exercise Day-01

//Question 1 Write a code to find area of rectangle.
const length = 8;
width = 6;
areaOfRectangle = length * width;
console.log("The area of rectangle is : " +areaOfRectangle);

//Question 2 Write a code to find perimeter of rectangle.
perimeterOfRectangle = 2 * (length + width);
console.log("The perimeter of rectangle is : " + perimeterOfRectangle);

//Let length sama width gabole disebut lagi krn eror

//Question 3 Write a code to find diameter, circumference and area of a circle.
const pi = 3.14;
radius = 5;
diameter = 2 * radius;
circumferenceOfCircle = pi * diameter;
areaOfCircle = pi * (radius ** 2);
console.log("Diameter of the circle is : " + diameter);
console.log("Circumference of the circle is : " + circumferenceOfCircle);
console.log("Area of the circle is : " + areaOfCircle);

//Question 4 Write a code to find angles of triangle if two angles are given
const angleA = 30;
angleB = 70;
angleC = 180 - (angleA + angleB);
console.log("Angle C of the triangle is : " + angleC + "°");

//Question 5 Write a code to get difference between dates in days.
const holiday = new Date("2022-12-14");
const work = new Date("2023-01-15");
const myHoliday = work - holiday;
console.log("The difference between dates : " + myHoliday/(1000 * 60 * 60 * 24) + " days");
console.log(myHoliday);
//2764800000 ini millisecond
//karena hasil yang ditampilin itu millisecond makanya harus dibagi yg 100 * 3600 * 24 ini 
//1000 millisecond 60 detik 60 menit (3600 detik-menit for short) 24 jam


// Question 6 Write a code to convert days to years, months and days.
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ 1 year : 365 days, 1 month : 30 days

const bootcamp = 777; //days
bcYear = bootcamp / 365;
console.log(bcYear);
//2.12 tahun
sisaDays = bootcamp % 365;
console.log(sisaDays);
//dari 2 tahun sisanya 47 hari
bcMonth = sisaDays / 30;
console.log(bcMonth);
//1.56 bulan
sisaDays2 = sisaDays % 30;
console.log(sisaDays2);
//dari 1 bulan sisanya 17 hari

console.log(bcYear.toPrecision(1) + " years, " + bcMonth.toPrecision(1) + " months, " + sisaDays2.toPrecision(2) + " days");
//jangan pakai toPrecision! dia masa buletin month 1.56 ke 2 bulan
//bisa math.round (buletin sesuai klo 5 keatas 4 kebawah) atau math.floor (buletin kebawah) buat ngebuletin desimal

console.log(Math.round(bcYear) + " years, " + Math.round(bcMonth) + " months, " + Math.round(sisaDays2) + " days");

console.log(Math.floor(bcYear) + " years, " + Math.floor(bcMonth) + " months, " + Math.floor(sisaDays2) + " days");
//paling benar untuk kasus ini pakai Math.floor 

