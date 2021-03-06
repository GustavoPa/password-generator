// Assignment code here
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// numbers array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//special chars array
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Generate password Function
function generatePassword() {
    // Ask the user to pick the password length
    passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128");
    console.log("Password length " + passwordLength);
    // check if user input is correct
    if (!passwordLength) {
        alert("please choose a number");
    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Password must be between 8 and 128 charecters");
        console.log("Password length " + passwordLength);
        //if yes let him choose his password chars and nums
    } else {
        confirmLower = confirm("would you like your password to have lowercase letters?");
        console.log("Lower case " + confirmLower);
        confirmUpper = confirm("would you like your password to have upper case letters?");
        console.log("Upper case " + confirmUpper);
        confirmNumber = confirm("Would you like your password to have numbers?");
        console.log("Number " + confirmNumber);
        confirmSpecial = confirm("would you like your password to have special characters?");
        console.log("Special Character " + confirmSpecial);

    };

    // if the user doesnt choose
    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
        userChoices = alert("You must choose a criteria");

        // if the user picks 4 criterias
    } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
        userChoices = lowerCase.concat(upperCase, numbers, special);
        console.log(userChoices);
    }
    // if the user picks 3
    else if (confirmLower && confirmUpper && confirmNumber) {
        userChoices = lowerCase.concat(upperCase, numbers);
        console.log(userChoices);
    }
    else if (confirmLower && confirmUpper && confirmSpecial) {
        userChoices = lowerCase.concat(upperCase, special);
        console.log(userChoices);
    }
    else if (confirmLower && confirmNumber && confirmSpecial) {
        userChoices = lowerCase.concat(numbers, special);
        console.log(userChoices);
    }
    else if (confirmUpper && confirmNumber && confirmSpecial) {
        userChoices = upperCase.concat(numbers, special);
        console.log(userChoices);
    }
    // if the user picks 2
    else if (confirmLower && confirmUpper) {
        userChoices = lowerCase.concat(upperCase);
        console.log(userChoices);
    }
    else if (confirmLower && confirmNumber) {
        userChoices = lowerCase.concat(numbers);
        console.log(userChoices);
    }
    else if (confirmLower && confirmSpecial) {
        userChoices = lowerCase.concat(special);
        console.log(userChoices);
    }
    else if (confirmUpper && confirmNumber) {
        userChoices = upperCase.concat(numbers);
        console.log(userChoices);
    }
    else if (confirmUpper && confirmSpecial) {
        userChoices = upperCase.concat(special);
        console.log(userChoices);
    }
    else if (confirmNumber && confirmSpecial) {
        userChoices = numbers.concat(special);
        console.log(userChoices);
    }
    // if 1
    else if (confirmLower) {
        userChoices = lowerCase;
        console.log(userChoices);
    }
    else if (confirmUpper) {
        userChoices = blankUpper.concat(upperCase);
        console.log(userChoices);
    }
    else if (confirmNumber) {
        userChoices = numbers;
        console.log(userChoices);
    }
    else if (confirmSpecial) {
        userChoices = special;
        console.log(userChoices);
    };

    // Empty variable for the password lenghth
    var passwordBlank = [];

    // Loop for random selection
    for (var i = 0; i < passwordLength; i++) {
        var result = userChoices[Math.floor(Math.random() * userChoices.length)];
        passwordBlank.push(result);
        console.log(result);
    }

    // Join and return the password 
    var password = passwordBlank.join("");
    console.log("Your Pasword is: " + password);
    return password;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

