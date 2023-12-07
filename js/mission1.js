let selectQ = null, qShow = null, timer = null, timerT = null, timerQ = 30, actualTime = 0, actualId = 0, answered = {};
let q = [
    {q: 'q1', answer: [{text: 'Vrai', score: 0}, {text: 'Faux', score: 0}]},
    {q: 'q2', answer: [{text: 'Vrai', score: 0}, {text: 'Faux', score: 0}]},
    {q: 'q3', answer: [{text: 'Vrai', score: 0}, {text: 'Faux', score: 0}]},
]

window.onload = (event) => {
    selectQ = document.getElementById("selectQ");
    timer = document.getElementById("timer");
    qShow = document.getElementById("qShow");

    supply()
};

function supply() {
    qShow.textContent = q[actualId].q
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    for (let i = 0; i < q[actualId].answer.length; i++) {
        let btn = document.createElement('button');
        btn.classList.add('selectElem')
        btn.classList.add('widthFull')
        btn.classList.add('cursorPointer')
        btn.onclick = function(){answer(i)};
        btn.textContent = q[actualId].answer[i].text;
        div.appendChild(btn)
    }
    selectQ.appendChild(div);
    startTimer()
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

function answer(id) {
    actualId++;
    if (actualId + 1 > q.length) {
        console.log('changement page')
        document.location.href = 'mission2.html';
        return;
    }
    let child = selectQ.lastElementChild;
    while (child) {
        selectQ.removeChild(child);
        child = selectQ.lastElementChild;
    }
    supply()
}