/*BUILD FLEXIBLE COLLECTIONS WITH ARRAYS

Summary of methods: 
1. indexOf() method determines if value exists in element
2. push() method pushes elements to end of array.
3. pop() method removes the last element from array 
4. some() method checks if one of the elements in an array meet a specific condition. 
5. every() method checks if all elements in an array meet a specific condition
6. map() an array method that allows me to perform operation/transform each element by passing method a callback function
7. forEach() similar to map() but does not create new array. 
8. filter() method searches an array for a subset of data. use if want a selection of array
9. find() method, use if want a single element from array 
10. startsWith(), string method that checks if something contains a letter  find elements that being with capital C = startsWith(C)
11. example of arrow functions, short circuit and && operator: restaurant.name.startsWith('C') && restaurant.milesAway < 3
12. reduce() can return any type of value and takes 2 parameters:
    a. the accumulator and each element that reduce() iterates over
    b. the initial value of accumulator
    reduce((acc, num) => {}, []) -> entitles parameters acc and num. second parameter sets the initial value of accumulator to an array
    reduce((accumulator, menuItem) => {}, 0) ->entitles parameters accumulator/menuItem. second parameters sets accumulator to 0
13. concat() pushes new items on to the end of array and also makes copy of array  so avoids mutating original array. 
14. array spread operator [...] clones/makes copy of original array  so avoids mutating original array
15. unshift() adds elements to beginning of array
16. slice() returns subset of array
17. findIndex() returns the index of an element
18. array destructing [] allows me to separate elements into individual arrays
19. rest operator...   which is used specifically for destructuring statements. 



Objects are great to use when i know exactly what i need to update, according to its key. And objects do not preserve 
the property order. So will not know anything about the 1st or last entry in the object. So removing the last property added to the 
object will not be possible. These are some of the limitation of objects. 

program manages the list of tasks on the todos object. each task is organized as an object. */
const todos = {} //creating object

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
} 

const todo2 = {
  text: 'Do laundry',
  complete: false  
} 

todos[1] = todo1  //adding todo1 object to the todos object. 
todos[2] = todo2 
console.log(todos)  //returns {1: {text: 'Wash the dishes', complete: false}, 2: {text: 'Do laundry', complete: false}}

/*Arrays are a better data structure to use when order is important when working with that data. Arrays are a special variant of objects. 
Arrays remember the order the items were added to them. The elements in arrays start at value 0. Arrays have a ton of built in methods
to manage the elements. We use arrays over normal objects because of their ability to observe order along with a list of array methods
to manage data. 

Program below creates an array of objects. */
const todos = [] //creating an array

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
} 

const todo2 = {
  text: 'Do laundry',
  complete: false  
} 

todos[0] = todo1  //the number represents the index or position of the element. 
todos[1] = todo2 
console.log(todos)  //returns [{1: {text: 'Wash the dishes', complete: false}, 2: {text: 'Do laundry', complete: false}]

todos.push(todo1, todo2)  //push() methods pushes elements to end of array. 
todos.pop()  //removes the last element from array 

/* Challenge: 
1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items 
there are in the array
3. Invoke the pop method on your created array. What values do you have left in the array? 
*/

const favouriteSongs = [] 

favouriteSongs.push('I Go Crazy') 
favouriteSongs.push('Your Smile') 
favouriteSongs.push('Tonight I Give') 
favouriteSongs.push('Just Because') 

console.log(favouriteSongs)  //returns ['I Go Crazy', 'Your Smile', 'Tonight I Give', 'Just Because']
console.log(favouriteSongs[favouriteSongs.length - 1]) //returns 'Just Because'
favouriteSongs.pop()  //removes 'Just Because' from array
console.log(favouriteSongs[favouriteSongs.length - 1]) //returns new last item in array 'Tonight I Give'

/*CHECK ELEMENT EXISTENCE IN ARRAYS

can use indexOf() method to determine if value exists in element. -1 is returned if value does not exist. better to use includes() method.
includes() only works with primitive values (strings, numbers, booleans).
*/
const temperatures = [69, 82, 73, 64] 
console.log(temperatures.indexOf(82))  //using indexOf to find position of 82 in array. returns 1 
console.log(temperatures.indexOf(50))  //returns -1 because 50 is not an element in array. 
console.log(temperatures.indexOf(50) > -1)  //returns false. this is a way of returning a boolean vs number if value not in array
console.log(temperatures.includes(50))  //includes() method assess if value is in array. this returns false. method is more readable

