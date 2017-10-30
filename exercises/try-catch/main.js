// try {
//   var myName = "John Doe";
//   console.log(myName); //name returns a reference error, must be changed to myName
// }catch(e){
//     if(e instanceof ReferenceError){
//         console.log('This was a reference error');
//     }else if (e instanceof TypeError){
//         console.log(e);
//     }else {
//         console.log('It was neither a TypeError or ReferenceError');
//     }
// }

try {
  function movieCheck(age) {
    if(age < 0) {
      throw "Error cannot be less than 0";
    } else if(age <= 12) {
      console.log("You can see PG movies");
    } else if(age >= 13 && age < 18) {
      console.log("You can see PG-13 movies");
    } else if(age >= 18) {
      console.log("You can see R rated movies");
    }
  }
  movieCheck();  
}catch(e){
    if(e instanceof ReferenceError){
        console.log('This was a reference error');
    }else if (e instanceof TypeError){
        console.log(e);
    }else {
        console.log('It was neither a TypeError or ReferenceError');
    }
}
