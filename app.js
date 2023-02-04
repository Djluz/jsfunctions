let txt1 = "i will make this to uppercase";
let result1 = txt1.toUpperCase();
function mystyle1() {
    document.getElementById('text1').innerHTML = result1;
}
document.getElementById('btn1').onclick= mystyle1;


let txt2 = "I WILL MAKE THIS TO LOWERCASE";
let result2 = txt2.toLowerCase();
function mystyle2() {
    document.getElementById('text2').innerHTML = result2;
}
document.getElementById('btn2').onclick= mystyle2;


function surprise() {
    alert ("YOU'VE BEEN HACKED!!!");
}
document.getElementById('btn3').onclick= surprise;


function mystyle3() {
    document.getElementById('text4').style.color="blue";
}
document.getElementById('btn4').onclick= mystyle3;

function myFunction1() {
    var a = document.getElementById("myDIV");
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("text8");
    if (x.innerHTML === "I have good news!!!") {
      x.innerHTML = "I am 8-weeks pregnant, we are having our second child!";
    } else {
      x.innerHTML = "I have good news!!!";
    }
}
