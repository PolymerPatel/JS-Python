// Escaping Characters in Strings
console.log("\" '  ");  // Prints: " '
console.log("hello\n\tworld");  // Prints: hello (newline)    world (tabbed in)

// Template Literals (use backticks ` ` for embedding expressions)
const str = `hello ${7 > 5} world`;
console.log(str);  // Prints: hello true world

// String Methods

const str1 = "hello world";

// .slice() - Extracts a part of the string
const str2 = str1.slice(6);  // Starts from index 6 to the end
console.log(str2, str1);  // Prints: world hello world

// .replace() - Replaces a part of the string
const str3 = str1.replace("hello", "!");
console.log(str3);  // Prints: ! world

// .toUpperCase() - Converts string to uppercase
const str4 = str1.toUpperCase();
console.log(str7);  // Prints: HELLO WORLD

// .split() - Splits a string into an array of words
const str5 = "Hello World my name is Roger";
const arr = str5.split(" ");  // Splits at each space
console.log(arr);  // Prints: [ 'Hello', 'World', 'my', 'name', 'is', 'Roger' ]

// Exercise: Create a string and use the methods above
const str6 = "hello everyone";
const str7 = str6.slice(0, 5);  // Extracts from index 0 to 5 (not including 5)
console.log(str7);  // Prints: hello


// Practice Problem: 
// Write a function that splits a string into words, ignoring multiple spaces between them.
// The function should also trim leading and trailing spaces from the string.



function splits(hello) {
  const array = hello.split(" ");
  const array2 = hello.trim();
  return {array, trimmedString: array2};
}

console.log(splits("Hey everyone. Beautiful weather we're having."));

const result = splits("Hey everyone!");
console.log(result.array);
console.log(result.trimmedString);
