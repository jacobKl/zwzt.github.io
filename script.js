const colors = ["#03a66a", "#f2b022", "#f22233", "#ececec"]
const animations = ["moving-star-slow", "moving-star-fast", "moving-star-medium"]
const starAmount = 30

//Grafiki do canvasa
let imgClear = new Image()
imgClear.src = "./images/astronaut-n.png"
let imgI1 = new Image()
let imgI2 = new Image()
let imgI3 = new Image()
let imgI4 = new Image()
imgI1.src = "./images/astronaut-i1.png"
imgI2.src = "./images/astronaut-i2.png"
imgI3.src = "./images/astronaut-i3.png"
imgI4.src = "./images/astronaut-i4.png"
const frames = [imgI1, imgI2, imgI3, imgI4]
let imagesLoaded = 0

frames.forEach(frame => {
    frame.onload = () => {
        imagesLoaded += 1
    }
})


//Generowanie gwiazdek
for (let c = 0; c < starAmount; c++) {
    let randomStar = document.createElement('div')
    let size = Math.floor(Math.random() * 10 + 1)
    randomStar.style.width = size + "px"
    randomStar.style.height = size + "px"
    randomStar.style.borderRadius = size / 2 + "px"
    randomStar.style.position = "absolute"
    randomStar.style.top = Math.floor(Math.random() * 95) + "vh"
    randomStar.style.left = Math.floor(Math.random() * 95) + "vw"
    randomStar.style.backgroundColor = colors[Math.floor(Math.random() * 4)]
    randomStar.setAttribute('class', animations[Math.floor(Math.random() * 3)])
    document.querySelector('.main').appendChild(randomStar)
}

//Generowanie canvasa
let canvas = document.createElement("canvas")
canvas.width = 1200
canvas.height = 650
canvas.setAttribute('class', 'canvas')
document.querySelector('.main-bg').appendChild(canvas)
let ctx = canvas.getContext('2d')
let smallSize = false
if (window.innerWidth <= 1650) {
    smallSize = true
}

//Funkcja do resizu canvasa
function checkSize() {
    if (window.innerWidth <= 1650) {
        newSize = true
    } else {
        newSize = false
    }
    if (smallSize != newSize) {
        smallSize = newSize
        if (smallSize) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(imgClear, 0, 0, 800, 400)
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(imgClear, -50, -100)
        }
    }
}

imgClear.onload = () => {
    if (smallSize) {
        ctx.drawImage(imgClear, 0, 0, 800, 400)
    } else {
        ctx.drawImage(imgClear, -50, -100)
    }
    window.onresize = checkSize
}


//Animacja spawania
function shuffleFrames() {
    let counter = 0

    let interval = setInterval(function () {
        if (smallSize) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(frames[Math.floor(Math.random() * frames.length)], 0, 0, 800, 400)
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(frames[Math.floor(Math.random() * frames.length)], -50, -100)
        }
        if (counter < 15) {
            counter++
        } else {
            clearInterval(interval)
            if (smallSize) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(imgClear, 0, 0, 800, 400)
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(imgClear, -50, -100)
            }
        }
    }, 30)
}


//Odstęp w animacjach spawania
let animationInterval = setInterval(() => {
    if (imagesLoaded == 4) {
        shuffleFrames()
    }
}, 3000)