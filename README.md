# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @josephkishiuchi/lotide`

**Require it:**

`const _ = require('@josephkishiuchi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(array): returns the value of the first element of a given array
* tail(array): returns an new array of a given array excluding the first element
* middle(array): returns an array of the middle value(s)
* flatten(array): flattens a given array and single level deep and returns a new array
* findKey(object, callback): returns the key of an object for which a callbac function is truthy
* findKeyByValue(object, value): returns the key of an object given its value
* countOnly(array, values): returns a count of array elements as an object only mentioned in values  
* countLetters(string): returns a count of each unique character in a string as  an object
* letterPositions(string): returns the positions of each unique character in a string as an object
* map(array, callback): Iterates through a given array and performs the callback function when it returns truthy
* takeUntil(array, callback): Returns an array starting from the first element until the callback returns truthy
* without(array, values): removes values from a given array and returns new array