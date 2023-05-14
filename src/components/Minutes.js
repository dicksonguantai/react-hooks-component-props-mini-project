import React from "react";
export default function Minutes({minutes}) {
console.log(minutes)
    let messageCoffee = "☕️"
    let messageBentoBox = "🍱"
    let messageCoffeeTobeShown;
    let messageBentoBoxToBeShown;
if (minutes<30){
    let coffeeCups = Math.round(minutes/5)
    messageCoffeeTobeShown =messageCoffee.repeat(coffeeCups)
    console.log(messageCoffeeTobeShown)
  }
  else if(minutes>30){
   let bentoBoxes = Math.round(minutes/10)
    messageBentoBoxToBeShown= messageBentoBox.repeat(bentoBoxes)
        
    console.log(messageBentoBoxToBeShown)
  }
  return(
    <>
    {minutes > 30 ?messageBentoBoxToBeShown :messageCoffeeTobeShown }
  </>
  )
}
