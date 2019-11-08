var passLength = document.getElementById("usrLength");
var btnEl = document.getElementById("btn");
var passChPool = [];
var passValues = [];
var password;

btnEl.addEventListener('click', genPass());

function numCheck(cb) {
  if (cb.checked === true) {
      passChPool.push(1,2,3,4,5,6,7,8,9,0);
  }
}
  function lwCheck(cb) {
    if (cb.checked === true) {
        passChPool.push("a","b","c","d");
    }
  }
    function upCheck(cb) {
        if (cb.checked === true) {
            passChPool.push("A","B","C","D");
        }
    }
        function spCheck(cb) {
            if (cb.checked === true) {
                passChPool.push("\@","\#","\!","\%");
            }
        }

            function genPass(){
                for (var i = 0;i <= passLength-1;i++) {
                    var rand = passChPool([Math.floor(Math.random()*passChPool.length)]);
                    passValues.push(rand);
                }
//Need to fix issue with array value not being assigned to variable
                    return passValues;
                    alert("the password is ");
                    alert(passValues);
            }
                
