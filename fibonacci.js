

function fibonacci(number, array){
  if(number ===1){
    console.log(array)
    return number;
  }
  else if{ 
      (number === 2){
        return 1
      }
   
  else {  
   let sequencenum = 
       fibonacci(number -1, array) + fibonacci(number -2, array);
      array.push(sequencenum);
    return sequencenum
  }
 
 return fibonacci;
  }
  
  console.log(fibonacci(7, []))
    
   
