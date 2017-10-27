function isThereAnA(str, char){
    for(var i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === char){
            return "There is a " + char + " in your word"
        }

    }
    return "There is no " + char + " in your word"
}

console.log(isThereAnA("Dog", "o"));
console.log(isThereAnA("Cat", "a"));
console.log(isThereAnA("Monkey", "x"));
