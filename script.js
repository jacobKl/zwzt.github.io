const icons = ['leaf.png', 'pill-round.png', 'pill.png', 'syringe.png']

const iconsAmount = 8

//Generowanie ikon
for (let c = 0; c < iconsAmount; c++) {
    let randomIcon = icons[Math.floor(Math.random() * icons.length)]
    let newIcon = document.createElement('img')
    newIcon.src = './wip-icons/' + randomIcon
    if (c % 2 == 1) {
        newIcon.style.top = String(Math.floor(Math.random() * 25)) + "vh"
    } else {
        newIcon.style.top = String(Math.floor(Math.random() * 20) + 60) + "vh"
    }
    newIcon.style.left = String(Math.floor(Math.random() * 70) + 10) + "vw"
    newIcon.setAttribute('class', 'moving-icon')
    document.querySelector('.main').appendChild(newIcon)
}