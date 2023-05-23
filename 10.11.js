//№1 вариант 1
var x = -100, y = -20, z = 15;
var a = Math.min(x, y, z);
console.log('минимальное число =',a);
 
//№1 вариант 2 
var a=-100, b=21, c=40;
    var min;
     if(a < b && a < c){
      min = a;
    }else if (b < c){
      min = b;
    }else{
      min = c;
    }
  console.log('минимальное число=',min)

//№2  
const m = 2;
switch (m) {
  case 1: console.log ('31 день');
  break;
  case 2: console.log ('28 дней');
  break;
  case 3: console.log ('31 день');
  break;
  case 4: console.log ('30 дней');
  break;
  case 5: console.log ('31 день');
  break;
  case 6: console.log ('30 дней');
  break;
  case 7: console.log ('31 день');
  break;
  case 8: console.log ('31 день');
  break;
  case 9: console.log ('30 дней');
  break;
  case 10: console.log ('31 день');
  break;
  case 11: console.log ('30 дней');
  break;
  case 12: console.log ('31 день');
  break;
 default: console.log('в году всего 12 месяцев'); break;
}

//№3
let num = 5.5, exp = 8;
for ( let i = 0; i <= exp; i++ ) {
   console.log(num**i);  }    


