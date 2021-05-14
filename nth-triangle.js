

function triangularnumber(n){
  //base case
  if(n === 0){
    return 0
  }
  else {
  //general case
  return n + triangularnumber(n-1)
  }
}

console.log(triangularnumber(9))
  
