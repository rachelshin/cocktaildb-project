//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("#previous").addEventListener('click', previous)
document.querySelector("#next").addEventListener('click', next)

document.querySelector("button").addEventListener('click', getDrink)

let results

function getDrink(){
    let drink = document.querySelector('input').value.split(' ').join('+')
    


    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let results=data
     // console.log(data.drinks[0])
     //console.log(results.drinks)
      document.querySelector("h2").innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector("h3").innerText = data.drinks[0].strInstructions

      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
console.log(results)
let currentSlide = 0;

function previous(){
  let drink = document.querySelector('input').value.split(' ').join('+')
    


  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let results=data
   // console.log(data.drinks[0])
   //console.log(results.drinks)
    document.querySelector("h2").innerText = data.drinks[currentSlide-1].strDrink
    document.querySelector('img').src = data.drinks[currentSlide-1].strDrinkThumb
    document.querySelector("h3").innerText = data.drinks[currentSlide-1].strInstructions
currentSlide-=1
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
function next(){
  let drink = document.querySelector('input').value.split(' ').join('+')
    


  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let results=data
   // console.log(data.drinks[0])
   //console.log(results.drinks)
    document.querySelector("h2").innerText = data.drinks[currentSlide+1].strDrink
    document.querySelector('img').src = data.drinks[currentSlide+1].strDrinkThumb
    document.querySelector("h3").innerText = data.drinks[currentSlide+1].strInstructions
currentSlide+=1
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}