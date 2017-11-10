const str = `Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas`;
const array = str.split(" ");
let repeats = [];

const decipher =()=>{
for (i = 0; i < array.length; i++){
  if (array.includes(array[i]));
    repeats.push(array[i]);
    console.log(array[i]);
}
}
decipher(array);
console.log(repeats);
