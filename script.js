function initialize(){
    clock = document.getElementById("clock");
    display = document.getElementById("display");
    logList = document.getElementById("log");
    button1 = document.getElementById("button1");
    button2 = document.getElementById("button2");
    button3 = document.getElementById("button3");
    clock.innerHTML = 7;
    //I can probably delete b1 and just use button1 directly instead etc
    b1 = 0;
    b2 = 0;
    b3 = 0;
    logList.innerHTML = "Previous Guesses:";
    code = '';
    userCode = '' + b1 + b2 + b3;
    display.innerHTML = userCode;
    createCode();
    
    //console.log(userCode);
    //console.log(code);
}
//Creates the hidden Code
function createCode(){
    for(let i = 0 ; i < 3 ; i++){
        code += Math.floor((Math.random() * 10));
    }
}
//Updates the userCode
function changeUserCode(){
    userCode = '' + b1 + b2 + b3
    display.innerHTML = userCode;
}

//checks if userCode is the same as the hidden code
function checkCode(){
    console.log(userCode);
    console.log(code);
    if(userCode == code)
    {
        display.innerHTML = "You've cracked the Code!"
        console.log("nice");

    }
    else{
        clock.innerHTML -= 1;
        if(clock.innerHTML == 0)
        {
            clock.innerHTML = "You've Ran out Of Guesses (Press Reset)"
            display.innerHTML = "The code was " + code; 
            console.log(clock);
        }
        else{
            log();
        }
    }
}

//Logs the user guesses
function log(){
    logList.innerHTML += "<br>" + userCode;
}

//Clears the user Choices
function clearUserCode(){
    b1 = 0;
    b2 = 0;
    b3 = 0;
    button1.innerHTML = 0;
    button2.innerHTML = 0;
    button3.innerHTML = 0;
    changeUserCode();
}

//CHANGES VALUE OF BUTTONS
function changeValue1(){
    if(b1 != 9)
    {
        b1 += 1;
    }
    else{
        b1 = 0;
    }
    button1.innerHTML = b1;
    changeUserCode();
}

function changeValue2(){
    if(b2 != 9)
    {
        b2 += 1;
    }
    else{
        b2 = 0;
    }
    button2.innerHTML = b2;
    changeUserCode();
}

function changeValue3(){
    if(b3 != 9)
    {
        b3 += 1;
    }
    else{
        b3 = 0;
    }
    button3.innerHTML = b3;
    changeUserCode();
}

function reset(){
    initialize();
    button1.innerHTML = "0";
    button2.innerHTML = "0";
    button3.innerHTML = "0";
}