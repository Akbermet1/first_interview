//This function checks if all numbers in an array given by the user have an identical pair

function solution(array) {

    if(array.length === 0){
      console.log("Can't do that with an empty array!")
      return
    }
     
     var occurCount = new Object
          
      for(let i = 0; i < array.length; i++){
         let counter = 0
          for(let j = 0; j < array.length; j++){
              if(array[i] === array[j]){
  
                counter += 1
  
              } 
              
              occurCount[array[i]] = counter
              
          }
        }
  
      //console.log(occurCount) this was written for checking
  
      for(const property in occurCount){
        if(occurCount[property] % 2 !== 0){
          return false
        }
      }
     
        
      return true
  }
  
  let a = [1,2,1,2,3]
  let b = []
  
  
  console.log(solution(a))
  //console.log(solution(b))
  