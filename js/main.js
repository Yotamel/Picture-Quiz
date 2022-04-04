'use strict'
var gQuests = [
    {
        id: 1, opts: ['A man looking at me with his mouth open', 'Two bears doing a high-five.'],
        answr: ["it's actually two bears you're wrong", "I mean look at it it's clearly two bears, like is there even a question about it"], correctOptIndex: 1
    },
    {
        id: 2, opts: ["Squirrels.", "Smoke and red, the colors of war"],
        answr: ["Squirrles.", "What? no that's weird."],
        correctOptIndex: 0
    },
    { id: 3, opts: ["I see a profile of a lion on the circle", "A warm hug"], correctOptIndex: 3 },
    { id: 4, opts: ["A thumb war!", "A gate opening welcoming me inside"], answr: ['you beat this scientific quiz! check your email in 3 days for the results', 'You must be blind'], correctOptIndex: 0 },
    { id: 5, opts:["Play Again!",""]}
]
var elBoxHeader = document.querySelectorAll('.instructionBox span')[0]
var elBoxText = document.querySelectorAll('.instructionBox span')[1]
var elImage = document.querySelector('.imageDisplay')
var elBtn1 = document.querySelector('.button')
var elBtn2 = document.querySelector('.button2')
var gCurrQuestIdx

function initGame() {
    gCurrQuestIdx = 0
    elBoxHeader.innerHTML = ""
    elBoxText.innerHTML = ""
    elBtn2.style.display = 'flex';
    renderQuest(gCurrQuestIdx)
}

function renderQuest() {
    var loadedQuest = gQuests[gCurrQuestIdx]
    elImage.innerHTML = `<img src="img/${loadedQuest.id}.png"/>`
    elBtn1.innerHTML = loadedQuest.opts[0]
    elBtn2.innerHTML = loadedQuest.opts[1]
    if(loadedQuest.id === 5) elBtn2.style.display = 'none';

}

function checkQuest(opt) {
    var loadedQuest = gQuests[gCurrQuestIdx]
    if(loadedQuest.id === 5){
        initGame()
    }else if(loadedQuest.correctOptIndex === 3){
        elBoxHeader.innerHTML = 'WAIT!'
        elBoxText.innerHTML = "That's just a coffee stain my bad. moving on."
        gCurrQuestIdx++
        renderQuest()
    }else if (opt === loadedQuest.correctOptIndex) {
        elBoxHeader.innerHTML = 'CORRECT!'
        elBoxText.innerHTML = loadedQuest.answr[opt]
        gCurrQuestIdx++
        renderQuest()
    } else {
        elBoxHeader.innerHTML = 'WRONG!'
        elBoxText.innerHTML = loadedQuest.answr[opt]
    }
}