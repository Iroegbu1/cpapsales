// Insert text into conversations button 


function changeButtonText() {
    button = document.getElementById("conversations-iframe").contentWindow.document.querySelector(".widget > button");
    

    button.innerText = "Help Me Choose";
    button.style.transform = "rotate(-90deg)";

    // change button z-index 
    button.style.zIndex = "2147483000";

    // Remove button radius 
    button.style.borderRadius = "0px";

    // Increase button width 
    button.style.width = "170px";
    button.style.height = "58px";

    // Increase button font size
    button.style.fontSize = "16px";

    // Change font color
    button.style.color = "#ffffff";

    // Postion button properly using margins
    button.style.marginBottom = "40px"
    button.style.marginRight = "-75px";



    // Toggle button text on button click
    document.getElementById("conversations-iframe").contentWindow.document.querySelector(".widget > button").addEventListener("click", toggleButtonText);

}



// function to toggle innerText on button click 
function toggleButtonText() {
    button = document.getElementById("conversations-iframe").contentWindow.document.querySelector(".widget > button");
    

    if (button.innerText == "Help Me Choose") {
        button.innerText = "X";

        button.style = "width: 84px !important; font-size: 24px !important; color: #ffffff !important; margin-top: 24px !important; margin-right: -25px !important; background-color: #00c1ff !important; border-radius: 0;";


    } else {
        button.innerText = "Help Me Choose";

        button.style = "transform: rotate(-90deg) !important; width: 170px !important; font-size: 16px !important; color: #ffffff !important; margin-bottom: 40px; !important; margin-right: -75px !important; background-color: #00c1ff !important; border-radius: 0;" ;

    }

}


// Wait for iframe to load 
setTimeout(changeButtonText, 8000);

