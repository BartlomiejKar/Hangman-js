

import { Sentences } from "./Sentences.js"

class Game {
    quotes = [{
        text: "Terminator",
        category: "Film"
    }, {
        text: "Sanah",
        category: "Muzyka"
    }];
    constructor({ outputWrapper, wordWrapper, categoryWrapper, letterWrapper }) {
        this.outputWrapper = outputWrapper,
            this.wordWrapper = wordWrapper,
            this.categoryWrapper = categoryWrapper,
            this.letterWrapper = letterWrapper
        const { text, category } = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        console.log(text)
        console.log(category)
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


    }
}

const game = new Game({
    outputWrapper: document.getElementById("output"),
    wordWrapper: document.getElementById("word"),
    categoryWrapper: document.getElementById("category"),
    letterWrapper: document.getElementById("letters")
})
game.start()

