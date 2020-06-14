// Assignment folder
// To Do 1
// Push Front  
// var arr = [1,2,3,4,5]
// function pushFront(arr, value) {
//     var value = (12)     
//     arr.unshift(value);
//     return arr;
// }
// console.log(pushFront(arr));

// Pop Front
// var arr = [1,2,3,4,5]
// function popFront(arr) {
//     let temp = arr[arr.length-1];
//     arr[arr.length-1] = arr[0];
//     arr[0] = temp;
//     return arr.pop()
// }
// console.log(popFront(arr));

// Insert at/ Remove at

// function insertAt(arr, ind, val) {
//     arr[arr.length] = val;
//     for (var x = arr.length-1; x > ind; x--) {
//         var temp = arr[x];
//         arr[x] = arr[x-1];
//         arr[x-1] = temp;
//     }
//     return arr;
// }

// Swap Pairs
// var arr = ["Brendan",true,42]
// function swap(arr) {
//     if (arr.length%2 == 0) {
//         for (var x = 0; x < arr.length; x+=2) {
//             var temp = arr[x];
//             arr[x] = arr[x+1];
//             arr[x+1] = temp;
//         }
//     } else {
//         for (var x = 0; x < arr.length-1; x+=2) {
//             var temp = arr[x];
//             arr[x] = arr[x+1];
//             arr[x+1] = temp;
//         }
//     }
//     return arr;
// }
// console.log(swap(arr));


// Remove Duplicates
// var arr = ["tom","danny","Jim","tom","greg","jim"]
// function removeDups(arr) {
//     var idx = 0;
//     var count = 1;
//     while (count < arr.length) {
//         if (arr[idx] == arr[count]){
//             count++;
//         } else {
//             arr[idx+1] = arr[count];
//             idx++;
//             count++;
//         }
//     }
//     for (var x = 0; x < idx; x++) {
//         arr.pop();
//     }
//     return arr;
// }
// console.log(arr);

// Min to Front

// var arr = [4,2,1,3,5]
// function minToFront(arr) {
//     var min = arr[0];
//     var idx = 0;
//     for (var i = 1; i < arr.length; i++){
//         if (arr[i] < min) {
//             min = arr[i];
//             idx = i;
//         }
//     }
//     for (var x = idx; x > 0; x--){
//         var temp = arr[x];
//         arr[x] = arr[x-1];
//         arr[x-1] = temp;
//     }
//     return arr;
// }
// console.log(minToFront(arr));


To Do 2

function reverse(arr) {
    // loop through half of the array
    for(var i=0; i<arr.length/2; i++) {
        // swap values across midpoint
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

function rotate(arr, shiftBy) {
	let t = Math.abs(shiftBy);
	while(t > 0) {

		if(shiftBy > 0) {
			let temp = arr[arr.length-1]
			
			for(let i = arr.length - 1; i > 0; i--)
				arr[i] = arr[i-1];
			arr[0] = temp;

		} else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
		}
		t--;
	}
}

function filterRange(arr, min, max) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > min && arr[i] < max) {
			for(let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
			i--;
		}
	}
}

Working on Concat and all of these over and over!