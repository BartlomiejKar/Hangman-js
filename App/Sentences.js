export class Sentences {
    constructor(text) {
        this.text = text
    }


    getContent = () => {
        let content = ""
        for (let char of this.text) {
            if (char !== " ") {
                content = content + "_"
            } else {
                content = content + " "
            }
        }
        return content
    }



}