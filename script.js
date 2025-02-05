const svgContainer = document.querySelector(".svg-container");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const koreaPath = document.querySelector(".Korea");
const indonesiaPaths = document.querySelectorAll(".Indonesia");
const australiaPaths = document.querySelectorAll(".Australia");
const overlay = document.querySelector(".overlay");
const box = document.querySelector(".box");
const title = document.querySelector(".box-title");
const description = document.querySelector(".description");
const image = document.querySelector(".image");
const caption = document.querySelector(".caption");


// blink starts when page is loaded
plusBtn.classList.add("blinking");

// displays and update contents for pop-up box
function displayPopup(countryName, imageSrc, captionTxt, text) {
    title.textContent = countryName;
    image.src = imageSrc;
    image.alt = countryName;
    caption.textContent = captionTxt;
    description.innerHTML = text;
    overlay.style.display = "flex";
}

// turns off overlay and pop-up
function overlayOff() {
    overlay.style.display = "none";
}

// opens korea information pop-up
function koreaInfo() {
    displayPopup("Korea", "assets/korea.jpg", "Comrades", "Born and raised until I turned 9<br>Returned to Korea after turning 16<br>Finished one and a half year military service<br><br><h1 style='font-size: 30px;'>Favorite Game</h1><ul style='font-size: 20px;'><li>League of Legends</li><li>League of Legends</li><li>League of Legends</li></ul>");
    box.style.backgroundColor = "rgb(59, 77, 115)"
}

// opens indonesia information pop-up
function indonesiaInfo() {
    displayPopup("Indonesia", "assets/indonesia.jpg", "When I was 10", "Moved at 9 because of my father's work<br>Went to an international school<br>Probably the best days of my life<br><br><h1 style='font-size: 30px;'>Favorite Food</h1><ul style='font-size: 20px;'><li>Sushi</li><li>Budae Jjigae(Korean stew)</li><li>Sate</li></ul>");
    box.style.backgroundColor = "rgb(229, 122, 102)";
}

// opens australia information pop-up
function australiaInfo() {
    displayPopup("Australia", "", "aus", "Name: Kang Heechan<br>Age: 21<br>MBTI: ISTJ<br>Degree: CS<br>Year: 2nd year<br><br> Couldn't really make any friends during my first year... I hope I can make lasting friends in my second year. :)");
    box.style.backgroundColor = "rgb(217, 179, 130)";
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