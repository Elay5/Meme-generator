'use strict'

var gImgs = [
    { id: 1, url: 'img/meme-imgs(square)/1.jpg', keywords: ['funny', 'happy'] },
    { id: 2, url: 'img/meme-imgs(square)/2.jpg', keywords: ['baby', 'cat'] },
    { id: 3, url: 'img/meme-imgs(square)/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/meme-imgs(square)/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/meme-imgs(square)/5.jpg', keywords: ['funny', 'cat'] },
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'white'
        }
    ]
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }



function setImg(imgId){
    const selectedImg= gImgs.find(img=> img.id===imgId)
    
    return selectedImg.url

}

function setLineTxt() {
    const { lines } = gMeme
    const elMemeTxt = document.querySelector('input').value
    lines[0].txt = elMemeTxt
    renderMeme()


}


function getMeme() {
    return gMeme
}

// function _createImg() {

//     gImgs = []

// }

// function getImgsArr() {

// }