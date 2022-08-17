function missing(arr){
    let misArray = [];

    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);

    for (let i = minNum; i < maxNum; i++){
        if(arr.indexOf(i) < 0){
            misArray.push(i);
        }
    }
    return misArray;
}
console.log(missing([1,2,3,5,6]));