/* creating array */ 

const arr_1 = new Array()
const arr_2 = new Array(3)
const arr_3 = new Array(1,2,3,4,5)
console.log(arr_1, arr_2, arr_3)

/* array literal */ 

const arr_4 = [1,2,3,4,5,6,7,8,9]
console.log(arr_4)

/* array property */ 
console.log(arr_4.length)

/* array Method */ 

const arr_5 = Array.from(arr_4)
console.log(arr_5)

const arr_6 = Array.of(1,2,3)
console.log(arr_6)

console.log(Array.isArray(arr_6))


/*  Array Prototype Methods */ 

const arr_7 = arr_1.concat(arr_2);
console.log(arr_7)

const arr_8 = arr_7.fill(1);
console.log(arr_8);

const arr_9 = arr_4.copyWithin(0, 3);
console.log(arr_9);

const pop_elm = arr_9.pop();
console.log(pop_elm);

const arr_10 = arr_9.push(13);
console.log(arr_10);

const arr_11 = [101, 102, 103];
console.log(arr_11, arr_11.shift(), arr_11)

const arr_12 = [106, 107, 108, 109, 110]
console.log(arr_12.unshift(104, 105));
console.log(arr_12)


/*  Array Prototype Methods */ 

arr_12.forEach(elm => console.log(elm));
const arr_13 = arr_12.map(elm => elm * elm);
console.log(arr_13);

const sum = [100, 1000, 10000].reduce((acc, current) => acc + current, 0)
console.log(sum)

const odd_arr = [100, 200, 300, 400, 500, 600, 700, 800].filter(item => ! (item % 2))
console.log(odd_arr);

['a', 'b', 'c'];
let str_1 = ['a', 'b', 'c'].reduceRight((acc, current) => acc + current)
console.log(str_1)

const arr_15 = [1, 2, 3, 4];
const hasEven = arr_15.some(x => x % 2 === 0);
console.log(hasEven); // true

const eachEven = arr_15.every(x => x % 2 === 0)
console.log(eachEven);
const firstEven = arr_15.find(x => x % 2 === 0);
console.log(firstEven); 

const firstEvenIndex = arr_15.findIndex(x => x % 2 === 0);
console.log(firstEvenIndex);

console.log(arr_15.includes(2), arr_15.indexOf(2), arr_15.lastIndexOf(2))
console.log(arr_15.join('_'))

console.log(arr_15.reverse())
console.log(arr_15.sort())
console.log(arr_15.slice(0, 4))
console.log(arr_15.slice(0, 4))
console.log(arr_15.splice(1, 2, 'a', 'b'));