/*
a more powerful array method to check an array of objects to see if one or more of the elements meets a given condition, use the method 
some(). some() works by passing it a function, where i provide the condition with the function. the function allows me to get access to 
each element in its parameters. can add the functionality in the body. this pattern is like the callback function. 
so the some() method using its callback function will get access to each element in the array and iterate over the entire array. 
i get access to the element within the callback. 

some() method returns true or false.  

getting access to each element with callback function. call each element in the parameters at temperatures. in the function body,
want to know if the array elements had record breaking temperatures, or isRecordTemp true. this could be checked/evaluated with statement
temperature.isRecordTemp === true. because some() returns the value true or false. some() will get the result of true/false from the 
callback function i passed to it (temperature => temperature.isRecordTemp === true), need to ensure that i return the results of the 
comparison from the body. once some() finds the 1st element of the array that evaluates as true, some() will stop iterating over the array 
and return the value true. so at least one element needs to match the condition provided to some() for it to return true, if not, will 
return false and therefore iterate thru all of the elements. 
*/
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, //if changed to false, results will return false because none of elements meets the condition with some()
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
] 
const result = temperatures.some(temperature => temperature.isRecordTemp === true) /*calling callback function temperature. passing some() a
                                                                                    callback function. some() will get results of true/false
                                                                                    of comparison 'is temperature a record temp'. arrow    
                                                                                    functions have implicit return, can write like this */
                                                                                    
console.log(result) //returns true

/*we already have a boolean value on temperature.isRecordTemp  comparison alone will return true/false. current statement is comparable 
to temperatures.some(temperature => true === true)  which is redundant. because using arrow functions, this statement can be 
further simplified. */
const result = temperatures.some(temperature => temperature.isRecordTemp) //returns true 

/*every() method checks if all elements in an array meet a specific condition. every() will iterate through every element in an 
array and will only return true if all of the elements meet a certain condition.   */
const result = temperatures.every(temperature => temperature.isRecordTemp)  //checks if all elements are true
const result = temperatures.every(temperature => temperature.isRecordTemp === false)  //checks if all elements are false
const result = temperatures.every(temperature => !temperature.isRecordTemp)  //using logical not operator to check if all elements are false

/* Challenge:
Here's a list of 5 most popular songs on Spotify.
1. Check if any song has won a Grammy
2. Check if all the songs were streamed for at least 1.5 million times
Note: the timesStreamed value is already in million */
const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]
const hasWonGrammy = songs.some(song => song.wonGrammy === true)  //returns true
const hasWonGrammy = songs.some(song => song.wonGrammy)  //condensed codes, returns true
console.log(hasWonGrammy) 
const allMegaHits = songs.every(song => song.timesStreamed > 1.5)  //returns false, one song did not meet criteria
console.log(allMegaHits) 

/* PERFORM ACTION ON ALL ELEMENTS

map() is an array method that allows me to transform each temperature by passing it a function  similar to some() and every(). 
passing map() a function called temperature (because each element is a temperature), and in the function body (within curly braces), 
for each temperature want to get the isRecordTemp property and set it to true. similar to sum() and every(), the result of map() is 
immediately returned but whats different about map() is that it transforms the entire array  and the returned value is a brand 
new array of the exact same length. map() does not change or mutate the old/original array (the temperatures array in this case). 
map() applies a given transformation that is specified in the callback function passed to the map() method to every single 
element of the array.

following program creates a new array by returning the updated temperature. after map() has gone thru every array element and returns 
a value, can take the returned value and put it in a new variable (newTemps in this case). don't forget the return keyword. 
*/
const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ] 
  
  const newTemps = temperatures.map(temperature => {
     temperature.isRecordTemp = true  
     return temperature  //return each temperature update and stores it in value called newTemps
  }) 
  console.log(newTemps)  /* returns an array where th isRecordTemp property is set to true for every element in the array.
  [{degrees: 69, isRecordTemp: true}, {degrees: 82, isRecordTemp: true}, {degrees: 73, isRecordTemp: true}, {degrees: 64, isRecordTemp: true}
   */

