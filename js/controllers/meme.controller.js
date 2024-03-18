'use strict'
function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    

}

function renderMeme(imgUrl) {
    const meme= getMeme()

    const elImg = new Image()
    elImg.src = imgUrl

    // Draw the image on the canvas only when it's ready

    elImg.onload = () => { gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
      
        gCtx.fillStyle = meme.lines[0].color
        gCtx.font= 'bold 30px ariel'
        gCtx.fillText(meme.lines[0].txt, 50, 65)
        
        
    }

    const elEditor= document.querySelector('section.editor')
    const elGallery= document.querySelector('section.gallery')
    
    elEditor.style.opacity="1"
    elGallery.style.opacity="0"
    elGallery.style.zIndex="-1"
    elEditor.style.zIndex ="0"


    
    // var canvas = document.getElementById('idCanvas');
    // var dataURL = canvas.toDataURL();

}





