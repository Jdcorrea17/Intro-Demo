let harryAttack = 25;
let lordVAttack = 40;

if(harryAttack > lordVAttack){
    console.log("Harry has a better attack than Lord V")
} else if(lordVAttack > harryAttack) {
    console.log("Lord V has a better attack than Harry")
} else {
    console.log("Harry and Lord V have the same attack")
}

let harryHealth = 100;
let harryDefense = 0;

// Lord V attacks Harry
console.log('Lord V attacks Harry ---> "Avra kadavra"')

if(harryHealth <= lordVAttack){
    console.log("Harry has been slain")
} else {
    harryHealth -= lordVAttack;
    console.log(`Harry's health is down ${harryHealth}`)
}

// Harry picks up a shield
harryDefense += 25;

if(harryHealth <= (lordVAttack - harryDefense)){
    console.log("Harry has been slain!")
} else {
    harryHealth -= (lordVAttack - harryDefense)
    console.log(`Harry's health is down ${harryHealth}`)
}

// town person give harry a shield

let healthKit = 50;

if ((harryHealth + healthKit) >= 100){
    harryHealth = 100;
} else {
    harryHealth += healthKit;
}

console.log(`Harry got some help. Health is now ${harryHealth}`)

let coinTossHeads = false;

if(coinTossHeads === true){
    console.log("The fight continues")
} else {
    console.log("Harry is allowed to run away")
}

// For loop

// for(let i = 0; i <= 10; i++){
//      if(harryHealth <= 0){
//         console.log("Harry has been slain!")
//     } else {
//     harryHealth -= (lordVAttack - harryDefense)
//     console.log(`Harry health is ${harryHealth}`)
// }
// }

while(harryHealth > 0){
    harryHealth -= (lordVAttack - harryDefense)
    console.log(`Harry's health is ${harryHealth}`)
    if(harryHealth <= 0){
        console.log("Harry has been slain!")
    }
}