/*can also use map() to add new properties to an array. adding a new property called isHigh to every element in array  */
const newTemps = temperatures.map(temperature => {
    temperature.isHigh = true  
    return temperature 
 }) 
 console.log(newTemps)  /* returns 
    [{degrees: 69
    , isRecordTemp: false
    , isHigh: true
    }
    , {degrees: 82
    , isRecordTemp: true
    , isHigh: true
    }
    , {degrees: 73
    , isRecordTemp: false
    , isHigh: true
    }
    , {degrees: 64
    , isRecordTemp: false
    , isHigh: true
    }
    ]
 */

/*using ternary operators to conditionally update array. map() coupled with conditionals are very powerful ways to transform array data

from each temperature, take the degrees property and want to compare/see if the temperature is > 70. this is the condition.  if so, take
the temperature element and add on the isHigh property set to true. this can be accomplished by creating a new object and spread in all of
the previous properties and values with the object spread operator (...temperature) then merge on to this new object the isHigh property set
to true. otherwise if the temperature does not meet the condition of temperature > 70, then leave temperature alone as is and just 
return it.

when run program, the 1st and 4th elements are ignored because they did not meet condition/or evaluated as false. the 2nd and 3rd elements
are updated with isHigh true
 */
const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ] 
  
  const newTemps = temperatures.map(temperature => 
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
  ) 
  console.log(newTemps)  /* returns 
    [{degrees: 69
    , isRecordTemp: false
    }
    , {degrees: 82
    , isRecordTemp: true
    , isHigh: true
    }
    , {degrees: 73
    , isRecordTemp: false
    , isHigh: true
    }
    , {degrees: 64
    , isRecordTemp: false
    }
    ]   
*/

/*another method that allows me to perform operations on every element in an array is forEach(). the difference between map() and 
forEach() is that forEach() does not create a new array. forEach() just allows me to iterate over the array i provide it and perform 
an operation using a callback. usually use forEach() after i have the array in the format i want it in, usually after using the map()
method. and using the array data provided/produced by map(), use forEach() to do something with the data. 

now that i have a transformed array using map() that has 2 elements with record high, i now want to inform the user that these 2 days
had a record high of so many temperatures. can accomplish this by taking the newTemps array created with map() and iterate over it with
forEach().

for the forEach() callback function, can access the each temperature element (by calling the function temperature in this case) and in the
function body, say if the temperature was a high, tell the user the temperature in x degrees was a record high. for the callback, do not
need to give the function a return value because we are not returning anything because forEach() does not return a new array like 
map() does. within function body want to check if temperature is high (if (temperature.isHigh)). if true, then alert user of record high.
(console.log(`Temperature ${temperature.degrees} was a record high last week!`)).  
*/
const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ] 
  
  //using map() method to create a new array that adds a new property (isHigh:true) for elements with degrees >70.  
  const newTemps = temperatures.map(temperature =>  
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
  ) 
  //using forEach() method to take transformed array newTemps and log message to user about record temperatures.  
  newTemps.forEach(temperature => {
     if (temperature.isHigh) {
       console.log(`Temperature ${temperature.degrees} was a record high last week!`)   
     }
  })
//returns Temperature 82 was a record high last week!   Temperature 73 was a record high last week!

/*can improve program by chaining methods. can remove step of creating the newTemps variable. immediately after mapping over temperatures, 
can immediately pass the created array to forEach(). returns the same result with far more concise syntax. method chaining is powerful.
but use method chaining wisely. it can make code hard to read */
temperatures
  .map(temperature => 
temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
)
  .forEach(temperature => {
   if (temperature.isHigh) {
     console.log(`Temperature ${temperature.degrees} was a record high last week!`)   
   }
})
//returns Temperature 82 was a record high last week!   Temperature 73 was a record high last week!

