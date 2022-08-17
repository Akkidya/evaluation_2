let n = 50;
let countZero = function(temp){
    let count = 0;
    while(temp){
      if(temp % 10 == 0){
        count++;
        temp/=10;
      }
      return count;
    }
}
let final = function(n){
  let finalCount = 1;
  for (let i =1; i<n; i++){
    finalCount += countZero(i);
  } 
  console.log(finalCount)
}
final(n)