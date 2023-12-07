export function startTimer() {
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