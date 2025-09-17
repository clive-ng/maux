const button = document.querySelector("button");

// Change background to orange when button is pressed
button.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "orange";
});

// Revert background when button is released
button.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});

// Handle case when mouse leaves the button while pressed
button.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "white";
});

function(){
            if(!window.UnicornStudio){
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
                i.onload=function(){
                    window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
                };
                (document.head || document.body).appendChild(i)
            }