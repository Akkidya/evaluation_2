//this keyword.
let person = {
    name : "Akash",
    age : 21,
    detail:function(){
        console.log(this.name);
    }
}
person.detail()