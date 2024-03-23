'use strict'
function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')

    window.addEventListener('resize', () => resizeCanvas())
    renderGallery()

}

function renderMeme() {
    const elContainer = document.querySelector('.canvas-container')
    const meme = getMeme()
    const { selectedLineIdx } = meme

    var lineStartX = 30
    var lineStartY = 70


    const elImg = new Image()
    elImg.src = gSelectedImgUrl

    // Draw the image on the canvas only when it's ready

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        meme.lines.map((line) => {

            gCtx.fillStyle = line.color
            gCtx.font = `bold ${line.size}px ariel`
            // if (line.isSelected) drawFrame(lineStartX, lineStartY, line.idx)
            // if(!line.isSelected)
        })

        drawText(lineStartX, lineStartY)

    }

    const elEditor = document.querySelector('section.editor')
    const elGallery = document.querySelector('section.gallery')

    elEditor.style.opacity = "1"
    elGallery.style.opacity = "0"
    elGallery.style.zIndex = "-1"
    elEditor.style.zIndex = "0"
}

function onChangeTextColor(elColor) {
    const meme = getMeme()
    meme.lines.forEach(line => line.color = elColor.value)

    renderMeme()
}

function onIncreaseFont() {
    const meme = getMeme()
    if (meme.lines[0].size >= 34) return

    meme.lines.forEach(line => line.size++)
    renderMeme()
}

function onDecreaseFont() {
    const meme = getMeme()
    if (meme.lines[0].size <= 10) return

    meme.lines.forEach(line => line.size--)
    renderMeme()
}

function onAddLine() {
    const elText = document.querySelector('form input[type=text]').value
    const elSize = document.querySelector('form input[type=number]').value
    const elColor = document.querySelector('form input[type=color]').value
    addLine(elText, elSize, elColor)
    renderMeme()

}

function closeAddLineModal() {
    const elModal = document.querySelector('.add-line')
    elModal.close()
}
function openAddLineModal() {
    const elModal = document.querySelector('.add-line')
    elModal.showModal()

}

function onSwitchLine() {
    switchLine()

}

// function drawFrame(dx, dy, idx) {

//     gCtx.strokeStyle = "black";
//     gCtx.lineWidth = 3;
//     gCtx.moveTo(dx - 5, (dy * idx) - 25);
//     gCtx.lineTo(dx - 5, (dy * idx) + 10);
//     gCtx.lineTo(dx + 300, (dy * idx) + 10);
//     gCtx.lineTo(dx + 300, (dy * idx) - 25);
//     gCtx.lineTo(dx - 5, (dy * idx) - 25);
//     gCtx.stroke();

// }

function showEv(ev) {
    console.log(ev)
}


function drawText(x, y) {
    const meme = getMeme()
    const elContainer = document.querySelector('.canvas-container')
    gCtx.fillText(meme.lines[0].txt, x, y, elContainer.clientWidth - elContainer.clientWidth / 6)
    if (meme.lines.length > 1) gCtx.fillText(meme.lines[1].txt, x, y * 2, elContainer.clientWidth - elContainer.clientWidth / 6)
    if (meme.lines.length > 2) gCtx.fillText(meme.lines[2].txt, x, y * 3, elContainer.clientWidth - elContainer.clientWidth / 6)
}








