/*

Unfair Hurdles

Unfair hurdles are hurdles which are either too high, or way too close together.

Create a function which takes in an array of strings, representing hurdles, and returns whether or not they are unfair. For the purposes of this challenge, unfair hurdles are:

    At least 4 characters tall.
    Strictly less than 4 spaces apart.

Examples

// Hurdle are good distance apart but are way too tall.

isUnfairHurdle([
  "#    #    #    #",
  "#    #    #    #",
  "#    #    #    #",
  "#    #    #    #"
]) ➞ true


// Hurdles are a fine height but are way too close together.

isUnfairHurdle([
  "#  #  #  #",
  "#  #  #  #",
  "#  #  #  #"
]) ➞ true


// These hurdles are mighty splendid.

isUnfairHurdle([
  "#      #      #      #",
  "#      #      #      #"
]) ➞ false

Notes

    Hurdles will be represented with a hashtag "#".
    There will be the same spacing between hurdles.

URL: https://edabit.com/challenge/2qdzg4MMysjzCsAQr

*/
function isUnfairHurdle(hurdles) {
    let saida = false
    if (hurdles.length >= 4){
        saida = true
    }else if (hurdles[0].split('#')[1].length < 4){
        saida = true
    }
	return saida
}



console.log(isUnfairHurdle([
    "#    #    #    #",
    "#    #    #    #",
    "#    #    #    #",
    "#    #    #    #"
  ]))
  
console.log(isUnfairHurdle([
    "#  #  #  #",
    "#  #  #  #",
    "#  #  #  #"
  ]))
  
  
console.log(isUnfairHurdle([
    "#      #      #      #",
    "#      #      #      #"
  ]))