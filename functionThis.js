// this keyword using function
const channel = {
    title : "javascript",
    languages : ["tamil","malayalam","telugu","english"],
    
    showChannel(){
      this.languages.forEach((lang) => {
           console.log(this.title + " - "+ lang.toUpperCase());
      } );  
    }
};
channel.showChannel();
//this keyword using class
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const person1 = new Person('My name is Akash');
  
  console.log(person1.name);