//CHAPTER 1
//TASK 1:

/* alert("Welcome To My Web"); */

//TASK 2:
/* alert("Error! Please enter a Valid password"); */

//TASK 3:
/* alert("Welcome to JS land...\nHappy Coding"); */

//TASK 4:
/* alert("Welcome to JS land...");
alert("Happy coding!") */

//TASK 5:
/* alert("Hello...I can run JS through my web browser's console") */


//CHAPTER 2:
//TASK 1:
/* var username;

//TASK 2:
var myNmae="Faizan Khan";
 
//TASK 3:
var message;
message="Hello world";
alert(message); */

//TASK 4:
/* var stuName="Bilal Khan"
var stAge="18 years old"
var stQua="Intermediate"

alert(stuName)
alert(stAge)
alert(stQua) */


//TASK 5
/* var food="PIZZA"
alert(food +"\n"+food.slice(0,4)+"\n"+food.slice(0,3)+"\n"+food.slice(0,2)+"\n"+food.slice(0,1)) */

//TASK 6
/* var email="khan_faizan59@yahoo.com"
alert("My email address is "+email) */



//TASK 7:
/* var book="A smarter way to learn JavaScript"
alert("I am trying to learn from book "+book) */

//TASK 8:
/* document.write("Yah! I can write HTML content through Javascript") */
//TASK 9:
/* alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬") */


//CHAPTER 3:
//TASK 2:
//how to track user's 
//I think not possible to make this with basic logic



//TASK 1:
/* var age=20;
alert("I am "+age+" years old") */

//TASK 3:
/* var birthYear=2000
document.write("My birth year is "+birthYear+"<br>")
document.write("Data type of my declared variable is number") */

//TASK 4:
/* var visName=prompt("Enter Your Name:")
var prod=prompt("Which Product You Want To Order:")
var quan=+prompt("How Many You Want")

document.write(visName+" ordered "+quan+" "+prod+" on F.K Collections") */

//CHAPTER 4:
//TASK 1:
/* var name="faizan",age=16,qual="Intermediate";  // 3 var in one staement
console.log(name+" is "+age+" years old and its qualification is "+qual) */

//TASK 2:
//Valid variables:

/* var π = Math.PI;


var $name="faizan";

var f_name= "Ali";


var λ = function() {};


var name2 = 'Khan';

//Not Valid:
var 1a=4; //num in start not allowed

var .a=5;  //Not allowed any symbol in start excep $ or _

var first name="faizan" //space not allowed

var first%name="faizan"

var true='ali'; // no keyword allowed as a variable name */

//TASK 3:
/* document.write("<h1>Rules For naming JS variables</h1>"+"<br>")
document.write("Variables names contain only numbers,& and _. for example $my_firstvariable"+"<br>")
document.write("Variable must begin with a letter. $ or _.For example: $name, _name or name"+"<br>")
document.write("Variable names are case sensitive"+"<br>")
document.write("Variable name should not be JS keywords") */






//CHAPTER 5:
//TASK 1 & 2:
 /* var num1=+prompt("Enter 1st number:")
 var opr=prompt("Enter The Operator")
var num2=+prompt("Enter 2nd number:")
var res;

if(opr==='+'){
   res=num1+num2;
   document.write("Sum of "+num1+" & "+num2+" is "+res); 
}
else if(opr==='-'){
    res=num1-num2;
    document.write("Subtraction of "+num1+" & "+num2+" is "+res); 
 }
 else if(opr==='*'){
    res=num1*num2;
    document.write("Multiplication of "+num1+" & "+num2+" is "+res); 
 }
 else if(opr==='/'){
    res=num1/num2;
    document.write("Division of "+num1+" & "+num2+" is "+res); 
 }
 else if(opr==='%'){
    res=num1%num2;
    document.write("Modulus of "+num1+" & "+num2+" is "+res); 
 } */

 //TASK 3
