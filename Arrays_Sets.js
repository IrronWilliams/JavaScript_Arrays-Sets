/*BUILD FLEXIBLE COLLECTIONS WITH ARRAYS 

Objects are great to use when i know exactly what i need to update, according to its key. And objects do not preserve 
the property order. So will not know anything about the 1st or last entry in the object. So removing the last property added to the 
object will not be possible. These are some of the limitation of objects. 

program manages the list of tasks on the todos object. each task is organized as objects. */
const todos = {} 

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

Program below creates an array of objects. 

*/
const todos = [] 

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

some() method returns true or false 

getting access to each element with callback function. call each element in the parameters at temperatures. in the function body,
want to know if the array elements had record breaking temperatures, or isRecordTemp true. this could be checked/evaluated with statement
temperature.isRecordTemp === true. because some() returns the value true or false. some() will get the result of true/false from the 
callback function i passed to it (temperature => temperature.isRecordTemp === true), need to ensure that i return the results of the 
comparison from the body. once some() finds the element of the array that evaluates as true, some() will stop iterating over the array 
and return the value true. so at least one element needs to match the condition provided to some() for it to return true, if not, will 
return false and therefore iterate thru all of the elements. 
*/
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
] 

const result = temperatures.some(temperature => temperature.isRecordTemp === true) //arrow functions have implicit return, can write code like this 
console.log(result) 