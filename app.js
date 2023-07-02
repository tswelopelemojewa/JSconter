// initial count

let num = 0;

// hide the stop buttons when the page loads
document.getElementById("stop-plus").style.display = "none";
document.getElementById("stop-minus").style.display = "none";

// control the color change of the output
countCol = () => {
    if (num > 0){
        // tuen green for positive values
        document.getElementById("reveal").style.color = "rgb(0, 255, 0)";
    }else if(num < 0){
        // turn red for negative values
        document.getElementById("reveal").style.color = "rgb(255, 103, 77)";
    }else{
        // remain black when equal to zero
        document.getElementById("reveal").style.color = "rgb(0, 0, 0)";
    }
}

// increment function
numPlus = () => { 
    document.getElementById("reveal").innerHTML = num += 1;
    document.getElementById("plus").style.display = "none";
    document.getElementById("minus").style.display = "none";
    document.getElementById("stop-plus").style.display = "initial";
    countCol();
}

// decrement function
numMinus = () => {
     document.getElementById("reveal").innerHTML = num -= 1;
     document.getElementById("minus").style.display = "none";
     document.getElementById("plus").style.display = "none";
    document.getElementById("stop-minus").style.display = "initial";
     countCol();
    }

//reset function 
numReset = () => { 
    document.getElementById("reveal").innerHTML = num =0; 
    countCol();
}

/* setup the timer functionality */

// assining variables to the buttons on the screen.
let increase = document.getElementById("plus");
let stopBtn = document.getElementById("stop-plus");

let decrease = document.getElementById("minus");
let stopBtn2 = document.getElementById("stop-minus");
let intervalId;

// upcounter function
goUp = () => {
    intervalId = setInterval(numPlus, 500);
}

// down counter function
goDown = () => {
    intervalId = setInterval(numMinus, 500);
}

// stop the up count
stopCountUp = () => {
    clearInterval(intervalId);
    document.getElementById("stop-plus").style.display = "none";
    document.getElementById("plus").style.display = "initial";
    document.getElementById("minus").style.display = "initial";
  }

//   stop the down counter
stopCountDown = () => {
    clearInterval(intervalId);
    document.getElementById("plus").style.display = "initial";
    document.getElementById("minus").style.display = "initial";
    document.getElementById("stop-minus").style.display = "none";
    }

// assign the click events to the buttons 
increase.addEventListener("click", goUp);
stopBtn.addEventListener("click", stopCountUp);

decrease.addEventListener("click", goDown);
stopBtn2.addEventListener("click", stopCountDown);

document.getElementById("reset").addEventListener("click", numReset);




