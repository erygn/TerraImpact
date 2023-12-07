let selectQ = null, qShow = null, actualId = 0, answered = {};
let q = [
    {q: 'q1', answer: [{text: 'q1.1', score: 0}, {text: 'q1.2', score: 1}, {text: 'q1.3', score: 2}, {text: 'q1.4', score: 3}]},
    {q: 'q2', answer: [{text: 'q2.1', score: 0}, {text: 'q2.2', score: 0}, {text: 'q2.3', score: 0}]},
    {q: 'q3', answer: [{text: 'q3.1', score: 0}, {text: 'q3.2', score: 0}, {text: 'q3.3', score: 0}]},
]

window.onload = (event) => {
    selectQ = document.getElementById("selectQ");
    qShow = document.getElementById("qShow");

    qShow.textContent = q[actualId].q
    
    for (let i = 0; i < q[actualId].answer.length; i++) {
        let btn = document.createElement('button');
        btn.onclick = function(){answer(i)};
        btn.textContent = q[actualId].answer[i].text;
        selectQ.appendChild(btn)
    }
};

function answer(id) {
    actualId++;
    if (actualId + 1 > q.length) {
        console.log('changement page')
        document.location.href = 'index.html';
        return;
    }
    let child = selectQ.lastElementChild;
    while (child) {
        selectQ.removeChild(child);
        child = selectQ.lastElementChild;
    }
    qShow.textContent = q[actualId].q
    
    for (let i = 0; i < q[actualId].answer.length; i++) {
        let btn = document.createElement('button');
        btn.onclick = function(){answer(i)};
        btn.textContent = q[actualId].answer[i].text;
        selectQ.appendChild(btn)
    }
}