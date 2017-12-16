console.log(deepEqualsObject(func("vs$ cv"), {v: 2, s: 1, c: 1}))

function func(str){
    return str.toLowerCase().split("").reduce((prev, char) => {
        if (!char.match(/[a-z]/)) return prev
        if (prev[char]){
            prev[char]++
        } else {
            prev[char] = 1
        }
        return prev
    }, {})

}

function deepEqualsObject(output, expectedOutput){
    for (key in output){
        if (output[key] !== expectedOutput[key]) return false
    }
    return true
}
