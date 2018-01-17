function removeDuplicate(arr){
  //search each item in the array and see if it matches the current item
  const newArray = [];
  for (let i = 0; i < arr.length; i++){
    console.log(arr.indexOf(arr[i]));
    if (arr.indexOf(newArray[i] === -1)) {
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}

removeDuplicate([1,3,3,3,1,5,6,7,8,1]) //=> [1, 3, 5, 6, 7, 8]
