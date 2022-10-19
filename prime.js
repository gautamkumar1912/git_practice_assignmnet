var count = 0;
var num = 5;
for(var i = 1; i <= num; i++){
if(i%num==0){
count++;
}
}
if(count==1){
console.log("Prime number");
}else{
console.log("Not a prime number");
}