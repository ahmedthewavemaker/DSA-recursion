

function stringsplitter(str, sep){
  //base case
  if(str.indexOf(sep) === -1){
    return [str.slice(0, str.length)]
  }
  
  else{
    return  [str.slice(0,str.indexOf(sep)), ...stringsplitter(str.slice(str.indexOf(sep) + 1), sep)]
  }
}

let string = "02/20/2020"
let seperator = "/"

console.log(stringsplitter(string, seperator))
