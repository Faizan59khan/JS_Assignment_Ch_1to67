//CHAPTER 38 TO 42:

//TASK 1:
/* function power(a,b){

    var res=a**b;
    return res;
}
var result =power(a=+prompt("Enter the Number"),b=+prompt("Enter the power"))
document.write("Result is "+result) */


//TASK 2:
/* function leapYear(year){  //A year that comes after 4 years
    var setyear=2012;
   if(year%4===0){
       alert(year+" is a Leap Year ")
   }
   else{
       alert(year+" is not a Leap Year")
   }
}
leapYear(a=+prompt("Enter the year")) */

//TASK 3:
/* function sides(a,b,c){  //Calculating Area using two functions
    var res=(a+b+c)/2;
    return res;
}
function areaOfTriangle(a,b,c){
    var S=sides(a,b,c);
    var area=S*(S - a)*(S - b)*(S - c)

    return area;
}
var result=areaOfTriangle(a=+prompt("Enter the side"),b=+prompt("Enter the side"),c=+prompt("Enter the side"))
alert("Area is "+result) */

//TASK 4:
/* 
function mainFunction(){
var num=+prompt("How many subjects do you have")
var subject=[]
var i;
for(i=0;i<num;i++){
    subject[i]=+prompt("Enter marks of Subject "+(i+1))
}
var avg=average(subject,num);
var per=percentage(subject,num);

alert("Average is "+avg+"\nPercentage is "+per)

}

function average(sub,num){
    var total=0;
    for(i=0;i<sub.length;i++){
        total= sub[i]+total;
    }
    var avg=total/num;
    return avg;
}

function percentage(sub,num){
     var obtMarks=0;
     var total=num*100;
     for(i=0;i<sub.length;i++){
        obtMarks= sub[i]+obtMarks;
    }
    var per=(obtMarks/total)*100;
    return per
}

mainFunction(); */

//TASK 5:
/* function givesIndex(word,str){
    var len=word.length;
   for(var i=0;i<str.length;i++){
       if(word===str.slice(i,i+len)){
              return i;
          }
   }
   
}
var text="This is my watch"
document.write(givesIndex("watch",text)) //Its work similar like indexOf we have to give 
                                         //two arguments 1st (finding word), 2nd (text variable) */



//TASK 6:
/* function deleteVowels(text){
     var text1=Array.from(text);
     for(var i=0;i<text1.length;i++){
         if(text1[i]=='a'||text1[i]=='e'||text1[i]=='i'||text1[i]=='o'||text1[i]=='u'){
             text1[i]='';
         }
     }
     alert(text1)
}
deleteVowels("This is my watch") */




//TASK 7:
/* function chectAnyTwoVowels(str){
    var arr=[]
    for(var i=0;i<str.length;i++){
        if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
            if(str[i+1]==='a'||str[i+1]==='e'||str[i+1]==='i'||str[i+1]==='o'||str[i+1]==='u'){
             arr[i]=str[i]+str[i+1];
            }
        }
        if(str[i]==='A'||str[i]==='E'||str[i]==='I'||str[i]==='O'||str[i]==='U'){
            if(str[i+1]==='A'||str[i+1]==='E'||str[i+1]==='I'||str[i+1]==='O'||str[i+1]==='U'){
             arr[i]=str[i]+str[i+1];
            }
        }
    }
    return arr;
}
var text="Pleases read this application and give me gratuity"
document.write(chectAnyTwoVowels(text)) */

//TASK 8:
/* function kmTom(km){
 var res=km*1000;
 return res
}
function kmTof(km){
    var res=km*3281;
    return res
}
   function kmToI(km){
    var res=km*39370;
    return res
}
   function kmTocm(km){
    var res=km*100000;
    return res
}
var km=+prompt("Enter the distance between two cities in km")


var choice=+prompt("1)In metre\n2)In Feet\n3)In inches\n4)In centimetre")
switch(choice){
    case 1:
        var res=kmTom(km);
        alert("In metre: "+res)
         break;
    case 2:
        var res=kmTof(km);
        alert("In Feet: "+res)
        break;
    case 3:
        var res=kmToI(km);
        alert("In Inches: "+res)
        break;
    case 4:
            var res=kmTocm(km);
            alert("In Centimetre: "+res)
            break;
    case 5:
        
    default:
        alert("Invalid Choice")
} */

//TASK 9:
/* function overtimePay(hour){
    var pay=12;
    var res=hour*pay;
    return res;
}
var result=overtimePay(+prompt("How many extra hours you work"))
alert("Your pay is "+result) */


//TASK 10:

/* var cHun=0,cFif=0,cTen=0;
var amount=+prompt("Enter amount to withdraw!!")
var total=0;
while(total!=amount){
if(amount>=100 && (amount-total)>=100){
    total=total+100;
    cHun++;
}
else if((amount-total)>=50){
  total=total+50;
    cFif++;
}
else{
    total=total+10;
    cTen++;
}
}
alert("You will have "+cHun+" hundred notes "+cFif+" fifty notes and "+cTen+" ten notes.") */



//CHAPTER 43 TO 48:
//TASK 1:
//Done on index.html

//TASK 2:
//Done on index.html

//TASK 3:

//Done on html (JS also on Html)

//TASK 4:       //These functions used in html
/* function changeImg(){
    var image=document.getElementById("img1")
    image.src="X.jpg"
}
function resetImg(){
    var image=document.getElementById("img1")
    image.src="r17.jpg"
} */

//TASK 5:
/* var count=0;
function increase(){
   var inc=document.getElementById("but1")
   var count2=document.getElementById("count1")
   inc.value=++count;
   count2.innerHTML=inc.value;
   
}
function decrease(){
    var inc=document.getElementById("but2")
    var count2=document.getElementById("count1")
    inc.value=--count;
    count2.innerHTML=inc.value;
    
 } */

 //CHAPTER 49 TO 52:
 //TASK 1:

 

/* function signUp(){
    var name1=document.getElementById("name")
    var email1=document.getElementById("email")
    var pass=document.getElementById("pwd")
    var data1=document.getElementById("data")
    
                                          //In this program i will use my html through JS
    var tagg=document.createElement("h2")  //crating heading
    var text=document.createTextNode("Data of sign up form")
    tagg.appendChild(text)
    data1.appendChild(tagg)

                                          //Data which i enter in sign up form
    var tag=document.createElement("p");
    var text1=document.createTextNode("Name is "+name1.value)
    tag.appendChild(text1)
    data1.appendChild(tag)

    var tag1=document.createElement("p");
    var text2=document.createTextNode("Email is "+email1.value)
    tag1.appendChild(text2)
    data1.appendChild(tag1)

    var tag2=document.createElement("p");
    var text3=document.createTextNode("Password is "+pass.value)
    tag2.appendChild(text3)
    data1.appendChild(tag2)

} */




 //TASK 2:
 /* function readMore(){
     var read1=document.getElementById("readM")
     var text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error similique repellat perferendis quo iste, dignissimos voluptatem ad quam minus omnis illo ex, dolorem nisi. Neque mollitia officiis minima libero consequuntur."
     read1.innerHTML=text
 } */



