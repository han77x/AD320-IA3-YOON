//div 1
document.getElementById("a").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

//div2
document.getElementById("b").addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("b").style.backgroundColor = "red";
    
}

//div3

  document.getElementById("c").addEventListener("mouseover",event);
  function event () {   
    // highlight the mouseover target
    document.getElementById("c").style.backgroundColor = "orange";
  }

//div4
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

//div5
 
//var color = "#"000000;
document.getElementById("e").addEventListener('scroll',myscroll); 
                                              
                                              function myscroll (){
  //document.getElementById("e").style.backroundColor = "#"+color;
  //color++;
  document.getElementById("e").innerHTML = "O_O who are you!!!!!!";
  }

