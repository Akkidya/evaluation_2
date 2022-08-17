//Function Parameters
function tax(cost,tax=18){
        let totalCost = cost * (tax / 100);
        console.log(`\tyour cost is ₹${cost}\n
        your tax is ₹${totalCost}\n
        total amount is ₹${ cost + totalCost}`);
    };
    tax(45);