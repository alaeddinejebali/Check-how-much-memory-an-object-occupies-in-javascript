# Check how much memory an object occupies in JavaScript
JavaScript does not provide a sizeof (like in C), and programmer does not need to care about memory allocation/deallocation. But how can we check how much memory an object occupies?

# Primitive types

Let's say that you have a string:

```js
var stringObject =  String("Ala Eddine JEBALI");
 ```
How to implement a memorySizeOf function which returns the memory size of stringObject?
```js
memorySizeOf(stringObject)
 ```
# Other objects
Let's say that you have this object:
```js
var personObject =  {persone: {name: 'Ala Eddine JEBALI', country: 'France', age: 30}};
 ```
How to implement a memorySizeOf function which returns the memory size of personObject?
```js
memorySizeOf(personObject)
 ```
# Remark
The result is of course the same when you want to check
```js
console.log( memorySizeOf(123) );
```
or
```js
console.log( memorySizeOf(Number(123)) );
```
The output is:
```sh
8 bytes
```
