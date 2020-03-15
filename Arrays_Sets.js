/*BUILD FLEXIBLE COLLECTIONS WITH ARRAYS 

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

console.log(favouriteSongs)  //returns 'I Go Crazy', 'Your Smile', 'Tonight I Give', 'Just Because']
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

map() is an array method that allows me to transform each by passing it a function  similar to some() and every().
passing map() a function called temperature (because each element is a temperature), and in the function body within curly braces, 
for each temperature want to get the isRecordTemp property and set it to true. similar to sum() and every() the result of map() is 
immediately returned  but whats different about map() is that it transforms the entire array  and the returned value will be a brand 
new array of the exact same length. map() does not change or mutate the old/original array (the temperatures array in this case). create
this new array by returning the updated temperature. after map() has gone thru every array element and returned a value, can take the 
return value and put it in a new variable (newTemps in this case).

map() applies a given transformation that is specified in the callback function passed to the map() method to every single 
element of the array
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

/*using ternary operators to conditionally update array. map() coupled with conditionals are very powerful way to transform array data

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