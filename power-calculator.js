function powercalc(num, exp){
  if(exp < 0){
    return "Exponent number must be greater than or equal to 0"
  }
  
  //base case
  if(exp === 0){
    return 1}
  
  //general case
  return 
      num * powercalc(num, exp-1)
}

powercalc(10,2)
    
