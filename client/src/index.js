const axios = require('axios');

function getDrinks(){
    axios.get("http://localhost:4000/drinks", (req,res)=>{console.log(res)})
}

getDrinks();


document.getElementById("monsterbtn").addEventListener("click", function (){consumedDrink(1)});
document.querySelector("#blackbtn").addEventListener("click", function (){consumedDrink(2)});
document.querySelector("#americanobtn").addEventListener("click", function (){consumedDrink(3)});
document.querySelector("#sugarbtn").addEventListener("click", function (){consumedDrink(4)});
document.querySelector("#fivebtn").addEventListener("click", function (){consumedDrink(5)});
document.querySelector("#resetbtn").addEventListener("click", resetTotal);


function consumedDrink(drinkID){
        axios.post('http://localhost:4000/consume', {
         drinkID: drinkID 
      })
      .then(function (response) {
        console.log(response.data.totalCaffiene);
        let messageOne= "";    
        if (response.data.totalCaffiene<= 500)
                messageOne= "you have drank "+ response.data.totalCaffiene+"Mg of caffiene!";

        else 
            messageOne= "uh oh, you have drank "+response.data.totalCaffiene+"Mg of Caffiene. You better take it easy!";    
            
        document.querySelector(".bottom-container").innerHTML=messageOne;
        })
      .catch(function (error) {
        console.log(error);
      });
  // alert (drinkID)
   
   
    
}

function resetTotal(){
    axios.get('http://localhost:4000/reset'//,{
     // consumedDrink(),
    // consumedDrinkID = 0,
    // currentCaffeineTotal = 0,
    )
    .then(function (response){
      console.log(response.data.totalCaffiene);
      let messageOne= "You havent drank anything yet!";
      document.querySelector(".bottom-container").innerHTML=messageOne;
    }
    )
}
