// Gets the checkbox
let checkBox = document.getElementById("check-me");

// Gets the Create account button
let button1 = document.getElementById("button1");

// Gets the Login button
let button2 = document.getElementById("button2");

// displays the buttons when the checkbox is checked
function show(){
    if (checkBox.checked == true){
        button1.style.display = "block";
        button2.style.display = "block";
    }
    else{
        button1.style.display = "none";
        button2.style.display = "none";
    }
}