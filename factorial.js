

function factorial(n){
  if(n === 1){
    return "number must be greater than 1"
  }
  
  else{
    return n * factorial(n -1)
  }
  
  console.log(factorial(5))
