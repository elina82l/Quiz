const question =  document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"))

let questions = [];



fetch('https://opentdb.com/api.php?amount=8&category=22&difficulty=easy&type=multiple')
.then(res =>{
    return res.json();
})
.then(data => {
    questions = data.results.map(singleQuestion => {
        const fetchedQuestion = {
            question: singleQuestion.question
        }
    });
})