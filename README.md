# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ryan_williams/lotide`

**Require it:**

`const _ = require('@ryan_williams/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Logs to the console an assertion that the arrays are equal or are not equal.
* `assertEqual(a, b)`: Logs ot the console an assertion that two primitive datatypes either match or do not match using `===`.
* `assertObjectsEqual(obj1, obj2)`: Logs to the console an assertion if two objects match or do not match.
* `countLetters(string)`: Counts the charcters in a string, disregarding spaces.
* `countOnly(allItems[array], itemsToCount[object])`: Searches the allItems array for the keys in the itemsToCount object, counts there occurances for keys with value true.
* `eqArrays(arr1, arr2)`: Checks if two arrays match and returns a boolean.
* `eqObjects(ob1, ob2)`: Checks two objects match and returns  a boolean.
* `findKeyByValue(obj, value)`: searches for a value amonst an objects values and returns the key string on the match'
* `findKey(obj, callback)`: takes an object and a callback, checks the object against the callback and returns the property where the callabck === true
* `flatten(array)`: takes in an array with nested arrays and returns it as a single level array
* `head(array)`: returns the first element of array without mutating the original
* `letterPositions(string)`: returns an object of key:value pair where the key is a character, and the value is how many times that char appears in the string. 
* `map(array, callback)`: takes in an array and a callback and returns a new array with the callback applied to each element;
* `middle(arr)`: takes in a array and returns the value or values of the middle indexs
* `tail(arr)`: takes in an array and returns an array that is identical but without the first element.
* `takeUntil(arr, callback)`: take in an array and a condition, will push elements to anew array until condition is met, will return that new array.
* `without(arr, arr)`: takes in 2 arrays, will return a new array identical to arr1 without the elements listed in arr2.