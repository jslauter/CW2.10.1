/*
Description:
###Task:

You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.

####Rules/Note:

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
The length of each line = (2n-1).
Range of n is (-∞,100]
###Examples:

pattern(5):

    12345
   12345 
  12345  
 12345   
12345    
pattern(10):

         1234567890
        1234567890 
       1234567890  
      1234567890   
     1234567890    
    1234567890     
   1234567890      
  1234567890       
 1234567890        
1234567890         
pattern(15):

              123456789012345
             123456789012345 
            123456789012345  
           123456789012345   
          123456789012345    
         123456789012345     
        123456789012345      
       123456789012345       
      123456789012345        
     123456789012345         
    123456789012345          
   123456789012345           
  123456789012345            
 123456789012345             
123456789012345              
pattern(20):

                   12345678901234567890
                  12345678901234567890 
                 12345678901234567890  
                12345678901234567890   
               12345678901234567890    
              12345678901234567890     
             12345678901234567890      
            12345678901234567890       
           12345678901234567890        
          12345678901234567890         
         12345678901234567890          
        12345678901234567890           
       12345678901234567890            
      12345678901234567890             
     12345678901234567890              
    12345678901234567890               
   12345678901234567890                
  12345678901234567890                 
 12345678901234567890                  
12345678901234567890       
*/

function pattern(n) {
  let str = "";
  for (let i = 1, j = 1; i <= n; i++, j++) {
    if (j > 9) {
      j = 0;
    }
    str += j;
  }
  let arr = [];
  for (let i = n, j = 0; i > 0; i--, j++) {
    arr.push(" ".repeat(i - 1) + str + " ".repeat(j));
  }
  return arr.join("\n");
}
