const gameSuit = (userInput) => {
 let suitHasil 
let computerInput = Math.random();
if (computerInput < 0.34) {
 computerInput = "batu";
} else if (computerInput <= 0.67) {
 computerInput = "gunting";
} else {
 computerInput = "kertas";
}
if (userInput === computerInput){
 suitHasil = `Hasil seri bot memilih ${computerInput} dan kamu memilih ${userInput} `
}else if (computerInput === 'batu'){
 if (userInput === 'gunting'){
 suitHasil = `Kamu kalah😓 kamu memilih ${userInput}\nbot memilih ${computerInput}`
 }else{
 suitHasil = `kamu menang🎊😆 kamu memilih ${userInput}\nbot memilih ${computerInput}`
}
}else if (computerInput === 'gunting' ){
if (userInput === 'kertas') { 
 suitHasil = `Kamu kalah😓 kamu memilih ${userInput}\nbot memilih ${computerInput}`
}else{
 suitHasil = `Kamu menang🎊😆 kamu memilih ${userInput}\nbot memilih ${computerInput}`
}
}else if (computerInput === 'kertas'){
 if ( userInput === 'batu'){
 suitHasil = `Kamu kalah😓 kamu memilih ${userInput}\nbot memilih ${computerInput}`
 } else {
 suitHasil = `Kamu menang🎊😆 kamu memilih ${userInput}\nbot memilih ${computerInput}`
 }
}
return suitHasil
}
module.exports = { gameSuit }