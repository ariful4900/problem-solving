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

function sumOfNumber(n){

    if(n<0){
        return 0;
    }
    return n + sumOfNumber(n-1)
}

// console.log(sumOfNumber(10))


// function sumOfArray(arr){
//     if(arr.length === 0) return 0

//     let rest = arr.slice(1);
    
//     return arr[0]+ sumOfArray(rest)
// }

// console.log(sumOfArray([2,3,5]))

function sumOfArray(arr){
    return helperSum(arr, 0)
}

function helperSum(arr, index){
    if(arr.length === index) return 0;

     return arr[index]+ helperSum(arr, index+1)
}

console.log(sumOfArray([2,3,5, 10, 10]))