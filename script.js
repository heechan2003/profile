const svgContainer = document.getElementById('svg-container');
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");

// blink starts when page is loaded
plusBtn.classList.add("blinking");

// zoom in function when plus button is clicked
function zoomIn() {
    svgContainer.style.transformOrigin = "80% 70%";
    svgContainer.style.transform = "scale(1.6)";
    plusBtn.classList.remove("blinking");
    minusBtn.classList.add("blinking");
}

// zoom out function when minus button is clicked
function zoomOut() {
    svgContainer.style.transform = "scale(1.0)";
    minusBtn.classList.remove("blinking");
    plusBtn.classList.add("blinking");
}

plusBtn.addEventListener("click", zoomIn);
minusBtn.addEventListener("click", zoomOut);