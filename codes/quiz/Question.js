function Question(text, choices, correctAnswer) {
    this.text = text;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
}

Question.prototype.isCorrect = function (option) {
    return (this.correctAnswer === option)
}