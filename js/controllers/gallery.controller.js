'use strict'

function renderGallery() {
    var strHtmls = gImgs.map(img =>
        `<img src="img/meme-imgs(square)/${img.id}.jpg" onclick="onImgSelect(${img.id})">`
    )

    document.querySelector('.gallery').innerHTML = strHtmls.join('')
}


function onImgSelect(imgId) {
const selectedImgUrl= setImg(imgId)
    
     renderMeme(selectedImgUrl)
}
