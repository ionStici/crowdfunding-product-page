const progressBar = document.querySelector('.sum__progress-bar');

let sum = 89914;
const max = 100000;
let percentages = (sum * 100) / max;

const setProgressBar = val =>
    document.documentElement.style.setProperty('--progress-bar', `${val}%`);

setTimeout(() => setProgressBar(percentages), 250);
