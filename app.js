"use strict";
// Arrays
// typeScript has a specific syntax for typing array.
Object.defineProperty(exports, "__esModule", { value: true });
const breakfastList = ["Bread", "Milk", "eggs", "Juice"];
breakfastList.push("Orange", "Mango"); //Push: add elements to an array
console.log("Breakfast :", breakfastList);
console.log("--------------------------------------------");
// const busTicketPrice :number[] = [50, 60, 70, 80, 90, 100];              //first way of typing
const busTicketPrice = [50, 60, 70, 80, 90, 100]; //second way of typing
busTicketPrice.push(110, 120, 200);
busTicketPrice.push("Give it to me ticket , where you go?");
console.log("BusTicketPrice :", busTicketPrice);
console.log("--------------------------------------------");
const clothes = ["Lawn", "Cotton", "Shimer", "Rasham", "Slik"];
// clothes.push("net");             //This will throw on error because the array is readonly
console.log("Clothes : ", clothes);
console.log("--------------------------------------------");
const clothesNew = ["Lawn", "Cotton", "Shimer", "Rasham", "Slik"];
clothesNew.push("lilan");
clothesNew[2] = "Garsi";
console.log("Exchange Clothes :", clothesNew);
console.log("--------------------------------------------");
const greatNumber = [24, 35, 67, 85, 72, 100];
greatNumber.pop(); //Remove to end
console.log(greatNumber);
console.log("--------------------------------------------");
const goldenPerson = ["Parents", "Siblings", "Grand Parents", "Kazans"];
goldenPerson.unshift("great Grand Parents"); //Add to start
console.log("Golden Person = ", goldenPerson);
console.log("--------------------------------------------");
const goldPerson3 = ["Parents", "Siblings", "Grand Parents", "Kazans"];
goldenPerson.shift(); //Remove to start
console.log("Golden Person = ", goldenPerson);
console.log("--------------------------------------------");
const goldenPerson4 = ["Parents", "Siblings", "Grand Parents", "Kazans"];
const relatives = ["Anty ", "uncle"]; //join multiple array & return result 
const family = goldenPerson.concat(relatives);
console.log("Family = ", family);
console.log("--------------------------------------------");
const goldenPerson5 = ["Parents", "Siblings", "Grand Parents", "Kazans"];
goldenPerson.slice(1, 2); //return a pices of array
// goldPerson.splice();                          //join multiple array & return result
console.log("Golden Person = ", goldenPerson);
console.log("--------------------------------------------");
// Tuples
const myTuple = ["Jafrine", 26, false];
console.log(myTuple);
console.log(myTuple[0]);
console.log(myTuple[1]);
console.log(myTuple[2]);
myTuple.push("Javier");
console.log(myTuple);
console.log("--------------------------------------------");
const graph = [23, 56];
console.log(graph);
console.log("--------------------------------------------");
const foodItem = ["Baryani", 10, true];
console.log(foodItem);
console.log("--------------------------------------------");
