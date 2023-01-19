// function countDown(n) {
//   // for (let i = n; i >0; i--) {
//   //     console.log(i)

//   // }
//   console.log(n);
//   n--;
//   if (n > 0) {
//     countDown(n);
//   }
// }

// countDown(10);

// function sumOfNumber(n){
//     let sum = 0;
//     for(let i = n; i>=0; i--){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sumOfNumber(10));

// function sumOfNumber(n) {
//   if (n < 0) {
//     return 0;
//   }
//   return n + sumOfNumber(n - 1);
// }

// console.log(sumOfNumber(10))

function sumOfArraySloe(arr) {
  if (arr.length === 0) return 0;
  
  let rest = arr.slice(1);
  
  return arr[0] + sumOfArraySloe(rest);
}

// console.log(sumOfArray([2,3,5]))

function sumOfArrayFast(arr) {
    return helperSum(arr, 0);
}

function helperSum(arr, index) {
    if (arr.length === index) return 0;
    
    return arr[index] + helperSum(arr, index + 1);
}

// console.log(input)
let input = new Array(900).fill(1);

let now = Date.now();
console.log(sumOfArraySloe(input));
let finsh = Date.now();

console.log(`time elapsed for slow function:${ finsh - now}`);

now = Date.now();
console.log(sumOfArrayFast(input));
finsh = Date.now();

console.log(`time elapsed for fast function:${finsh - now}`);
