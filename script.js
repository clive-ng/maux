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