/*  var value=+prompt("Enter a Value in integer:")
 document.write("Value is "+value+"<br>")
 value++;
 document.write("Value after increament is "+value+"<br>")
 value=value+7;
 document.write("Value after addition is "+value+"<br>")
 value--;
 document.write("Value after decreament is "+value+"<br>")
 value=value%3;
 document.write("The remainder is "+value+"<br>") */

 //TASK 4:
 /* var ticket=600;
 var quan=+prompt("How many tickets you want:")

var prize=quan*600;
document.write("Total cost to buy "+quan+" tickets to movie is "+prize+"PKR") */

//TASK 5:
/* var table=+prompt("Enter the table no you want to generate:")
document.write("Table of "+table+"<br>")
for(var i=1;i<=10;i++){
    document.write(table+" x "+i+" = "+table*i+"<br>")
} */

//TASK 6:
/* var cel=+prompt("Enter Temperature in Celsius")
var far=(cel*9/5)+32
document.write(cel+"°C is "+far+"°F"); */

/* var far1=+prompt("Enter Temperature in Fahrenheit")
var cel1=(far1-32)*5/9
document.write(far1+"°F is "+cel1+"°C"); */

//TASK 7:
/* alert("If you are not buying some item press 0 when asking quantity:\n1:item1=650pkr\n2:item2=100pkr")

var i;
var choice;
var shippingcharges=100
var Total=0;
var item1=650
var item2=100
var quan=+prompt("Enter quantity of item1");
var quan1=+prompt("Enter quantity of item2");

Total=shippingcharges+(item1*quan)+(item2*quan1);
document.write("Your total bill is: "+Total) */


//TASK 8:
/* var totalMarks=980
var marksObt=785
var per=(785/980)*100
document.write("Total Marks= "+totalMarks)
document.write("<br>")
document.write("Obtained Marks= "+marksObt)
document.write("<br>")
document.write("Percentage= "+per+"%") */

//TASK 9:
/* var doll=+prompt("How many dollar you have")
var sauRiyal=+prompt("How many saudiriyal you have")
var pkr=(doll*104.80)+(sauRiyal*28);
document.write("Total currency in PKR "+pkr) */


//TASK 10:
/* var no=10
var cal=(no+5)*10/2
document.write("After arithmetic calculation in one expression "+cal) */

//TASK 11
/* var curYear=+prompt("Enter the current year")
var birYear=+prompt("Enter your birth year")
var age=curYear-birYear
document.write("Current year "+curYear)
document.write("Birth ear "+birYear)
document.write("Your age is "+age) */

//TASK 12
/* var radius=+prompt("Enter radius of circle")
var pi=3.142
var circumference=2*pi*radius
var area=pi*radius*radius
document.write("The circumference of circle is "+circumference+"<br>")
document.write("The area of circle is "+area) */

//TASK 13
/*  var favsnack=prompt("Enter your favourite snack")
var curage=+prompt("Enter your current age")
var estAge=+prompt("Enter your estimated maximum age")
var eatS=+prompt("How many snack in a day")
var totaSnack=(((estAge-curage)*364)*eatS)
document.write("Favourite snack= "+favsnack+"<br>")
document.write("Current age= "+curage+"<br>")
document.write("Estimated maximum age= "+favsnack+"<br>")
document.write("You will need "+totaSnack+" "+favsnack+" to last you until ripe of old age "+estAge) */

//CHAPTER 6 TO 9:
//TASK 1
/* var a=+prompt("Enter the number")
document.write("Result"+"<br>" +"The value of a is "+a+"<br>")
document.write("------------------------------------"+"<br>")


document.write("The value of ++a is "+ ++a+"<br>")
document.write("The value of a is "+a+"<br>"+"<br>")


document.write("The value of a++ is "+ a++ +"<br>")
document.write("The value of a is "+a+"<br>"+"<br>")

document.write("The value of --a is "+ --a+"<br>")
document.write("The value of a is "+a+"<br>"+"<br>")

document.write("The value of a-- is "+ a-- +"<br>")
document.write("The value of a is "+a+"<br>") */