/*GET SUBSET OF ARRAYS

can use filter() method to search an array for a subset of data. take an array and with filter() pass a callback function to it, where i
can supply/provide a condition.  filter(), like map(), returns a new array and does not mutate/change the original array. 

program below checks to see if a string begins with a capital C. can use the string method startsWith(). filter(), like map(), returns the 
elements that are found in a new array  and put the elements found in a new array called results. filter just returns the array elements
for which condition was met that was specified in the function body, in other words where the return value in the function body is true: 
restaurant.name.startsWith('C')). 

filter() works by checking if the returned value of the condition is true. if element meets the condition or evaluated as true, 
element is added to to the new filtered array. if evaluated as false element is not included.   

can see this on display when setting the return value of callback explicity to true:
const results = restaurants.filter(restaurant => true). 
this returns all of the elements of the array because none of them are filtered out. 

if none of the elements match the condition, filter() returns an empty array. 

use filter() method if i want to obtain a selection/subset of an array. 

use find() method if i want a single element from an array. 
*/
const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
  ]
  const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
  console.log(results)  /*returns only elements that begin with capital C

[{name: "Cap City Diner"
, milesAway: 2.2
}
, {name: "Chop Shop"
, milesAway: 4.1
}
, {name: "City Tavern"
, milesAway: 0.5
}
]
*/
const results = restaurants.filter(restaurant => restaurant.name.startsWith('z'))
console.log(results)  //returns []  an empty array because none of the restaurant names begin with z 

/*using arrow functions and short circuiting to use the && operator to chain on a condition that checks if milesAway is <3.
the function body checks to see if restaurant name begins with C. if so, also checks to see if milesAway <3. */
const results = restaurants.filter(restaurant => 
    restaurant.name.startsWith('C') && restaurant.milesAway < 3
  )
console.log(results)  //returns an array with 2 matches  Cap City Diner and City Tavern.

/*use the find() method to find a single element in an array. find() works just like filter() but just finds the single element or
undefined if it finds nothing. can use the string method includes() (there is also an array method called includes)
includes() is case sensitive, so need to chain toLowerCase() method. 

program is looking for element in array that contains the letters 'north' and milesAway is less than 2*/
const result = restaurants.find(restaurant => 
    restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
    //restaurant.name.toLowerCase().includes('north') && restaurant.milesAway > 2 //returns null/undefined
  )
  console.log(result)  //returns single element Northstar Cafe

console.log(restaurants)  /*confirming the original array has not been mutated/altered. 

[{name: "Cap City Diner"
, milesAway: 2.2
}
, {name: "Chop Shop"
, milesAway: 4.1
}
, {name: "Northstar Cafe"
, milesAway: 0.9
}
, {name: "City Tavern"
, milesAway: 0.5
}
, {name: "Shake Shack"
, milesAway: 5.3
}
]  
  */
  
/* TRANSFORM ARRAYS WITH REDUCE(): reduce() is the got-to method for transforming content for existing arrays. 

unlike map() which always returns an array, reduce() can return any type of value. reduce() iterates over all the array elements. 
similar to other array methods, need to pass reduce() a callback function. in addition to callback function, reduce() also needs an 
additional argument, which is the initial value of the operation i want to perform. since i want to add all of the menu prices, my 
initial value needs to be a number, so will set to 0. 

reduce() differs from other array methods like filter(), map() as follows:

1. reduce() has a special value called the accumulator. think of accumulator as something to store a value. reduce() remembers the value
of the accumulator every time the callback function runs for every single element in the array. for the accumulator to work and store 
values, it has to be returned. 

2. reduce() does not return the element with callback function. instead, reduce() returns the accumulator. 

3. reduce() returns the final value of the accumulator after the last iteration.

reduce() takes 2 parameters, 1. the accumulator and each element that reduce() iterates over, 2 the initial value of accumulator: 
menuItems.reduce((accumulator, menuItem) => {}, 0) 

can use reduce() to get a total price for all items on the menu (obtaining total of all the price properties). with the accumulator, i can 
gather and add all of the prices from the menu. reduce() returns the final value of the accumulator after the last iteration. */

const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
  ] 
/*the syntax using =  overrides the accumulator value which is initially set to 0. when reduce() iterates over array, the price of the 
1st menu item will replace the 0 with 8. the accumulator will hold the value of 8 and when the 2nd iteration completes, the accumulator
will be replaced with 18. so using = does not add the menu prices. need to use + operator which returns the result/stores value in
accumulator which will be available for the next iteration. reduce() returns final value of accumulator after last iteration. storing 
the final value in a variable called total. */
menuItems.reduce((accumulator, menuItem) => {
    //return accumulator = menuItem.price  //does not add menu prices, just replaces accumulator with price property after each iteration
    return accumulator + menuItem.price   //adds the current menu price (as reduce iterates thru array) to the accumulator. 
  }, 0) 
