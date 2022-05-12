function add(a,b){
    return (a+b)
}

function divide(a,b){
    return (a/b)
}

function multiply(a,b){
    return (a*b)
}

function mod(a,b){
    return (a%b)
}
   
function exponent(a,b){
    return Math.pow(a,b)
}
    
function subt(a,b){
    return (a-b)
}

function nameShuffler(str){
    let newString = str.split(' ')
    return (newString[1]+ ' '+ newString[0])
  }

  function noSpace(x){return x.split(' ').join('')}

  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
      sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
  }
  function multiply(a, b){
    return a*b;
  }
  function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }