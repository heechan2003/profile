const svgContainer = document.querySelector(".svg-container");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const koreaPath = document.querySelector(".Korea");
const indonesiaPaths = document.querySelectorAll(".Indonesia");
const australiaPaths = document.querySelectorAll(".Australia");
const overlay = document.querySelector(".overlay");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const image = document.querySelector(".image");


// blink starts when page is loaded
plusBtn.classList.add("blinking");

// turns off overlay and pop-up
function overlayOff() {
    overlay.style.display = "none";
}

// opens korea information pop-up
function koreaInfo() {
    overlay.style.display = "flex";
}

// opens indonesia information pop-up
function indonesiaInfo() {
    overlay.style.display = "flex";
}

// opens australia information pop-up
function australiaInfo() {
    overlay.style.display = "flex";
}

// blinking countries when plus button is clicked
function addBlinking() {
    koreaPath.classList.add("blinking");
    indonesiaPaths.forEach(path => path.classList.add("blinking"));
    australiaPaths.forEach(path => path.classList.add("blinking"));
}

// remove blinking countries when minus button is clicked
function removeBlinking() {
    koreaPath.classList.remove("blinking");
    indonesiaPaths.forEach(path => path.classList.remove("blinking"));
    australiaPaths.forEach(path => path.classList.remove("blinking"));
}

// info is shown and background is blurred when hovered, returns when not hovered
function addEventListeners() {
    koreaPath.addEventListener("mouseover", koreaInfo);
    indonesiaPaths.forEach(path => path.addEventListener("mouseover", indonesiaInfo));
    australiaPaths.forEach(path => path.addEventListener("mouseover", australiaInfo));
    koreaPath.addEventListener("mouseout", overlayOff);
    indonesiaPaths.forEach(path => path.addEventListener("mouseout", overlayOff));
    australiaPaths.forEach(path => path.addEventListener("mouseout", overlayOff));
}

// removed event listeners when minus button is clicked
function removeEventListeners() {
    koreaPath.removeEventListener("mouseover", koreaInfo);
    indonesiaPaths.forEach(path => path.removeEventListener("mouseover", indonesiaInfo));
    australiaPaths.forEach(path => path.removeEventListener("mouseover", australiaInfo));
    koreaPath.removeEventListener("mouseout", overlayOff);
    indonesiaPaths.forEach(path => path.removeEventListener("mouseout", overlayOff));
    australiaPaths.forEach(path => path.removeEventListener("mouseout", overlayOff));
}

// zoom in function when plus button is clicked
function zoomIn() {
    svgContainer.style.transformOrigin = "80% 70%";
    svgContainer.style.transform = "scale(1.6)";
    plusBtn.classList.remove("blinking");
    minusBtn.classList.add("blinking");
    addBlinking();
    addEventListeners();
}

// zoom out function when minus button is clicked
function zoomOut() {
    svgContainer.style.transform = "scale(1.0)";
    minusBtn.classList.remove("blinking");
    plusBtn.classList.add("blinking");
    removeBlinking();
    removeEventListeners();
}

plusBtn.addEventListener("click", zoomIn);
minusBtn.addEventListener("click", zoomOut);