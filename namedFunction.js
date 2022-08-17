//named function
function test() {
    console.log (`This is a ${this.func}`);
}
const func = {
    func: 'named function!',
    test
}
func.test();

   //declaring variable to a function
   var test = function () {
    console.log("This is an anonymous function!");
 };
 test();