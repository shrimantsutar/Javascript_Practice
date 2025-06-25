const name="Shrimat"
const email= "shrimant@gmail.com"
const phpne=23784629;

// console.log(name + email + phpne + " amt");


// String Interpulation 

console.log('My name is Shrimant ${name} and im 26 year old Boy ${age}');


const gameName = new String ('shrimant')

console.log(gameName[5]);                   // a     //Key Value pair find 


console.log(gameName._Proto_);                //  undefined
console.log(gameName.length);                 //  8
console.log(gameName.toUpperCase());          //  SHRIMANT
console.log(gameName.charAt('6'));            //  n
console.log(gameName.indexOf('m'));           //  4


const newString = gameName.substring(0, 5)      //    shrim
console.log(newString);


const anotherString = gameName.slice (-4,5)      //   m
console.log(anotherString);
    


const newvalu="         Shrimant      "                
console.log(newvalu);                                //    _____Shrimant_______
console.log(newvalu.trim());                        //    Shrimant     





const url= "https://google.amd"
console.log (url.replace('google','shrimant'))         // https://shrimant.amd



console.log(url.includes('shrimant'));             //  false
console.log(url.includes('google'));              // true



console.log( gameName.split('-'));            //  [ 'shrimant' ]