console.log(total) //returns 105

/*console logging the accumulator and menuItem arguments to better understand how reduce() works. see a total of 105 which is correct. 
but also the results of each iteration. for the 1st iteration, the accumulator was set to the initial value of 0 that was passed in. 
the 1st price was 8 and was added to the accumulator of 0. 8 was returned for the 2nd iteration. during the 2nd iteration, 18 was added
to 8 and 26 was returned for the 3rd iteration. during 3rd iteration, 23 was added to 26 and 49 was returned for the 4th iteration. during 
4th iteration, 13 was added to 49 and 62 was returned for the 5th iteration. during iteration #5, 12 was added to 62 and 74 was returned
for the 6th iteration. during iteration #6, 31 was added to the accumulator currently holding 74 and 105 was stored in the accumulator 
for the next iteration. since #6 was the last iteration, the final value of 105 was returned to the total value.*/
const total = menuItems.reduce((accumulator, menuItem) => {
    console.log(`
      accumulator: ${accumulator},
      menu item price: ${menuItem.price}
    `) 
    return accumulator + menuItem.price   
  }, 0) 
  console.log(total)    /* returns 
accumulator: 0, menu item price: 8
accumulator: 8, menu item price: 18
accumulator: 26, menu item price: 23
accumulator: 49, menu item price: 13
accumulator: 62, menu item price: 12
accumulator: 74, menu item price: 31
105
 */

/* Challenge: 
Use reduce() to sum the weights of all the cars
Stretch goal: Use reduce to sum the weights of only the electric cars */
const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ]
const totalWeight = cars.reduce((accumulator, car) => {
    return accumulator + car.weight 
}, 0)
console.log(totalWeight)  //returns 8565

//using if/else to test if car is electric
const totalWeight = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight 
    } else {
        return accumulator 
    }
}, 0)
console.log(totalWeight)  //returns 3100 (adding the weights for electric cars Tesla and BMW)

/*UNDERSTANDING THE POWER OF REDUCE() 

using reduce() to return an array with numbers 2x the value of each element [1, 2, 3, 4, 5, 6]. to begin, pass in the reduce callback
function which for the reduce method is called the reducer, and accepts 2 arguments. first argument is accumulator and array element 
i am iterating over and the second argument is the default value.  the default value is determined by the datatype that i want the results
to be. since i want the results to be in an array, the initial value for the accumulator will be an empty array. 
accelerator is abbreviated and the element i am looping over is called num and initial value is an array: 
numbers.reduce((acc, num) => {}, []) 

to double each number, take each num element in the body and multiply it by 2. the result of the product can be pushed on the accumulator
array:
acc.push(num * 2).

lastly, to get returned array from reduce(), need to return accumulator at the end:
return acc

the program below performs the same operation as map()
*/
const numbers = [1, 2, 3, 4, 5, 6] 
const doubledNumbers = numbers.reduce((acc, num) => {
  acc.push(num * 2) 
  return acc 
}, []) 
console.log('doubled numbers', doubledNumbers)  //returns doubled numbers, [2, 4, 6, 8, 10, 12]
console.log('numbers', numbers)  //returns numbers, [1, 2, 3, 4, 5, 6]

//using map() to double numbers in array. map() is just a shorthand for whats possible with the reduce() operation. 
const doubledNumbers = numbers.map(num => num * 2) 

/*using reduce to return numbers from the array that are greater than 3.  the second argument is an array because thats what i want 
a subset of the array/another array. check each number i am iterating number. if the number is >3, put the number in an array with the
help of the accumulator, because the accumulator is what the array is being set to for each iteration. use an if statement to check for 
the condition and use acc and push to put number in array. this program does not have an else. just want to return the accumulator no 
matter the result. finally, put the returned array in a variable called greaterNumbers.

this program is equivalent to the filter() method*/
const greaterNumbers = numbers.reduce((acc, num) => {
    if (num > 3) {
      acc.push(num) 
    }  
    return acc 
  }, []) 
  console.log(greaterNumbers)  //returns [4, 5, 6]

