'use strict'

function renderGallery() {
    var strHtmls = gImgs.map(img =>

        `<img src="img/meme-imgs(square)/${img.id}.jpg" onclick="onImgSelect(${img.id})">`
    )

    document.querySelector('.gallery').innerHTML = strHtmls.join('')

}

function showGallery() {
    const elGallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.editor')

    elEditor.style.opacity = "0"
    elGallery.style.opacity = "1"
    elGallery.style.zIndex = "0"
    elEditor.style.zIndex = "-1"
    onClearCanvas()


}
function onImgSelect(imgId) {
    gSelectedImgUrl = setImg(imgId)

    renderMeme()
}

function onClearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}
