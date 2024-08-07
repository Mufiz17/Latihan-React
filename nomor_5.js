const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);


const obj1 = { ganjil: 1, genap: 2 };
const obj2 = { cacah: 3, prima: 7 };

const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);
