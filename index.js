class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^\w\s'-]/g, "")
  }

  get uncapitalizedWords() {
    return ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
  }

  static titleize(sentence) {
    const uncapitalizedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const words = sentence.split(" ")
    const titleizedSentence = words.map(word => {
      if(word === words[0] || uncapitalizedWords.includes(word) === false) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    return titleizedSentence.join(" ")
  }

}