//filter() is doing the same thing as reduce() in the above program. filter() takes a number, loops over it, see if num >3 
const greaterNumbers = numbers.filter(num => num > 3) //returns [4, 5, 6]

/*filter() and map() are both reduce() operations. filter() and map() were added as conveniences for developers to reduce the amount
of code used with reduce() manually. can decrease the amount of code using reduce() by using ternary operators. 

1. create conditional to check if number is greater than 3: num > 3 ?
2. for the then condition, return number if greater than 3: return acc.push(num)
3. otherwise return the accumulator: acc
4. use implicit return of arrow function and remove the function body. 

*/
//const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.push(num) : acc, [])  //can't provide push as the value of the 
                                                                                         //accumulator because push does not 
                                                                                         //return an updated array. 
                                                                                         //this will result in TypeError: acc.push is not a function 
                                                                                          
const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, [])   //concat() does return updated array.                                                                                                                                                                                                                                                                         
console.log(greaterNumbers)  //returns [4, 5, 6]

/*AVOID MUTATIONS WITH THE ARRAY SPREAD

Arrays are a sub-type of objects. so as an object, arrays are also reference types. when i passed/assigned lunchMenuIdeas to
allMenuIdeas, i didn't pass a copy of the array, i passed a reference to it. so although working with allMenuIdeas, i am still 
working with the original reference to lunchMenuIdeas. using the push() method mutates the original lunchMenuIdeas. can address this
issue with 2 options. 

1. swap out push() with a non-mutating array method. concat() pushes new items on to the end of array but also copies a version of the 
array with the new elements added. so concat() method does not mutate the original lunchMenuIdeas array. 

2. use array spread operator to clone the array. the array spread operator takes the elements of the array and allows me to spread them 
into a new array. start by creating an empty array, within empty array include ...and array i want to spread/copy. this process spreads
all of the elements into a new array i am creating and also clones/copies the array followed by the spread operator:

const allMenuIdeas = [...lunchMenuIdeas]

when i clone the array using the spread operator, i can now use any method w/o mutating the original array/array that was copied. 
can use push() since i have created a copy of the original array lunchMenuIdeas.

the impact of mutating an unexpected array may seem benign in this example. but changing an array during a checkout process on e-commerce
site where unwanted items are included in a customer's basket may lead to frustrations. so its very important to avoid the unexpected/
unintended consequences of mutating arrays. the array spread operator is a great solution to this potential problem.  
*/
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'] 
const allMenuIdeas = lunchMenuIdeas 
allMenuIdeas.push('Club Sandwich') 
console.log(allMenuIdeas)  //returns ["Harvest Salad", "Southern Fried Chicken", "Club Sandwich"]
console.log(lunchMenuIdeas)  //because of object reference also returns ["Harvest Salad", "Southern Fried Chicken", "Club Sandwich"]

const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich')  //returns ["Harvest Salad", "Southern Fried Chicken", "Club Sandwich"]
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken']  //now returns original array ["Harvest Salad", "Southern Fried Chicken"]

const allMenuIdeas = [...lunchMenuIdeas]  //using array spread operator to make a copy of lunchMenuIdeas
allMenuIdeas.push('Club Sandwich')  //can now use push w/o mutating original arry. 
console.log(allMenuIdeas)  //returns original array ["Harvest Salad", "Southern Fried Chicken"]

/* MOLD ARRAYS WITH THE SPREAD OPERATOR: the spread operator is arguably the most simple and intuitive way to create and order new arrays. 

unshift() method adds elements to beginning of array, and like pop() mutates the original array. 
can also use the array spread operator to push items to front of array in non-mutating way. 
can use the array spread operator to direct the elements positions within the arrays: 
[...breakfastMenuIdeas, ...allMenuIdeas] -> breakfastMenuIdeas elements will be in position 0, allMenuIdeas elements will be in 2nd 

because of array spread operator, do not have to remember array positional methods like unshift(), push() and pop() if i want to position
elements in an array that i am creating. 

cannot use the spread operator to remove items from an array. but can use the non-mutating method slice(), which returns a brand new array.
slice() requires a starting index (element where i want to start slicing) and ending index (element where i want slicing to end).
slice(1, 3) means begin with element 1 and end slicing at element up to but excluding element 3. 
*/
const breakfastMenuIdeas = ["Buckwheat Pancakes"] 
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"] 
const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"] 

