let gameIsRunning = false;

let timerStart;
let timerStop;
let tResult;
var cookie;
var interval;
// eslint-disable-next-line no-unused-vars
function init() {
    console.log("init");
    cookie = document.getElementById("cookie");
}
console.log("script is loaded", gameIsRunning);
// eslint-disable-next-line no-unused-vars
function clickHandler() {
    console.log("handle click", gameIsRunning);
    
    if (gameIsRunning){ //game stop
        document.getElementById("startButton").innerHTML = "Start!";
        gameIsRunning = false;
        timerStop = new Date().getSeconds();
        let result = timerStop - timerStart;
        document.getElementById("timeDif").innerHTML = result + " Seconds"; 
        console.log(result);
        tResult = result;
        clearInterval(interval);
        feedBack();
    } else { //game start
        timerStart = new Date().getSeconds();
        console.log(timerStart);
        startInterval();
        document.getElementById("startButton").innerHTML = "Stop!";
        gameIsRunning = true;
        cookie.style.display="none";
        //timeDif.style.display="none";
    } 
}
function feedBack(){
    
    console.log(tResult);
    if (tResult < 10 || tResult > 10) {
        document.getElementById("timeDif").innerHTML = tResult + " Seconds. Try again!";
        //timeDif.style.display="inline";
    }
    if (tResult === 10){
        document.getElementById("timeDif").innerHTML = tResult + " Seconds! Congratulations! Here is a cookie for you!";  
        //timeDif.style.display="inline";
        cookie.style.display="inline"; 
    }
}
function startInterval(){
    interval = setInterval(function () {
        console.log(new Date().getSeconds() - timerStart);
    } , 1000);
}

