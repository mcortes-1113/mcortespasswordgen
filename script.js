var passLength = document.getElementById("usrInputLength");
var passValues = [];
var password;

function generate(){
for (var i = 0;i <= passLength-1;i++) {
randomNumber = Math.floor(Math.random()*10);
passValues.push(randomNumber);
}
var password = passValues.join("");
document.getElementById("passwordBox").innerText = password;
} 
