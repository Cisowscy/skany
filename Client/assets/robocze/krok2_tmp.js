require("babel-core").transform("code", {
  presets: ["es2017"]
});
stringArray = new Array("Blue","Humpback","Beluga")
numericStringArray = new Array("80","9","700")
numberArray = new Array(40,1,5,200)
mixedNumericArray = new Array("80","9","700",40,1,5,200)

function compareNumbers(a, b) {
   return a - b
}

//console.log("tablicaNapisów: " + stringArray.join())
//console.log("Posortowana: " + stringArray.sort())

console.log("tablicaLiczbowa: " + numberArray.join())
console.log("Posortowana bez funkcji porównującej: " + numberArray.sort())
console.log("Posortowana z funkcją porównującą: " + numberArray.sort(compareNumbers))

//console.log("tablicaNapisówLiczbowych: " + numericStringArray.join())
//console.log("Posortowana bez funkcji porównującej: " + numericStringArray.sort())
//console.log("Posortowana z funkcją porównującą: " + numericStringArray.sort(compareNumbers))

//console.log("tablicaLiczbowaMieszna: " + mixedNumericArray.join())
//console.log("Posortowana bez funkcji porównującej: " + mixedNumericArray.sort())
//console.log("Posortowana z funkcją porównującą: " + mixedNumericArray.sort(compareNumbers))