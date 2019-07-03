var nextBtn = document.getElementById("nextButton");
var preBtn = document.getElementById("preButton");
var slider = document.getElementById("slider");
var widthItem = document.querySelector(".item").offsetWidth;
var numItem = slider.querySelectorAll(".item").length;
slider.style.transition = "0s";
slider.style.transform = "translateX(-" + widthItem + "px)";
// reponsive 
var currentPosition = 0;
// 1 biến để giúp ta control được slider đang ở đâu
var widthSlider = numItem * widthItem;
// ta sẽ lấy số lượng item trong slide nhân với width của mỗi item để ra toàn bộ width của slider 
nextBtn.addEventListener("click", nextSlider);
preBtn.addEventListener("click", backSlider);
const createClone = function genClone() {
    const numItems = slider.getElementsByClassName("item").length;
    const firstChild = slider.getElementsByClassName("item").item(0); // xác định first slide
    const secondChild = slider.getElementsByClassName("item").item(1);
    const lastChild = slider.getElementsByClassName("item").item(numItems - 1); // xác định last slide
    const cloneLastChild = lastChild.cloneNode(true); // thực hiện tạo ra 1 last slide mới 
    const cloneFirstChild = firstChild.cloneNode(true); // thực hiện tạo ra 1 first slide mới 
    const cloneSecondChild = secondChild.cloneNode(true); // thực hiện tạo ra 1 second slide mới 
    cloneLastChild.classList += " clone"; // 
    cloneFirstChild.classList += " clone"; // add class clone (bạn có thể add bất cứ class gì bạn muốn)
    slider.insertBefore(cloneLastChild, firstChild); // thêm last slide vào phía trước slide đầu tiên 
    slider.insertBefore(cloneFirstChild, lastChild.nextSibling); // thêm first slide vào cuối slider 
    slider.insertBefore(cloneSecondChild, lastChild.nextSibling); // thêm second slide vào cuối slider 
    numItem += 2;
}
createClone();


function nextSlider() {
    currentPosition -= widthItem;
    checkPosition(currentPosition);
}

setInterval(nextSlider, 4000);
function backSlider() {
    currentPosition += widthItem;
    checkPosition(currentPosition);
}
// currentPosition là vị trí hiện tại của slider
// mỗi lần slide , slider sẽ di chuyển 1 đoạn đúng bằng với width của 1 slide item (widthItem)
// hàm checkPosition thực hiện di chuyển slider 

function checkPosition(newValue) {
    distantSlide = "translate(" + (newValue) + "px)";
    slider.style.transform = distantSlide;
    // xử lý mỗi lần di chuyển sẽ gán giá trị mới cho thuộc tính transform của slider
}
function checkPosition(newValue) {
    distantSlide = "translate(" + (currentPosition) + "px)";
    slider.style.transform = distantSlide;

    if (currentPosition == -(widthItem * (numItem - 3))) {
        slider.style.transform = "translateX(" + currentPosition + "px)";
        setTimeout(function () {
            slider.style.transition = "0s";
            currentPosition = 0;
            slider.style.transform = "translateX(" + currentPosition + "px)";
        }, 400);
    } else {
        slider.style.transition = "0.7s";
        console.log(currentPosition);
    }
    // khi slider tới vị trí của slide cuối cùng nếu bấm next slide tiếp thì sẽ thực hiện translate đến vị trí của clone element cuối slide 
    // clone element cuối slide ở đây là 
    // <div class="clone">1</div>
    // ngay khi slide đến clone element cuối ngay lập tức remove transition của slider và dịch chuyển về slide đầu tiên của slider 
    // và sau khi dịch chuyển về slide đầu tiên add transition trở lại slider
    if (currentPosition == widthItem) {
        console.log(currentPosition)
        slider.style.transform = "translateX(" + currentPosition + "px)";
        setTimeout(function () {
            slider.style.transition = "0s";
            currentPosition = -(widthItem * (numItem - 3));
            slider.style.transform = "translateX(" + currentPosition + "px)";
        }, 400);
    }
    else {
        slider.style.transition = "0.7s";
    }
    // khi slider lùi tới vị trí của slide đầu tiên  nếu bấm back slide tiếp thì sẽ thực hiện translate đến vị trí của clone element đầu slide
    // clone element cuối cùng ở đây là:
    // <div class="clone"> cuoi cung</div>
    // ngay khi slide đến clone element đầu slide ngay lập tức remove transition của slider và dịch chuyển về slide cuối  của slider 
    // và sau khi dịch chuyển về slide cuối add transition trở lại slider
}