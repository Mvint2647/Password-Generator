var GenerateBtn = document.querySelector("#generate");
var number = "0123456789";
var special = "!@#$%^&*()<=_-`>?:;{|}~";
var letter = "abcdefghijklmnopqrstuvwxyz";
var Uppercaseletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var stored = []; //----------------------------------------

var hasUppercaseletter = true;
var hasNumber = true;
var hasLetter = true;
var hasSpecial = true;

var length = 34;

hasUppercase = confirm('Uppercaseletter');
hasSpecial = confirm('Special');
hasLetter = confirm('Letter');
hasNumber = confirm('Number');

function generatepasscode() {
    
    var passcode = "";
    var possible = "";


    if  (hasLetter) {
    var random = Math.floor(Math.random() * letter.length);
    var selectedletter = letter[random];
    stored.push(selectedletter);
    possible = possible.concat(letter);
    console.log(selectedletter);
}
//----------------------------------------------------------
if (hasUppercaseletter) {
    var random = Math.floor(Math.random() * uppercaseletter.length);
    var selecteduppercaseletter = uppercaseletter[random];
    possible = possible.concat(Uppercaseletter);
    stored.push(selecteduppercaseletter);
    console.log(selecteduppercaseletter);
}
//----------------------------------------------------------

if (hasSpecial) {
    var random = Math.floor(Math.random() * special.length);
    var selectedspecial = special[random];
    possible = possible.concat(special);
    stored.push(selectedspecial);
    console.log(selectedspecial);
}

if (hasNumber) {
    var random = Math.floor(Math.random() * number.length);
    var selectedNumber = [random];
    possible = possible.concat(number);
    stored.push(selectedNumber);
    console.log(selectedNumber);
}


    for (var i = 0; i < length - stored.length; i++) {
        var random = Math.floor(Math.random() * letter.length);
        passcode += letter[random];
    }
        passcode += stored.join("");
    
        console.log (passcode);
        
     
        console.log(stored);
        stored = [];


        return passcode;
        
    }
//----------------------------------------------------------
    function writepasscode() {
     var passcode = generatepasscode();
     var passcodeText = document.querySelector("#passcode");

     if (passcode){
         passcodeText.value = passcode;
}}

 GenerateBtn.addEventListener("click", writepasscode);