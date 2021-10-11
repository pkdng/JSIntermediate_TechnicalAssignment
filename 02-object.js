// //Soal - 01
// const person = {
//     name: "person A",
//     age: 100,
//     favDrinks: [
//       "coffee",
//       "jamu temulawak",
//       "tea"
//     ],
//     greeting: function(name) {
//       return `Hello, ${name}`
//     }
//   }
  
//   /// EDIT HERE
//   person.name = "Putri Fajriana"
//   person.favDrinks.splice(person.favDrinks.indexOf("jamu temulawak"),1, "tap water")
//   /// STOP
  
//   console.log(person.name);
//   console.log(person.age);
//   console.log(person.favDrinks);
//   console.log(person.greeting("John Watson"));


// //Soal - 02
// function getObjectValue(obj, path) {
//     let p = path.split('.');
//     let val = obj[p[0]][p[1]][p[2]]
//     if(val === undefined) return null
//     else return val
// }

// const milkBasedCoffee = {
//   name: "latte",
//   ingredients: {
//     espresso: {
//       origin: "lampung",
//       roastProfile: "medium to dark",
//       ratio: 1
//     },
//     milk: {
//       brand: "susu murni",
//       isVegan: false,
//       ratio: 5
//     }
//   },
// }

// const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
// const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
// const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

// console.log(espresso);
// console.log(coffeeBrand);
// console.log(isMilkVegan)


//Soal - 03
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    const untungBtc = [], untungEth = [], untungDoge = [];

    items.forEach((element, index) => {
        untungBtc[index] = element.btc.sell - element.btc.buy
        untungEth[index] = element.eth.sell - element.eth.buy
        untungDoge[index] = element.doge.sell - element.doge.buy
    });

    return {
        btc: untungBtc.reduce((a, b) => a + b), 
        eth: untungEth.reduce((a, b) => a + b), 
        doge: untungDoge.reduce((a, b) => a + b)
    }
  }
  
  console.log(calculateIncome(items))
  