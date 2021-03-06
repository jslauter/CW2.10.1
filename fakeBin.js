function fakeBin(x){
  
   let newStr = ""
 
   for(let i = 0; i < x.length; i++){
     
      if(Number(x[i]) < 5){
        newStr += "0"
      }else newStr += "1"
 }
   return newStr
}
