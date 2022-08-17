//difference between map(),reduce() and filter()
let market = [
    {id : 1 , material : "vegetable" ,stock : 2500, cost : 250},
    {id : 2 , material : "fruits" ,stock : 1500, cost :600},
    {id : 3 , material : "washing_product" ,stock : 3500,cost : 200},
];

let stock = market.filter((val) => val.material == "vegetable")
.map((val) => val.material + " " + val.cost
).reduce((acc,val) => acc + val.cost)
console.log(stock);