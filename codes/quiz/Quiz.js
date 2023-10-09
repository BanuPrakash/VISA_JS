function Quiz(name, questions) {
    this.name = name;
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
}

Quiz.prototype.nextQuestion = function () {
    return this.questions[this.currentIndex];
}

Quiz.prototype.answer = function (ans) {
    if (this.questions[this.currentIndex].correctAnswer === ans) {
        this.score++;
    }
    this.currentIndex++;
}

