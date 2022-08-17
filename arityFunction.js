//Arity function
function multiply(a) {
    return b => {
      return c => {
        return a * b * c;
      };
    };
  }
  
  console.log('arity Function', multiply(1)(2)(3));