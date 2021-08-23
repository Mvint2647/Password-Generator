var generateBtn = document.querySelector("#generate");
var number = "0123456789";
var special = "!@#$%^&*()<=_-`>?:;{|}~";
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var stored = []; //----------------------------------------

var length = 34;

hasNumber = confirm('Number');
hasSpecial = confirm('Special');
hasLowerLetter = confirm('lowerLetter');
hasUppercaseLetter = confirm('UppercaseLetter');


function generatePasscode() {
    
    var passcode = "";
    var possible = "";


    if  (hasLowerLetter) {
    var random = Math.floor(Math.random() * lowerLetter.length);
    var selectedLowerLetter = lowerLetter[random];
    stored.push(selectedLowerLetter);
    possible = possible.concat(lowerLetter);
    console.log(selectedLowerLetter);
}
//----------------------------------------------------------
if (hasUppercaseLetter) {
    var random = Math.floor(Math.random() * uppercaseLetter.length);
    var selectedUppercaseLetter = uppercaseLetter[random];
    possible = possible.concat(uppercaseLetter);
    stored.push(selectedUppercaseLetter);
    console.log(selectedUppercaseLetter);
}
//----------------------------------------------------------

if (hasSpecial) {
    var random = Math.floor(Math.random() * special.length);
    var selectedSpecial = special[random];
    possible = possible.concat(special);
    stored.push(selectedSpecial);
    console.log(selectedSpecial);
}

if (hasNumber) {
    var random = Math.floor(Math.random() * number.length);
    var selectedNumber = [random];
    possible = possible.concat(number);
    stored.push(selectedNumber);
    console.log(selectedNumber);
}


    for (var i = 0; i < length - stored.length; i++) {
        var random = Math.floor(Math.random() * stored.length);
        passcode += stored[random];
    }
        passcode += stored.join("");
    
        console.log (passcode);
        
     
        console.log(stored);
        stored = [];


        return passcode;
        
    }
//----------------------------------------------------------
    function writepasscode() {
     var passcode = generatePasscode();
     var passcodeText = document.querySelector("#passcode");

     if (passcode){
         passcodeText.value = passcode;
}}

    generateBtn.addEventListener("click", writepasscode);