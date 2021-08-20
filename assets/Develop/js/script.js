var generateBtn = document.querySelector("#generate");
var num = "0123456789";
var special = "!@#$%^&*()<=_-`>?:;{|}~";
var Loletter = "abcdefghijklmnopqrstuvwxyz";
var Upletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var secured = []; //----------------------------------------

var hasUpetter = true;
var hasNum = true;
var hasLoletter = true;
var hasSpecial = true;

//----------------------------------------------------------

function generatepasskey() {
    var length = 8;
    var passkey = "";
    
if (hasLoletter) {
    var random = Math.floor(Math.random() * Loletter.length);
    var selectedLoletter = letters[random];
    secured.push(selectedLoletter);
    console.log(selectedLoletter);

    return "passcode"
}

//----------------------------------------------------------
if (hasUpletter) {
    var random = Math.floor(Math.random() * Upletter.length);
    var selectedUpletter = Upletter[random];
    secured.push(selectedUpLetter);
    console.log(selectedUpLetter);
}
//----------------------------------------------------------

if (hasSpecial) {
    var random = Math.floor(Math.random() * special.length);
    var special = special[random];
    secured.push(selectedspecial);
    console.log(selectedspecial);
}
//----------------------------------------------------------

if (hasNum) {
    var random = Math.floor(Math.random() * num.length);
    var num = num[random];
    secured.push(selectednum);
    console.log(selectednum);
}
//----------------------------------------------------------

    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * letters.length);
        passkeykey += letters[random]

        console.log = (passkey)
        return passkeykey;
    }
}
//----------------------------------------------------------
    function typepasskey() {
     var passkey = generatepasskey();
     var passkeyText = document.querySelector("#passkey");

     if (passkey){
         passkeyText.value = passkey;

     }
 }