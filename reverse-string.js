
function revstr(string){
  //base case
  if(string === 0){
    return ''
  }
  
  else{
  console.log(revstr(string[string.length -1]) + string[0])
  
  }
  
  revstr("Thinkful")
