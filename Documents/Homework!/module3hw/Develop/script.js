// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function randomInt(min, max){
  if (!max){
    max=min
    min=0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand)+rand*max)

}
function getRandomItem (list){
  return list[randomInt(list.length)]
}

function generatePassword() {
  var userInput = window.prompt("What is the length of the password?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)){
    window.alert("That is not a number!")
    return
  }
   if (passwordLength < 8 || passwordLength > 128){
window.alert("Password must be bewteen 8-128 characters")
  return
   }
   var UserwantsNo = window.confirm("Would you like to include numbers in your password?")
   var UserwantsSymbols = window.confirm("Would you like symbols in your password?")
   var UserwantslowerCase= window.confirm("Would you like lowercase letters in your password?")
   var UserwantsUppercase = window.confirm("Would you like uppercase letters in your password?")

 var numbers = ["0","1","2","3","4","5","6","7","8","9"]
 var symbols = ["@","%","&","*","!","#","^","~","<","?"]
 var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 
 var UsersWants = []

 if (UserwantsNo === true){
  UsersWants.push(numbers)

 }
 if (UserwantsSymbols === true){
  UsersWants.push(symbols)
 }
 if (UserwantslowerCase === true){
  UsersWants.push(lowerCase)
 }
 if (UserwantsUppercase === true){
  UsersWants.push(upperCase)
 }


 var generatedPassword = ""

 for (var i = 0; i < passwordLength; i++){
  var randomList = getRandomItem(UsersWants)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar

return generatedPassword
 }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