//TASK 2
/* var a = 2, b = 1;


document.write("Initially a is "+a+"<br>")  
document.write("Initially b is "+b+"<br>")
var result = --a - --b + ++b + b--;   // 1 - 0 + 1 + 1 = 3
document.write("Result is "+result+"<br>")
document.write("--a = 1 & --b=0 then ++b=1 & b=1"+"<br>")
document.write("How 3 comes : 1 - 0 + 1 + 1 = 3") */

//TASK 3
/* var name =prompt("Enter your name:")
alert("Welcom "+name+" to my page")
 */
//TASK 5
/* var no=+prompt("Enter the number of table:"); //if you not give any it take 0 as input

 if(no>=1&&no<=100){
   for(var i=1;i<=10;i++){
     document.write(no+" x "+i+" = "+no*i+"<br>");
   }
 }    

 else if(no==0){
   for(var i=1;i<=10;i++){
     document.write(5+" x "+i+" = "+5*i+"<br>");
   }
}
 */

//TASK 6:

/* var total=100;
var totalAll=300;
var sub=[];
var size=3;
var marks=[];
var sumTotal=0;

for(var i=0;i<size;i++){
   sub[i]=prompt("Enter Subject "+i+1)
}
for(var i=0;i<size;i++){
   marks[i]=+prompt("Enter marks of subject "+i+1)
}
for(var i=0;i<size;i++){
   document.write("Marks obtained in "+sub[i]+" is "+marks[i]+" and Percentage is "+((marks[i]/total)*100)+"<br>")
   sumTotal+=marks[i];
}
document.write("Total Marks Obtained: "+sumTotal+"<br>")
document.write("Percentage: "+(sumTotal/totalAll)*100) */



//Chapter 9 to 11
//TASK 1:
/* var city=prompt("Enter city:")
city=city.toLowerCase()
if(city==="karachi"){
   alert("Welcome to city of lights")
}*/
//TASK 2

/* var gender=prompt("Enter your Gender")
gender=gender.toLowerCase()
if(gender==="male"){
   alert("Good Morning Sir")
}
if(gender==="female"){
   alert("Good Morning Ma'am")
} */
//TASK 3
/* alert("Input color of traffic signal==>RED,GREEN,YELLOW")
var color=prompt("Enter the color:")
color=color.toLowerCase()
if(color==="red"){
   alert("Must stop")
}
if(color==="yellow"){
   alert("Ready to move")
}
if(color==="green"){
   alert("Move now")
} */

//TASK 4
/* var fuel=+prompt("Enter the remaining fuel in a car")
if(fuel<"0.25"){
   alert("Please refill the fuel in your car")
} */
//TASK 5 
//(a)
/*var a = 4;
 if (++a === 5){       // alert working
alert("given condition for variable a is true");
} */
//(b)
/* var b = 82;  //alert not working coz its post increament
if (b++ === 83){
alert("given condition for variable b is true");
} */
//(c)
/* var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true"); //this alert works
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true"); //this alert works
} */
//(d)
/* var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} */
//(e)
/* if (true){
   alert("True"); //this works
   }
   if (false){
   alert("False");
   } */
