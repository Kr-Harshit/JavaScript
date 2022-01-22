
const keys = document.querySelectorAll('.key');

function playSound(e) {
    const keyCode = e.code;
    const audio = document.querySelector(`audio[data-key=${keyCode}]`);
    const key = document.querySelector(`.key[data-key=${keyCode}]`);

    if (audio && key) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("pressed");
    }
}

function removePressed(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('pressed');
};

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removePressed));