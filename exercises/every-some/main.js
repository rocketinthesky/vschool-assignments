//This mimics the every method
// function every(arr, callBack) {
//     for (let i = 0; i < arr.length; i++){
//         if (!callBack(arr[i])){
//             return false
//         };
//     }
//     return true;
// }
//
// function callBack (theSingleNumber) {
//     return typeof theSingleNumber === "number"
// }
//
// console.log(every([1,2,"3"], callBack))


//This mimics the some method
function every(arr, callBack) {
    for (let i = 0; i < arr.length; i++){
        if (callBack(arr[i])){
            return true
        };
    }
    return false;
}

function callBack (theSingleNumber) {
    return typeof theSingleNumber === "number"
}

console.log(every([`1`, `2`, `3`], callBack))