//(f)
/* if("car" < "cat"){   //first it will convert in ascii code then sum the ascii codes 
   alert("car is smaller than cat");  // it works as (99+97+114)<(99+97+116)
   } */

   //TASK 6:
   /* var totalM=300;
   var sub1=+prompt("Enter marks of sub1")
   var sub2=+prompt("Enter marks of sub2")
   var sub3=+prompt("Enter marks of sub3")
   var obtM=sub1+sub2+sub3
   var per=(obtM/totalM)*100;
   document.write("Total Marks : "+totalM+"<br>"+"Marks Obtained : "+obtM+"<br>")
   
   if(per>=80){
      document.write("Percentage : "+per+"<br>"+"Grade : A-one "+"<br>"+"Remarks : Exellent")

   }
   else if(per>=70){
      document.write("Percentage : "+per+"<br>"+"Grade : A "+"<br>"+"Remarks : Good")

   }
   else if(per>=60){
      document.write("Percentage : "+per+"<br>"+"Grade : B "+"<br>"+"Remarks : You need to improve")


   }
   else if(per<60){
      document.write("Percentage : "+per+"<br>"+"Grade : Fail "+"<br>"+"Remarks : Sorry")

   } */

   //TASK 7:

   /* function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)); 
    }

   var num=+prompt("Enter any number from 1 to 10")
   var noStore=getRandomInt(9)+1         //getRandomTnt gives any value from 0 to 9 that's why added + 1
   alert(noStore)
  
   if(num===noStore){
      alert("Bingo!Correct answer")
   }
   if(num+1===noStore){
      alert("Close enough to the correct answer")
   }
 */

 //TASK 8:
 /* var num=+prompt("Enter the number")
 if(num%3===0){
    alert(num +" is divisible by 3 ")
 }
 else{
   alert(num +" is not divisible by 3 ")

 } */
//TASL 9:

/* var num=+prompt("ODD Or EVEN PROGRAM\nEnter the number")
if(num%2===0){
   alert(num+" is EVEN")
}
else{
   alert(num+" is ODD")
} */

//TASK 10:
/* var temp=+prompt("Enter the temperature")
if(temp>40){
   alert("It is too hot outside.")
}
if(temp>30){
   alert("The Weather today is Normal.")
}
if(temp>20){
   alert("Today’s Weather is cool.”")
}
if(temp>10){
   alert("OMG! Today’s weather is so Cool.”")
} */
//TASK 11:
/* var num1=+prompt("Enter 1st number:")
 var opr=prompt("Enter The Operator")
var num2=+prompt("Enter 2nd number:")
var res;

if(opr==='+'){
   res=num1+num2;
   document.write("Sum of "+num1+" & "+num2+" is "+res); 
}
else if(opr==='-'){
    res=num1-num2;
    document.write("Subtraction of "+num1+" & "+num2+" is "+res); 
 }
 else if(opr==='*'){
    res=num1*num2;
    document.write("Multiplication of "+num1+" & "+num2+" is "+res); 
 }
 else if(opr==='/'){
    res=num1/num2;
    document.write("Division of "+num1+" & "+num2+" is "+res); 
 }
 else if(opr==='%'){
    res=num1%num2;
    document.write("Modulus of "+num1+" & "+num2+" is "+res); 
 } */

 //CHAPTER 12 T0 13:
 //TASK 1:
 /* var character=prompt("Enter the character")
 if(character>=0&&character<=10){
      alert("Number")
 }
 if(character>='A'&&character<='Z'){
    alert("Uppercaese Letter")
 }
 if(character>='a'&&character<='z'){
   alert("Lowercase Letter")
} */

//TASK 2
/* var num1=+prompt("Enter the number 1")
var num2=+prompt("Enter the number 2")

if(num1>num2){
   alert(num1+" is greatest")
}
if(num2>num1){
   alert(num2+" is greatest")
}
if(num1===num2){
   alert("Both are equal")
} */

//TASK 3:
/* var num=+prompt("Enter the number")

if(num>=1){
   alert(num+" is positive")
}
if(num<0){
   alert(num+" is negative")
}
if(num===0){
   alert(num+" is nutral nor neg neither pos")
} */

//TASK 4:
/* var character=prompt("Enter the character")
if(character==='a'||character==='e'||character==='i'||character==='o'||character==='u'||
character==='A'||character==='E'||character==='I'||character==='O'||character==='U'){
   alert(character+" is a vowel")
}
else{
   alert(character+" is not a vowel")
}
 */
