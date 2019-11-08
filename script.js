var passLength = document.getElementById("usrInputLength");
var passValues = [];
var password;
var passwordNode;

/*var ElNumCk = document.querySelector("#numeric");

ElNumCk.setAttribute(false);*/

function numCheck(cb) {
  if (cb.checked === true) {
      passValues.push(1,2,3,4,5,6,7,8,9,0);
      console.log(passValues);
  }
}
  function lwCheck(cb) {
    if (cb.checked === true) {
        passValues.push("a","b","c","d");
        console.log(passValues);
    }
  }
    function upCheck(cb) {
        if (cb.checked === true) {
            passValues.push("A","B","C","D");
            console.log(passValues);
        }
    }
        function spCheck(cb) {
            if (cb.checked === true) {
                passValues.push("\@","\#","\!","\%");
                console.log(passValues);
            }
        }
