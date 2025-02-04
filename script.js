const svgContainer = document.getElementById('svg-container');
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const koreaPath = document.querySelector(".Korea");
const indonesiaPaths = document.querySelectorAll(".Indonesia");
const australiaPaths = document.querySelectorAll(".Australia");

// blink starts when page is loaded
plusBtn.classList.add("blinking");

// zoom in function when plus button is clicked
function zoomIn() {
    svgContainer.style.transformOrigin = "80% 70%";
    svgContainer.style.transform = "scale(1.6)";
    plusBtn.classList.remove("blinking");
    minusBtn.classList.add("blinking");

    // blinking countries when plus button is clicked
    koreaPath.classList.add("blinking");
    indonesiaPaths.forEach(path => {
        path.classList.add("blinking");
    })
    australiaPaths.forEach(path => {
        path.classList.add("blinking");
    })

    // info is shown when corresponding country is hovered
    koreaPath.addEventListener("mouseover", koreaInfo);
    indonesiaPaths.forEach(path => {
        path.addEventListener("mouseover", indonesiaInfo);
    });
    australiaPaths.forEach(path => {
        path.addEventListener("mouseover", australiaInfo);
    });
}

// zoom out function when minus button is clicked
function zoomOut() {
    svgContainer.style.transform = "scale(1.0)";
    minusBtn.classList.remove("blinking");
    plusBtn.classList.add("blinking");

    // remove blinking countries when minus button is clicked
    koreaPath.classList.remove("blinking");
    indonesiaPaths.forEach(path => {
        path.classList.remove("blinking");
    })
    australiaPaths.forEach(path => {
        path.classList.remove("blinking");
    })
}


function koreaInfo() {
}

function indonesiaInfo() {
}

function australiaInfo() {
}

plusBtn.addEventListener("click", zoomIn);
minusBtn.addEventListener("click", zoomOut);