//TASK 5:
/* var password="pubgpro"
var enterPass=prompt("Enter your password")
if(enterPass===""){ // "" this means i enter nothing
   alert("Please enter your password")
}
else if(enterPass===password){
   alert("Correct! The password you entered matches the original password")
}
else{
   alert("Incorrect password")
} */

//CHAPTER 14 TO 16
//TASK 1:
/* var  names=[]; //declairing empty array using js literals
names[1]="faizan"
names[2]="aleena"
document.write(names) */

//TASK 2:
/* var names=new Array();  //declairing empty array using js object
names[1]="faizan"
names[2]="aleena"
document.write(names) */

//TASK 3:
/* var arr=["cat","dog","elephant","tiger"]
document.write(arr) */

//TASK 4:
/* var num=[12,09,67,3,7]
document.write(num) */

//TASK 5:
/* var booleanArr=[true,false]
document.write(booleanArr) */

//TASK 6:
/* var mixedArr=["Faizan",true,'A',12,false]
document.write(mixedArr) */

//TASK 7:
/* var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
document.write("Qualifications :"+"<br>")
for(var i=0;i<qual.length;i++){
   document.write(+(i+1)+") "+qual[i]+"<br>")
} */

//TASK 8:
/* var stu=["faizan","kashan","wasiq"];
var stMarks=[320,230,480];
var total=500
var per=[];
for(var i=0;i<stu.length;i++){
 per[i]=(stMarks[i]/total)*100;
}
for(var i=0;i<stu.length;i++){
   document.write("Score of "+stu[i]+" is "+stMarks[i]+". Percentage : "+per[i]+"<br>")
} */

//TASK 9:
/* var color=["red","green","gray",]
alert(color) */

/* color.unshift(prompt("Enter the color to add at start"))  // to add element at start
alert(color) */

/* color.push(prompt("Enter the color to add at end"))  // to add element at end
alert(color) */

/* color.unshift("brown","white")
alert(color)

color.shift() //to del from start
alert(color)

color.pop() //to del from end
alert(color) */

/* var i=+prompt("In which index you want to add the color") // to add at specific position
color.splice(i,0,prompt("Enter the color"))
alert(color) */

/* var i=+prompt("In which index you want to delete the color") // to del at specific position
var j=+prompt("How many you want to del")
color.splice(i,j)
alert(color)  */

//TASK 10:
/* var stScores = [];
var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	stScores[i] = prompt("Enter the scores "+(i+1))
}
document.write("Before Sort: "+stScores+"<br>")
stScores.sort();     // sort the array
document.write("After sort: "+stScores); */
 
//TASK 11:
/* var cities=["karachi","lahore","islamabad","quetta","peshawar"]
var selectedCities=[];
document.write("Cities array : "+cities+"<br>")
for(var i=0;i<cities.length;i++){
   if(cities[i]==="islamabad"||cities[i]==="quetta"||cities[i]==="karachi"){
      selectedCities[i]=cities[i]; // copy elements in arother array
   } 
}
document.write("Selected Cities array : "+selectedCities) */

//TASK 12:
/* var arr = ["This ", " is ", " my" , " cat"];

document.write("Before using join function : "+arr+"<br>")

var joinArr=arr.join(""); // we have to give any arguments in join
document.write("After using join function : "+joinArr) */

//TASK 13:(FIFO)

/* var arr=[];
var choice;
var flag=0;

   while(true && flag===0){
switch(choice=+prompt("1) Enter value at Start\n2) Delete value from start\n3)Exit\nEnter Choice")) {
   case 1:
      arr.unshift(prompt("Enter the value:")); 
      alert(arr)
      break;
   case 2:
      arr.shift();
      alert(arr)
      break;
   case 3:
      flag=1;
      break;
    
    default:
      alert("Invalid Choice")
 }
} */

