//Recursive Sigma

//   function rSigma(n) {
//       if (n < 1) return 0;

//       return n + rSigma(n - 1);
//   }
//   console.log(rSigma(5));

  //Recursive Factorial

//   function rFact(n) {
//       if (n === 2) return 2;
//       return n * rFact(n - 1);
//   }
//   console.log(rFact(3));

//To Do 3
//Recursive Binary Search

// let sortedArray = [2, 4, 6, 8, 10, 11,15, 17, 19, 21];
// function rBinarySearch(arr, target) {
//     //Base Case
//     if (arr.length === 0) 
//     return false;

//     let midIndex = Math.floor(arr.length / 2);
//     let leftArr = arr.slice(0, midIndex);
//     let rightArr = arr.slice(midIndex + 1);

//     //Recursive Case
//     if (target < arr[midIndex]) {
//         return rBinarySearch(leftArr, target);
//     }   else if (target > arr[midIndex]) {
//         return rBinarySearch(rightArr, target);
//     }   else {
//         return true;
//     }
// }

// console.log(rBinarySearch(sortedArray, 9));
// console.log(rBinarySearch(sortedArray, 8));


//Greatest Common Factor
// function rGCF(param1, param2) {
//     if (param1 == param2) {
//         return param1;
//     }
//     if (param1 > param2) {
//         return rGCF(param1-param2, param2);
//     }
//     if (param1 < param2) {
//         return rGCF(param1, param2-param1);
//     }
// }

// console.log(rGCF(3, 7));   
// console.log(rGCF(18, 27)); 
// console.log(rGCF(49, 14));

//GCF Second

// function rGCF(param1, param2) {
//     if (param1 == param2) {
//         return param1;
//     }
//     if (param1 > param2) {
//         if ((param1/param2) % 1 === 0) {
//         return param2
//     } else {
//         return rGCF(param1-param2, param2);
//     }
// }
// if (param1 < param2) {
//     if ((param1/param2) % 1 === 0) {
//     return param2
// } else {
//     return rGCF(param1, param2-param1);
//     }
// }
// }

// console.log(rGCF(123456, 987654));

