# js-tools-base
[![NPM Version](https://img.shields.io/npm/v/js-tools-base)](https://www.npmjs.com/package/js-tools-base) <br>
A lightweight javascript tool library for various needs.

## Version 1.2.0
List of tools: isObject, isEmptyOrOnlySpacesString, getTimeZone, doesObjectHaveEmptyProps, isSorted, shuffleArray, generateRandomIntList, randomInt.

## Installation
```sh
$ npm install js-tools-base
```
## Usage
```js
const { ExampleTool } = require("js-tools-base");
```
## List of tools
<b>isObject(object)</b><br>

Check is that object in argument of function or not.
```js
console.log(isObject({ "id": 123, "message": "hello Iphone" })); //true
console.log(isObject('some string')); //false
```

<b>isEmptyOrOnlySpacesString(string)</b><br>

Checks is string empty or has only spaces.
```js
console.log(isEmptyOrOnlySpacesString('Apple')); //false
console.log(isEmptyOrOnlySpacesString('')); //true
console.log(isEmptyOrOnlySpacesString('    ')); //true
console.log(isEmptyOrOnlySpacesString('Ap  p le')); //false
```

<b>getTimeZone()</b><br>

Gets the requester's time zone.
```js
console.log(getTimeZone()); //europe/kiev
```

<b>doesObjectHaveEmptyProperties(object)</b><br>

checks does object have blank properties.
```js
const obj = {
    name: "John",
    dataOfBirth: "",
    externalId: 2548,
    email: "john@email.com",
    mobile: ""
}

const data = {
    name: "Sal",
    dataOfBirth: "12.12.2012",
    externalId: 83838,
    email: "sal@email.com",
    mobile: "122344566"
}
console.log(doesObjectHaveEmptyProps(obj)); //dataOfBirth is empty, mobile is empty, other keys are filled
console.log(doesObjectHaveEmptyProps(data)); //other keys are filled
```

<b>IsSorted(array)</b><br>

Checks is sorted array in argument of function or not.
```js
console.log(isSorted([1,3,4,9,13])); //true
console.log(isSorted([5, 7, 1, 67])); //false
```

<b>shuffleArray(array)</b><br>

Shuffles the values of an array, returning a new array.
```js
let arr = [4, 6, 7, 9];
console.log(shuffleArray(arr)); //[7, 4, 9, 6]
```

<b>generateRandomIntList(length, max)</b><br>

Generates an array with random int values. First argument is the length of array, second is the max possible integer.
```js
console.log(generateRandomIntList(8, 100)); //[ 41, 4, 52, 9, 82, 50, 19, 60 ]
console.log(generateRandomIntList(5, 5)); //[ 1, 0, 2, 0, 4 ]
```

<b>randomInt(min, max)</b><br>

Generates an integer between the minimum given value and the maximum given value.
```js
console.log(randomInt(3, 576)); // 207
console.log(randomInt(50, 60)); // 58
```

<b>capitalizeFirstLetter(string)</b><br>

Capitalizes the first letter of a string.
```js
console.log(capitalizeFirstLetter('hello')); // Hello
console.log(capitalizeFirstLetter('')); // ''
```

<b>debounce(func, wait)</b><br>
Debounces a function to limit its execution rate.
```js
const log = debounce(() => console.log('Debounced!'), 1000);
log();
log();
log(); // Only this call will log 'Debounced!' after 1 second
```

<b>getQueryParams(url)</b><br>
Parses URL query parameters into an object.

```js
console.log(getQueryParams('https://example.com?page=1&sort=asc')); // { page: '1', sort: 'asc' }
```

<b>flattenArray(arr)</b><br>
Flattens a nested array.

```js
console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
```

## Follow me and my email to cooperate

[Twitter](https://twitter.com/delaklo)

delaklovp@gmail.com

<b>at least if one of the tools you like, please star the repo. if you have free time feel free to contribute to this library</b>

## To do

add to do
