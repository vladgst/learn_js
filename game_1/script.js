const bike = document.getElementById("bike")
const jump = document.getElementById("jump")

document.addEventListener("keydown", function (event) {
    jumping();
})
function jumping () {
    if (bike.classList != "jumping") {
        bike.classList.add("jumping")
    }
    setTimeout(function () {
        bike.classList.remove("jumping")
    }, 300)
}

let isAlive = setInterval(function () {
    let bikeTop = parseInt(window.getComputedStyle(bike).getPropertyValue("top"))
    let jumpLeft = parseInt(window.getComputedStyle(jump).getPropertyValue("left"))

    if (jumpLeft < 50 && jumpLeft > 0 && bikeTop >= 140) {
        alert("GAME OVER")
    }
}, 10)