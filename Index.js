let ages = [12,23,34,45,56,67,78,89];
console.log(ages);
console.log(ages[2]);

let random = [12,34,45,56,'James','David'];

console.log(random.length); // Can be used in both string and array and it returns numbers of elements

// Array Methods

let result = random.join('+');
console.log(result);

let resultIndex = random.indexOf('James');
console.log(resultIndex);

let resultConcat = random.concat("Maria","Angelina",34,45);
console.log(resultConcat);

let resultPush = random.push("Kriss");
console.log(resultPush); // Gieves length
console.log(random); // Alter the original value which called distructive method

let resultPop = random.pop();
console.log(random);
console.log(resultPop); // Returns the poped value