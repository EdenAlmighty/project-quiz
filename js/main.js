'use strict'

var gQuests = createQuests()

var gCurrQuestIdx// Index of current displayed question 

function initGame() {
    gCurrQuestIdx = 0 // Index of current displayed question 
    renderQuests(gQuests)
}

function createQuests() {
    var quests = [
        { id: 1, opts: ['Cosbara', 'Pitruzilia'], correctOptIdx: 1 },
        { id: 2, opts: ['Crocodile', 'Aligator'], correctOptIdx: 1 },
        { id: 3, opts: ['Lama', 'Alpaca'], correctOptIdx: 0 }
        // More questions here..
    ]
    return quests
}

function renderQuests() {
    var currQuest = gQuests[gCurrQuestIdx]
    console.log(currQuest)
    const imgId = currQuest.id
    document.querySelector('img').src = `img/${imgId}.jpg`
    var strHTML = ''

    const optsLength = currQuest.opts.length
    for (let i = 0; i < optsLength; i++) {
        var optionText = currQuest.opts[i]
        strHTML += `<button onclick="checkAnswer(${i})">${optionText}</button>`
    }
    document.querySelector('.btn-container').innerHTML = strHTML
}

function checkAnswer(optIdx) {
    var currQuest = gQuests[gCurrQuestIdx]
    if (currQuest.correctOptIdx === optIdx) {
        if (gCurrQuestIdx === gQuests.length - 1) {
            alert('You Win!')
            initGame()
        } else {
            gCurrQuestIdx++
            renderQuests()
        }
    } else {
        playSound()
        alert('WRONG!!!!')
    }
}

function playSound() {
    const sound = new Audio('sounds/wrong.mp3')
    sound.play()
}