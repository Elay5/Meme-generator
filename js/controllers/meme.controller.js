'use strict'
function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()


}

function renderMeme() {
    const meme = getMeme()

    const elImg = new Image()
    elImg.src = gSelectedImgUrl

    // Draw the image on the canvas only when it's ready

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        meme.lines.map(line => {
            gCtx.fillStyle = line.color
            gCtx.font = `bold ${line.size}px ariel`
            // gCtx.fillText(line.txt, 50, 65)
        })

        // gCtx.fillStyle = meme.lines[0].color
        // gCtx.font = `bold ${meme.lines[0].size}px ariel`
        gCtx.fillText(meme.lines[0].txt, 50, 65)

        if (meme.lines.length > 1) gCtx.fillText(meme.lines[1].txt, 50, 300)
        // gCtx.fillStyle = meme.lines[1].color
        // gCtx.font = `bold ${meme.lines[1].size}px ariel`
        
        if (meme.lines.length > 2) gCtx.fillText(meme.lines[2].txt, 50, 350)
        
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


    // const elModal= document.querySelector('.close-btn')
    // elModal.close()
}


function openAddLineModal() {
    const elModal = document.querySelector('.add-line')
    elModal.showModal()

}






