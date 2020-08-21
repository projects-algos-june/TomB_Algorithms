// 0(n^2) time | 0(1) space
//twoNumberSum
// var array = [3, 5, -4, 8, 11, 1, -1, 6] 
// var targetSum = 10
// function twoNumberSum(array, targetSum) {
//     for (let i = 0; i < array.length - 1; i++) {
//           const firstNum = array[i];
//           for (let j = i + 1; j < array.length; j++) {
//               const secondNum = array[j];
//               if (firstNum + secondNum === targetSum) {
//                   return [firstNum, secondNum];
//           }
//       }
//   }
//   return [];
//   }
//   console.log(twoNumberSum(array, targetSum));

  // 0(n) time | 0(n) space
// var array = [3, 5, -4, 8, 11, 1, -1, 6] 
// var targetSum = 10
// function twoNumberSum(array, targetSum) {
// 	const nums = {};
// 	for (const num of array) {
// 		const potentialMatch = targetSum - num;
// 		if (potentialMatch in nums) {
// 			return [potentialMatch, num];
// 		} else {
// 			nums[num] = true;
// 		}
// 	}
// 	return [];
// }
// console.log(twoNumberSum(array, targetSum));

// 0(nlog(n)) | 0(1) space
var array = [3, 5, -4, 8, 11, 1, -1, 6] 
var targetSum = 10
function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b);
      let left = 0;
      let right = array.length - 1;
      while (left < right) {
          const currentSum = array[left] + array[right];
          if (currentSum === targetSum) {
              return [array[left], array[right]];	
          } else if (currentSum < targetSum) {
              left++;
          } else if (currentSum > targetSum) {
              right--;
          }
      }
      return [];
   }
   console.log(twoNumberSum(array, targetSum));