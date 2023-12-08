let selectQ = null, qShow = null, timer = null, timerT = null, timerQ = 30, actualTime = 0, actualId = 0, answered = {};
let q = [
    {q: "Trier les moyens de productions d'électricité du plus propre au moins propre", answer: [{text: 'Charbon', score: 3}, {text: 'Nucléaire', score: 0}, {text: 'Photovoltaïque', score: 1}, {text: 'Gaz naturel', score: 2}]},
    {q: "Trier les moyens de transport dans l'ordre croissant d'émission de CO2", answer: [{text: 'Bus', score: 1}, {text: 'Train', score: 3}, {text: 'Voiture', score: 2}, {text: 'Train', score: 0}]},
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
        let div = document.createElement('div'), firstDiv = document.createElement('div'), secondDiv = document.createElement('div'), pSd = document.createElement('p');
        //secondDiv
        pSd.textContent = q[actualId].answer[i].text;
        secondDiv.style.flex = '1';
        secondDiv.appendChild(pSd);

        //firstDiv
        let cDown = document.createElement('div'), cUp = document.createElement('div');
        cUp.innerHTML = `<svg onclick="up(${i})" style="cursor: pointer; margin: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>`
        cDown.innerHTML = `<svg onclick="down(${i})" style="cursor: pointer; margin: 5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>`
        firstDiv.classList.add('chevron')
        firstDiv.appendChild(cUp)
        firstDiv.appendChild(cDown)

        div.appendChild(firstDiv)
        div.appendChild(secondDiv)

        div.classList.add('selectElem')
        div.classList.add('selectElemSort')
        selectQ.appendChild(div)
    }
    startTimer()
}

function clear() {
    let child = selectQ.lastElementChild;
    while (child) {
        selectQ.removeChild(child);
        child = selectQ.lastElementChild;
    }
}

function answer() {
    actualId++;
    if (actualId + 1 > q.length) {
        clearTimeout(timerT)
        console.log('changement page')
        document.location.href = 'mission3.html';
        return;
    }
    clear()
    supply()
}

function up(id) {
    if (id == 0) {
        return;
    }
    clear()
    let inter = q[actualId].answer[id - 1]
    q[actualId].answer[id - 1] = q[actualId].answer[id]
    q[actualId].answer[id] = inter
    supply()
}

function down(id) {
    if (id == q[actualId].answer.length - 1) {
        return
    }
    clear()
    let inter = q[actualId].answer[id + 1]
    q[actualId].answer[id + 1] = q[actualId].answer[id]
    q[actualId].answer[id] = inter
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
        answer()
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