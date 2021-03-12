//"nit picking" "pit nicking" 

function spoonerize(words) {
	var wordsArray = words.split(" ")
  var first = wordsArray[0].charAt(0) 
  var second = wordsArray[1].charAt(0)
  
  wordsArray[1] = swapLetters(first,wordsArray[1])
 	wordsArray[0] = swapLetters(second,wordsArray[0])

 // wordsArray[1] = first + wordsArray[1].substr(1)
 // wordsArray[0] = second + wordsArray[0].substr(1)
  
  return wordsArray.join(" ")
}

function swapLetters(letter, word) {
	return letter + word.substr(1)
}

