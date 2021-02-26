export class Sentences {
    constructor(text) {
        this.text = text.toLowerCase(),
            this.guessedLetters = []
    }


    getContent = () => {
        let content = ""
        for (let char of this.text) {
            if (char == " " || this.guessedLetters.includes(char)) {
                content = content + char
            } else {
                content = content + "_"
            }
        }
        return content
    }

    guessLetters = (letters) => {
        if (!this.text.includes(letters)) {
            return false
        } else {
            this.guessedLetters.push(letters)
            return true
        }
    }

}