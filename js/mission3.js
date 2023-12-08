let selectQ = null, qShow = null, timer = null, timerT = null, timerQ = 30, actualTime = 0, actualId = 0, answered = {};
let q = [
    {q: 'q1', answer: [{text: 'q1.1', score: 0}, {text: 'q1.2', score: 1}, {text: 'q1.3', score: 2}, {text: 'q1.4', score: 3}]},
    {q: 'q2', answer: [{text: 'q2.1', score: 0}, {text: 'q2.2', score: 0}, {text: 'q2.3', score: 0}]},
    {q: 'q3', answer: [{text: 'q3.1', score: 0}, {text: 'q3.2', score: 0}, {text: 'q3.3', score: 0}]},
]

window.onload = (event) => {
    selectQ = document.getElementById("selectQ");
    timer = document.getElementById("timer");
    qShow = document.getElementById("qShow");

    supply()
};

function supply() {
    qShow.textContent = q[actualId].q
    
    for (let i = 0; i < q[actualId].answer.length; i++) {
        let btn = document.createElement('button');
        btn.classList.add('selectElem')
        btn.classList.add('widthFull')
        btn.classList.add('cursorPointer')
        btn.onclick = function(){answer(i)};
        btn.textContent = q[actualId].answer[i].text;
        selectQ.appendChild(btn)
    }
    startTimer()
}

function answer(id) {
    actualId++;
    if (actualId + 1 > q.length) {
        clearTimeout(timerT)
        console.log('changement page')
        document.location.href = 'index.html';
        return;
    }
    let child = selectQ.lastElementChild;
    while (child) {
        selectQ.removeChild(child);
        child = selectQ.lastElementChild;
    }
    supply()
}

function startTimer() {
    timer.textContent = "00:30"
    actualTime = timerQ
    clearTimeout(timerT)
    decrement()
}

function decrement() {
    if (actualTime == 0) {
        answer(0)
        return;
    }
    actualTime--
    let showTimer = actualTime
    if (String(actualTime).length == 1) {
        showTimer = '0' + String(actualTime)
    }
    timer.textContent = `00:${showTimer}`
    timerT = setTimeout(decrement, 1000)
}