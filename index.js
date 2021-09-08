btnStart = document.querySelector('[data-action="start"]');
btnStop = document.querySelector('[data-action="stop"]');

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function bgColor() {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)]
}
let timerId = null;


btnStart.addEventListener('click', () => {
    timerId = setInterval(bgColor, 1000)
    btnStart.disabled = true;
})

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.disabled=false;
})