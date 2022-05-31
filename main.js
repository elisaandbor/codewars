// function add(a,b){
//     return (a+b)
// }

// function divide(a,b){
//     return (a/b)
// }

// function multiply(a,b){
//     return (a*b)
// }

// function mod(a,b){
//     return (a%b)
// }
   
// function exponent(a,b){
//     return Math.pow(a,b)
// }
    
// function subt(a,b){
//     return (a-b)
// }

// function nameShuffler(str){
//     let newString = str.split(' ')
//     return (newString[1]+ ' '+ newString[0])
//   }

//   function noSpace(x){return x.split(' ').join('')}

//   function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     if(dolphin){
//       sharkSpeed /= 2;
//     }
//     return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
//   }
//   function multiply(a, b){
//     return a*b;
//   }
//   function defineSuit(card) {
//     const s = {
//       "♣": "clubs",
//       "♠": "spades",
//       "♦": "diamonds",
//       "♥": "hearts"
//     }
//     return s[card.charAt(card.length - 1)]
//   }

//   function countSheep(num){
//     let str = "";
//     for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//     return str;
//   }

//   function dBScale(intensity) {
//     return 10 * Math.log10(intensity / Math.pow(10, -12));
//   }

//   function mergeArrays(arr1, arr2) {
//     let Array = arr1.concat(arr2);
//    let newArray = Array.filter((value,
//       index) => Array.indexOf(value) === index);
//      return newArray.sort((a,b) => a-b);
//   }
//   console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))

//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return ((fuelLeft  * mpg) >= distanceToPump) ? true : false
//   };

//   function aspectRatio(x,y){
//     let newx = Math.ceil((16*y)/9)
//     return [newx, y]
//   }

//   function powersOfTwo(n){
//     array = [];
//      for(let i = 0; i <= n; i++){
//      array.push(Math.pow(2,i))
     
//     };
//     return array;
//   }

//   function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
//   }

//   function howMuchILoveYou(nbPetals) {
//     let array = [
//       'I love you',
//       'a little',
//       'a lot',
//       'passionately',
//       'madly',
//       'not at all',
//     ]
    
//     return array [(nbPetals -1 ) % array.length]
// }


// function sumOfDifferences(arr) {
//   let Arr = arr.sort((a,b) => b-a);
//   let newArr = Arr.map((a,i) => a - Arr[i + 1] || 0);
//   let res = newArr.reduce((a,b) => a + b, 0)
//    return res
 
//  }
 
function billboard(name){
let newArr = name.split('')
 let price = 30
 let num = 0
 for (i = 0; i < newArr.length; i++){
      num += price
 }
  return num

}
console.log(billboard("Jeong-Ho Aristotelis"))