

import { Sentences } from "./Sentences.js"

class Game {
    step = 0
    lastStep = 8

    quotes = [{
        text: "terminator",
        category: "film"
    }, {
        text: "sanah",
        category: "muzyka"
    }, {
        text: "robert lewandowski",
        category: "piłkarz"
    }];
    constructor({ outputWrapper, wordWrapper, categoryWrapper, letterWrapper }) {
        this.outputWrapper = outputWrapper,
            this.wordWrapper = wordWrapper,
            this.categoryWrapper = categoryWrapper,
            this.letterWrapper = letterWrapper
        const { text, category } = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.categoryWrapper.textContent = category
        this.sentence = new Sentences(text)

    }

    clickButton = (letter, event) => {
        event.target.disabled = true
        if (!this.sentence.guessLetters(letter)) {
            this.drawingStep()
        }
        this.getWords()
        if (!this.wordWrapper.textContent.includes("_")) {
            this.winning()
        }
        if (this.step === this.lastStep) {
            this.loosing()
        }

    }

    drawingStep = () => {
        document.getElementsByClassName("step")[this.step].style.opacity = "1"
        this.step++
    }

    getLetters = () => {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
        alphabet.forEach(element => {
            const button = document.createElement("button")
            button.textContent = element
            button.addEventListener("click", (event) => this.clickButton(element, event))
            this.letterWrapper.appendChild(button)
        })
    }

    getWords = () => {
        const content = this.sentence.getContent()
        this.wordWrapper.textContent = content
    }

    winning = () => {
        this.letterWrapper.textContent = "";
        this.categoryWrapper.textContent = "";
        this.wordWrapper.textContent = "BRAWO WYGRAŁES"
    }
    loosing = () => {
        this.letterWrapper.textContent = "";
        this.categoryWrapper.textContent = "";
        this.wordWrapper.textContent = "PRZEGRAŁEŚ"
    }

    start() {
        this.getLetters()
        this.getWords()


    }
}

const game = new Game({
    outputWrapper: document.getElementById("output"),
    wordWrapper: document.getElementById("word"),
    categoryWrapper: document.getElementById("category"),
    letterWrapper: document.getElementById("letters")
})
game.start()

