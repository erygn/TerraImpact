let selectQ = null, qShow = null, actualId = 0, answered = {};
let q = [
    {q: 'q1', answer: [{text: 'Vrai', score: 0}, {text: 'Faux', score: 0}]},
    {q: 'q2', answer: [{text: 'Vrai', score: 0}, {text: 'Faux', score: 0}]},
    {q: 'q3', answer: [{text: 'Vrai', score: 0}, {text: 'Faux', score: 0}]},
]

window.onload = (event) => {
    selectQ = document.getElementById("selectQ");
    qShow = document.getElementById("qShow");

    qShow.textContent = q[actualId].q
    
    for (let i = 0; i < q[actualId].answer.length; i++) {
        let btn = document.createElement('button');
        btn.onclick = function(){answer(i)};
        btn.textContent = q[actualId].answer[i].text;
        selectQ.appendChild(btn);
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