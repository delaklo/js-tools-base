# js-tools-base
A ligthweight javascript tool library for various needs.

## Version 1.0.0
There are only 6 js tools such as isObject, isDate, isEmptyOrOnlySpacesString, getTimeZone, doesObjectHasEmptyProperties, isSorted, shuffleArray.

## Installation
```sh
$ npm install js-tools-base
```

## List of tools
<b>isObject()</b><br>

Check is that object in argument of function or not.
```js
console.log(isObject({ "id": 123, "message": "hello Iphone" })); //true
console.log(isObject('some string')); //false
```

<b>isDate()</b><br>

Checks is that date in argument of function or not.
```js
let date = Date.now();
console.log(isDate(date)); //true
```

<b>isDate()</b><br>

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

<b>doesObjectHaveEmptyProperties()</b><br>

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
console.log(doesObjectHaveEmptyProperties(obj));
console.log(doesObjectHaveEmptyProperties(data));
```

<b>IsSorted()</b><br>

Checks is sorted array in argument of function or not.
```js
console.log(isSorted([1,3,4,9,13])); //true
console.log(isSorted([5, 7, 1, 67])); //false
```

<b>shuffleArr()</b><br>

Shuffles the values of an array, returning a new array.
```js
let arr = [4, 6, 7, 9];
console.log(shuffleArray(arr)); //[7, 4, 9, 6]
```

## Follow me and my email to cooperate

[Twitter](https://twitter.com/delaklo)

delaklovp@gmail.com
