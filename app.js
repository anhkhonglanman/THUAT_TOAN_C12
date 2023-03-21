
// kiểm tra dãy số tăng dần

// function tangDan(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i+1]) {
//             return false;
//         }
//     }
//     return true;
// }
// let arr1 = [1, 2, 3, 4, 5]
//
// console.log(tangDan(arr1));

// Hãy đếm giá trị trong mảng thỏa mãn: lớn hơn tất cả các giá trị đứng đằng trước nó

function maxIndex(arr) {
    let max = arr[0];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i] ;
            count ++
        }
    }
    return max
}

let arr = [1, 2, 3, 4, 5];

console.log(maxIndex(arr))

