const array_one = ["one", "two", "three"]

const array_two = ["four","five","six"]

const array_two1 = ["four","five","six"]



//array_one.push(array_two);

// array_one.concat(array_two);
const array_three = array_one.concat(array_two);

const array_four = [...array_one, ...array_two, ...array_two1]

console.log(array_four) 
// console.log(array_one)

const array_another = [1 ,2 ,4, [4, 5,6], 4,6,7,8,[5,7,[7,8],9]]

const real_array = array_another.flat(1)

console.log(real_array)

console.log(Array.isArray(real_array));
console.log(Array.from("yogeshwar11234"));
console.log(Array.from({name: "yogesh"}));