const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas]  //spreading 2 arrays into new array in preserved order. 
console.log(otherMenuIdeas)  //returns ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken"]

const allMenuIdeas = [
    ...breakfastMenuIdeas, //adding the breakfast menu items to the beginning of array w/o conflicting with other array elements
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas ////adding the dinner menu items to the end of array w/o conflicting with other array elements
] 
console.log(allMenuIdeas)  //returns ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken, "Glazed Salmon", "Meatloaf", "American Cheeseburger"]
console.log(allMenuIdeas.slice(1, 3))  //returns ["Harvest Salad", "Southern Fried Chicken"]

/*change Harvest Salad to Garden Salad in the array. findIndex() returns the index of the element. finding this 
element based on a certain condition, so need a callback function that iterates thru each element in the array (call each element 'idea').
for 1st case looking for the idea of 'Harvest Salad' and store result in a variable called saladIndex. 

this updated array will be put into a new array called finalMenuIdeas. within finalMenuIdeas want to spread in allMenuIdeas array at the 
beginning. but just want to get the slice of the array from the beginning position up to the saladIndex. for next element, perform 
the update that i want which is to change the text from Harvest Salad to Garden Salad. to get the last half of array, from saladIndex 
afterwards, slice after the new element to the end. to achieve this, again spread in allMenuIdeas, chain on slice() with beginning 
position as saladIndex+1. if 2nd position is not provided, slice() will include the remaining elements after the saladIndex+1.  

to remove Meatloaf from array, create a variable that holds the index of the Meatloaf element. recreate array by spreading allMenuIdeas
in, chain on slice method() and get everything up to the Meatloaf index. then spread in the 2nd half of the array which includes all 
elements after the Meatloaf element. */

//program updates menu item Harvest Salad to Garden Salad. 
const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad') 
const finalMenuIdeas = [
    ...allMenuIdeas.slice(0, saladIndex),
    "Garden Salad",
    ...allMenuIdeas.slice(saladIndex + 1)
  ] 
  console.log(finalMenuIdeas)  //returns ["Buckwheat Pancakes", "Garden Salad", "Southern Fried Chicken, "Glazed Salmon", "Meatloaf", "American Cheeseburger"]

//program excludes the Meatloaf element from array. 
const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf') 
const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1) 
] 
console.log(finalMenuIdeas)  //returns ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken, "Glazed Salmon", "American Cheeseburger"]

/*MORE FLEXIBLE WAYS WITH DESTRUCTURING */
const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ] 
  //assigning array elements by to variables based upon position
  let first = finalMenuItems[0] 
  let second = finalMenuItems[1] 
  let third = finalMenuItems[2] 
  console.log(first, second, third)  //returns American Cheeseburger,"Southern Fried Chicken","Glazed Salmon"

/*object destructing makes getting values from objects easier.  arrays also have destructuring. just like object destructuring, can 
declare multiple variables at once on a single line. 

can use destructuring and the equal sign to put elements into individual variables. the 1st array element is put into the 
variable called first because the variable first is in the 1st position of the destructuring statement. the second element is put into 
the variable in the 2nd position called second  and 3rd array element is put into the 3rd variable third. 

array destructuring does not mutate the original array. 

using destructuring, put array elements and put them into individual variables. */
const [first, second, third] = finalMenuItems  //returns American Cheeseburger,"Southern Fried Chicken","Glazed Salmon"

/*do not have to destruct all elements. if i do not want to destruct 'Glazed Salmon', just remove reference to the 3rd variable in the
destruct statement. const [first, second] = finalMenuItems  */
const [first, second] = finalMenuItems  //only destructing 1st and 2nd elements. returns American Cheeseburger,"Southern Fried Chicken"

