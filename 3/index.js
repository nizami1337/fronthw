let form = document.getElementById('quiz');

quiz.addEventListener('submit', (e) => {
    e.preventDefault();
    let fdata = new FormData(quiz);
    let data = {}
    for (let [key,val] of fdata.entries()) {
        data[key] = val;
    }
    let correctAns = 0
    if (data['q1'] == '5') { correctAns += 1 }
    if (data['q2'] == '5') { correctAns += 1 }
    document.getElementById('correctAnswers').innerHTML = correctAns
    document.getElementById('result').style.display = 'block'
})