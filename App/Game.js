

import { Sentences } from "./Sentences.js"

class Game {
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

    clickButton = (letter) => {
        console.log(letter)
    }

    getLetters = () => {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
        alphabet.forEach(element => {
            const button = document.createElement("button")
            button.textContent = element
            button.addEventListener("click", () => this.clickButton(element))
            this.letterWrapper.appendChild(button)
        })
    }

    start() {
        this.getLetters()
        const content = this.sentence.getContent()
        this.wordWrapper.textContent = content

    }
}

const game = new Game({
    outputWrapper: document.getElementById("output"),
    wordWrapper: document.getElementById("word"),
    categoryWrapper: document.getElementById("category"),
    letterWrapper: document.getElementById("letters")
})
game.start()

