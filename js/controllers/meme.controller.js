'use strict'
function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log(gMeme.lines[0].txt)

}

function renderMeme() {
    const meme= getMeme()

    const elImg = new Image()
    elImg.src = 'img/meme-imgs (square)/1.jpg'

    // Draw the image on the canvas only when it's ready

    elImg.onload = () => { gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
      
        gCtx.fillStyle = meme.lines[0].color
        gCtx.font= 'bold 30px ariel'
        gCtx.fillText(meme.lines[0].txt, 50, 65)
        
        
    }
    
    // var canvas = document.getElementById('idCanvas');
    // var dataURL = canvas.toDataURL();

}





