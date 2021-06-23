/*
Description:
No, no, sorry, the goal of this Kata is not to create a complete translation-engine. You'll simply try to implement a tr method to String object.
tr will accept 1 or 2 arguments :
aString.tr( fromList, toList )
aString.tr( fromList )
fromList and tolist are "lists" of characters/strings ( a list may be an array or a string (=a list of characters) )
eg :
['hello','world'] = a list of strings
['a','b','c'] = a list of chars
"abcde" = a list of chars too.
Each items of the fromList should be replaced by items of the same index in the toList.
If no toList is provided then each items of the fromList should be removed from the string.
Strings may contain special characters ( other than alphanumeric )
##Examples
var str = "TRaduttore"
str.tr( "auioe", "4-103" )  // -> "TR4d-tt0r3"
str.tr( "aeiouR", ["A","E","I","O","U","r"] )  // -> "TrAdUttOrE"
var hi = "Hello Happy CodeWarriors"
*/
String.prototype.tr = function( fromList, toList ){
  if (typeof fromList ==='string') fromList=fromList.split``
  if (typeof toList ==='string') toList=toList.split``
  let str=this
  if (!toList){
  for (let i=0;i<fromList.length;i++){
    for (let j=0;j<str.length;j++){
    str = str.replace(fromList[i],'')
    }
  }
  return str
  }
  for (let i=0;i<fromList.length;i++){
    for (let j=0;j<str.length;j++){
    str = str.replace(fromList[i],toList[i])
    }
  }
  return str
}
