//Check if the Number is palindrome or not? 

var num = 1221;
var n = String(num);
 var bag = "" ;
 for(var i = n.length-1; i >= 0; i--){
     bag+=n[i];
     
 }
 bag = Number(bag);
 if(bag == num){
     console.log("Yes");
 }else{
     console.log("No");
 }
//code is running properly.