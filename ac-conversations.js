// Rotate Welcome message


function rotateWelcomeMessage() {
    let button = document.getElementById("conversations-iframe").contentWindow.document.querySelector(".widget_welcome_message_content");

    button.style.transform = "rotate(-90deg)";
  

    // Hide button icon container 
    let widgetIconContainer = document.getElementById("conversations-iframe").contentWindow.document.querySelector("button.widget_icon_container");

    widgetIconContainer.style.display = "none";
    

// Welcome message container 
    let widgetWelcomeMessageContainer = document.getElementById("conversations-iframe").contentWindow.document.querySelector(".widget_welcome_message_inner");

    widgetWelcomeMessageContainer.flexDirection = "row";
    widgetWelcomeMessageContainer.style.marginRight = "-75px";

// Welcome Message Dismiss
    let widgetWelcomeMessageDismiss = document.getElementById("conversations-iframe").contentWindow.document.querySelector(".widget_welcome_message_dismiss");

    // margin right - 40px 
    widgetWelcomeMessageDismiss.style.marginRight = "-40px";


}


// Wait for iframe to load 
setTimeout(rotateWelcomeMessage, 7000);