//TASK 14: (LIFO)
/* var arr=[];
var choice;
var flag=0;

   while(true && flag===0){
switch(choice=+prompt("1) Enter value at End\n2) Delete value from End\n3)Exit\nEnter Choice")) {
   case 1:
      arr.push(prompt("Enter the value:")); 
      alert(arr)
      break;
   case 2:
      arr.pop();
      alert(arr)
      break;
   case 3:
      flag=1;
      break;
    
    default:
      alert("Invalid Choice")
 }
} */

//TASK 15:
/* var phoneManufactures=["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"]
document.write("Dropdown"+"<br>")
for(var i=0;i<phoneManufactures.length;i++){
   document.write(phoneManufactures[i]+"<br>")
}
 */

//CHAPTER 17 TO 20:
//TASK 1:
/* var mulArray=[
   ["faizan",20,],
   ["kashan",18],
   ["Wasiq",19]
]
document.write(mulArray) */

//TASK 2:
/* var matrix=[
   [0,1,2,3],
   [1,0,1,2],
   [2,1,0,1]
]

for (var i = 0;i < matrix.length; i++) {

   // This loop is for inner-arrays
   for (var j = 0; j < matrix[i].length; j++) {

       // Accessing each elements of inner-array
       document.write(" "+matrix[i][j]); 
   }
   document.write("<br>")
} */

//TASK 3:
/* var i;
for(i=1;i<=10;i++){
   document.write(i+"<br>")
}
 */

 //TASK 4:
 /* var table=+prompt("Enter a number to show its multiplication table")
 var len=+prompt("Enter Length of multiplication table")
 document.write("Multiplication of "+table+"<br>")
 document.write("Length is "+len+"<br>")
 for(var i=1;i<=len;i++){
    document.write(table+" x "+i+" = "+table*i+"<br>")
 } */

 //TASK 5:
 /* var fruits = ["apple"," banana", "mango", "orange","strawberry"]
 for(var i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" "+fruits[i]+"<br>")
 } */

 //TASK 6:
/*  var counting=[];
 var size=+prompt("Enter size of an array")
 var even1=[]
 var odd1=[]
 var reverse1=[]
 var j=0;
 

 for(var i=0;i<size;i++){
    counting[i]=+prompt("Enter your count")
 }

 

 for(var i=0;i<size;i++){
  if(counting[i]%2===0){
      even1[i]=counting[i];
  }
  else{
     odd1[i]=counting[i]
  }
 }
 for(i=size-1;i>=0;i--){

    reverse1[j]=counting[i]
    j++;
 }
 counting.sort();
 even1.sort();
 odd1.sort();
 document.write("Even : "+even1+"<br>")
 document.write("Odd : "+odd1+"<br>")
 document.write("Reverse : "+reverse1+"<br>")
 
 document.write("Series : "+counting.join("k,")+"k") */


 //TASK 7:
 /* var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
 var searchArr=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
 searchArr.toLowerCase();
 var flag=0;
 for(var i=0;i<arr.length;i++){
    if(arr[i]===searchArr){
       document.write(searchArr+ " is available at index "+i +" in our bakery"+"<br>")
       flag=1;
    }
 }
 if(flag===0){
    document.write("We are sorry. "+searchArr+" is not available in our bakery")
 }
 */

 //TASK 8:
/*  var arr=[12,45,98,12,78]
 
 var larNumber=arr[0];
  document.write("Array elements: "+arr+"<br>")
 for(var i=0;i<arr.length;i++){
    if(larNumber<=arr[i]){
        larNumber=arr[i];
    }
   }
   document.write("Largest number is "+larNumber) */

//TASK 9:
/* var arr=[12,15,98,11,78]
 
 var smallNumber=arr[0];
  document.write("Array elements: "+arr+"<br>")
 for(var i=0;i<arr.length;i++){
    if(smallNumber>=arr[i]){
        smallNumber=arr[i];
    }
   }
   document.write("Smallest number is "+smallNumber) */

   //TASK 10:
  /*  for(var i=1;i<=100;i++){
      if(i%5===0){
         document.write(i+", ")
      }
   } */












