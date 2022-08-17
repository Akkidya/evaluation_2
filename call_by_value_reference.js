//Call by value
   let x = 10;
   let y = x;
    x = 20;
    console.log("value of x ",x);
    console.log("value of y ",y);
//Call by Reference
let shopDetails = {

    unit : 20
};

function updateDetails(shop){
    shop = shopDetails.unit++;
}
updateDetails(shopDetails);
console.log("Updated" , shopDetails);