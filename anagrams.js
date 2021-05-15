
let anagrams = []

function getanagrams(string, anagram){

  if(string === 1){
  return string
  }
  
  for(i=0; i < string.length; i++){
  
  anagram += word[i];
  getanagrams(word.slice(0, i) + word.slice(i + 1), anagram);
  anagram = anagram.slice(0, anagram.length -1);
  
    }
  }
  
  getanagrams("Yellow");
  console.log(anagrams)
  }
  
  
