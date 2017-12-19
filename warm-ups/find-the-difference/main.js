function findDiff(arr1,...arrs) {
    const combinedArgs = [].concat.apply([], arrs);
    const combined = [];
    arr1.push(...combinedArgs)
    combined.push(...arr1)
    const unique = combined.filter(item => {
        return combined.indexOf(item) === combined.lastIndexOf(item)
    })

    return unique
}

findDiff([4,2], [3,2], [1]);
