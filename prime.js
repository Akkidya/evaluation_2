//prime number 1 to 200
let n = 6;
let isPrime = 0;
for (let i=1; i<=n; i++){
  if(n % i == 0)
   isPrime++
}
if(isPrime == 2){
  console.log(n,"is prime number")
}else{
  console.log(n,"is not prime number")
}