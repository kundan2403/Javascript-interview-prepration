/* cal sum to array elemennt */ 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = arr.reduce((acc, current) => {
    return acc + current
}, 0)

console.log(sum);
 
/* cal max elm from array */

let max = arr.reduce((acc, current) => {
    return current > acc ? current : acc
}, arr[0])
console.log(max)

/* cal min elm from array */

let min = arr.reduce((acc, current) => current < acc ? current : acc);
console.log(min) 

/* cal avg of element from array */ 

let avg = arr.reduce((acc, current, _ , arr) => acc + current / arr.length, 0)
console.log(avg)

/* Flatten arrary of arrays */ 

let arr_1 = [[1, 2, 3, 4], [5, 6, 7, 8, 9, 10]]

let f_arr = arr_1.reduce((acc, current) => {
    return acc.concat(current)
}, []);

console.log(f_arr)

/* remove duplicate from array */ 

let arr_2 = [1, 2, 2, 4, 5, 3, 3, 5,6,7]

let u_arr = arr_2.reduce((acc, current) => {
    if(!acc.includes(current)) {
        acc.push(current)
    }
    return acc
},[])
console.log(u_arr)

/* groupby element */

let arr_3 = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 22 },
  ];

let groupByAge = arr_3.reduce((acc, current) => {
    if(!acc[current.age]) {
        acc[current.age] = [];
    }
    acc[current.age].push(current);
    return acc
}, {});
console.log(groupByAge)

/* implementing map function with reduce */ 

let arr_4 = [1,2,3,4,5]

let double = arr_4.reduce((acc, current) => { 
    acc.push(current * 2);
    return acc;
}, []);
console.log(double)

/* implement filter function with reduce */ 

let fltr_ = arr_4.reduce((acc, current) => {
    if(current % 2 == 0) {
        acc.push(current)
    }
    return acc
}, []);
console.log(fltr_);

/* longest string */

let arr_5 = ['short', 'longer', 'longest', 'mid'];

let lng_arr = arr_5.reduce((acc, current) => {
    return current.length > acc.length ? current : acc
}, arr_5[0]);

console.log(lng_arr)