/*to see the name of the variable  and its respective value, can use a trick with the object shorthand syntax when the object property
and value have the same name. the trick is to wrap each log value with a set of curly braces to make the variable a key/value pair on an 
object literal. this allows me to see whats in the variable to ensure its been updated correctly.   */
console.log({ first },{ second })  //returns {first: "American Cheeseburger"},{second: "Southern Fried Chicken"}

/*to swap the variable names, meaning to swap the positions of the first and second elements  put the variables i want to swap into a 
new array literal [first, second] and destructure again [second, first]. need to enable reassignment for this to work. */
let [first, second] = finalMenuItems   //changing const to let. const will not allow variables to change
console.log('before', { first },{ second }) 
[second, first] = [first, second] 
console.log('after', { first },{ second })  /*returns
before,{first: "American Cheeseburger"},{second: "Southern Fried Chicken"}
after,{first: "Southern Fried Chicken"},{second: "American Cheeseburger"}
*/

/*to put American Cheeseburger into a separate array:
1. reference the array containing American Cheeseburger (will go on right hand side of equation)
2. write destructuring assignment [] (will go on the left hand side of equation )
3. use const keyword because declaring a new variable
4. want destructuring statement to correspond to the value i am destructuring in the array. in this example, only destructuring one 
value  which is in the 1st position/element of array. const [winner] = finalMenuItems 

to put the remaining 2 items in a separate array, use the rest operator (...) which is used specifically for destructuring statements.
1. to get the rest of the values, use 3 dots followed by a variable  which will be used to store the rest of the values/put into. 
the rest operator will create a new array:
...losers */
const [winner, ...losers] = finalMenuItems  //
console.log({ winner, losers }) /* console logging values in an object. returns winner as the 1st element and losers is a brand new array
{winner: "American Cheeseburger", losers: ["Southern Fried Chicken", "Glazed Salmon"]}
*/

/* Challenge: In our restaurant, the chef has some favourite dishes in two different categories.
The chef loves all dishes that start with "S", while the rest are regular dishes.
Use array destructoring to create arrays of the chefs favourite dishes of meat and
fish, and to create arrays of the regular meat and fish dishes */
const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let chefsFishDishes 
let regularFishDishes 
let chefsMeatDishes 
let regularMeatDishes 

/*
let [chefsFishDishes, ...regularFishDishes] = fishDishes will return 'Salmon Rillettes' as the 1st element of the
array because chefsFishDishes aligns with the 1st element of the array in fishDishes. using spread operator  
to put the remaining elements of fishDishes into the array.  spread operator will take the remaining elements 
'Grilled Tuna Provencal' and 'Fish and Chips' and put them in the array as the 2nd element. 

let [regularMeatDishes ,...chefsMeatDishes] = meatDishes will return 'Lasagna' as the 1st element because it aligns 
with the 1st element of the array in meatDishes. the remaining elements 'Spaghetti' and 'Satay Chicken Skewers' will
be placed as the 2nd elements in the array because of spread operator. 
*/
let [chefsFishDishes, ...regularFishDishes] = fishDishes 
let [regularMeatDishes ,...chefsMeatDishes] = meatDishes 
console.log(chefsFishDishes)  //returns Salmon Rillettes
console.log(regularFishDishes)  //returns ["Grilled Tuna Provencal", "Fish and Chips"]
console.log(regularMeatDishes)  //returns Lasagna
console.log(chefsMeatDishes)  //returns ["Spaghetti", "Satay Chicken Skewers"]

/*using the spread operator to create thee two arrays chefDishes and regularDishes.
for chefDishes, using spread operator to put the results of chefsMeatDishes as an the 1st element in the array. 
although chefFishDishes was the 1st element above, it will now be the 2nd element in the chefsDishes array. 

for regularDishes, using spread operator to put the results of regularFishDishes as an the 1st element in the array.
although regularMeatDishes was the 1st element above, it will now be the 2nd element in the regularDishes array.
*/

let chefsDishes = [...chefsMeatDishes, chefsFishDishes]
let regularDishes = [...regularFishDishes, regularMeatDishes] 
console.log(chefsDishes)  //returns ["Spaghetti", "Satay Chicken Skewers", "Salmon Rillettes"]
console.log(regularDishes)  //returns ["Grilled Tuna Provencal", "Fish and Chips", "Lasagna"]

/**TURN OBJECTS TO FLEXIBLE ARRAYS */