'use strict'

var gImgs = [
    { id: 1, url: 'img/meme-imgs(square)/1.jpg', keywords: ['funny', 'happy'] },
    { id: 2, url: 'img/meme-imgs(square)/2.jpg', keywords: ['baby', 'cat'] },
    { id: 3, url: 'img/meme-imgs(square)/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/meme-imgs(square)/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/meme-imgs(square)/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/meme-imgs(square)/6.jpg', keywords: ['funny', 'happy'] },
    { id: 7, url: 'img/meme-imgs(square)/7.jpg', keywords: ['baby', 'cat'] },
    { id: 8, url: 'img/meme-imgs(square)/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'img/meme-imgs(square)/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/meme-imgs(square)/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'img/meme-imgs(square)/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/meme-imgs(square)/12.jpg', keywords: ['funny', 'cat'] },
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            idx: 1,
            txt: 'I sometimes eat Falafel',
            size: 16,
            color: 'white',
            isSelected: true,


        },
        {
            idx: 2,
            txt: 'but sometimes, Shawarma is my go to',
            size: 16,
            color: 'white',
            isSelected: false,



        }
    ],
    isDrag: false,
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


function addLine(txt, size, color) {
    const newLine = {
        idx: gMeme.lines.length + 1,
        txt,
        size,
        color,
        isSelected: false,


    }
    gMeme.lines.push(newLine)
}

function setImg(imgId) {
    const selectedImg = gImgs.find(img => img.id === imgId)

    return selectedImg.url

}
function drawFrame() {


}

function switchLine() {
    const { lines } = gMeme
    if (gMeme.selectedLineIdx >= lines.length) {
        gMeme.selectedLineIdx = 0
        lines[0].isSelected = true
    }
    else {
        lines[0].isSelected = false
        lines[gMeme.selectedLineIdx].isSelected = true
        gMeme.selectedLineIdx++

    }
    renderMeme()

}

function setLineTxt() {
    const { selectedLineIdx } = gMeme
    const { lines } = gMeme

    const elMemeTxt = document.querySelector('input.meme-text').value
    lines[selectedLineIdx].txt = elMemeTxt
    renderMeme()

}


function getMeme() {
    return gMeme
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    // Changing the canvas dimension clears the canvas
    gElCanvas.width = elContainer.clientWidth
    renderMeme()
}

