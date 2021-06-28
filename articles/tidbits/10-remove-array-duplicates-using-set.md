# Remove Array Duplicates Using ES6 Set

Remove Array Duplicates using ES6 Set.

“Set” is a data structure that stores unique values. It doesn’t allow you to add duplicates. This makes it ideal for us to use to remove duplicates from an Array. BUT, Set is not an array, that’s why we need to convert the Set back into an Array in order to use array methods such as .map or .reduce

1. Remove duplicates using “new Set”
2. Convert it back to an array using “Array.from”

```javascript
const duplicates = [1, 2, 3, 4, 4, 1];

const uniques = Array.from(new Set(duplicates));

console.log(uniques); // [1,2,3,4]
```

Alternatively, you can use the spread operator to convert the Set to an Array.

```javascript
const duplicates = [1, 2, 3, 4, 4, 1];

const uniques = [...new Set(duplicates)];

console.log(uniques); // [1,2,3,4]
```
