function adjacentDiff(arr) {
  let combinedThrees = [];
  for (let i = 0; i < arr.length - 2; i++) {
    combinedThrees[i] = arr[i].length + arr[i + 1].length + arr[i + 2].length;
  }
  let index = combinedThrees.indexOf(Math.max(...combinedThrees));
  (arr.length < 3) ? console.log(arr) : console.log(arr[index], arr[index + 1], arr[index + 2]);;
}

adjacentDiff(['i', 'aaaa', 'cccc', 'sss', 's', 's', 's']);
