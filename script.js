var passLengthEl = document.querySelector("#usrLength");
var btnEl = document.querySelector("#btn");
var numCB = document.querySelector("#numeric");
var lwCB = document.querySelector("#lowercase");
var upCB = document.querySelector("#uppercase");
var spCB = document.querySelector("#special");
var passMsg = document.querySelector("#passwordResult");
var passRow = document.querySelector("#passwordRow");
var passCopy = document.querySelector("#copyRow");
var passBtn = document.querySelector("#copyBtn");
var passChPool = [];
var passValues = [];
var password = "";

function clrValues() {
    passChPool.length = 0; 
    passValues.Length = 0;
    passLengthEl.value = "";
    numCB.checked = false;
    lwCB.checked = false;
    upCB.checked = false;
    spCB.checked = false;
    };

/*passBtn.addEventListener("click", function copy() {
    var passClip = document.getElementById("passwordResult");
        passClip.select();
        //passClip.setSelectionRange(0, 99999);      
        document.execCommand("copy");
        alert("Your Password: \"" + passClip.value + "\" has been copied to the clipboard");
        return; 
});*/

btnEl.addEventListener('click', function genPass() {
    passChPool.length = 0; 
    passValues.Length = 0;
    password = "";

        if (numCB.checked === false && lwCB.checked === false && upCB.checked === false && spCB.checked === false) {
            alert("You must select at least 1 Character Type");
            return;
        }
        if (passLengthEl.value === "" || passLengthEl.value < 8 || passLengthEl.value > 128) {
            alert("Please enter a value between 8 and 128 for Password length");
            return;
        }
        if (numCB.checked === true) {
            passChPool.push(1,2,3,4,5,6,7,8,9,0);}

        if (lwCB.checked === true) {
            passChPool.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");}

        if (upCB.checked === true) {
            passChPool.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");}
            
        if (spCB.checked === true) {
            passChPool.push("\!","\"","\#","\$","\%","\&","\'","\(","\)","\*","\+","\,","\-","\.","\/","\:","\;","\<","\=","\>","\?","\@","\[","\\","\]","\^","\_","\`","\{","\|","\}","\~");}

            for (var i = 0;i <= (passLengthEl.value -1);i++) {
                var rand = passChPool[Math.floor(Math.random()*passChPool.length)];
                passValues.push(rand);
            }
                password = passValues.join("");
                passRow.style.visibility = "visible";
                //passCopy.style.visibility = "visible";                
                passMsg.textContent = password;
                return clrValues();
});

