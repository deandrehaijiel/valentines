function onWindowLoad() {
    alert("WARNING!!! PLEASE ANSWER THE FOLLOWING QUESTION CAREFULLY!");
}

window.onload = onWindowLoad;

function playMusic() {
    const noImage = document.getElementById('noImage');
    if (noImage.style.display === 'none') {
        const musicAudio = document.getElementById('musicAudio');
        musicAudio.play();
    }
}

document.addEventListener('mousemove', playMusic);

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    const minDistance = 100;

    let randomX, randomY;

    do {
        randomX = Math.random() < 0.5 ? Math.floor(Math.random() * 800) + 1 : -Math.floor(Math.random() * 900) + 1;
        randomY = Math.random() < 0.5 ? Math.floor(Math.random() * 300) + 1 : -Math.floor(Math.random() * 800) + 1;
    } while (isTooClose(randomX, randomY, yesButton, minDistance));

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    const valentineImage = document.getElementById('valentineImage');
    valentineImage.style.display = 'none';

    const noImage = document.getElementById('noImage');
    noImage.style.display = 'inline-block';

    const musicAudio = document.getElementById('musicAudio');
    musicAudio.pause();

    const noAudio = document.getElementById('noAudio');
    noAudio.play();
}

function isTooClose(x, y, element, minDistance) {
    const rectNo = element.getBoundingClientRect();
    const rectNew = { x, y, width: 100, height: 20 };

    return (
        rectNew.x < rectNo.x + rectNo.width + minDistance &&
        rectNew.x + rectNew.width > rectNo.x - minDistance &&
        rectNew.y < rectNo.y + rectNo.height + minDistance &&
        rectNew.y + rectNew.height > rectNo.y - minDistance
    );
}

const jsConfetti = new JSConfetti();

function yesButton() {
    const yesTitle = document.getElementById('yesTitle');
    yesTitle.style.display = 'block';

    const yesCaption = document.getElementById('yesCaption');
    yesCaption.style.display = 'block';

    const questionTitle = document.getElementById('questionTitle');
    questionTitle.style.display = 'none';

    const yesImage = document.getElementById('yesImage');
    yesImage.style.display = 'inline-block';

    const valentineImage = document.getElementById('valentineImage');
    valentineImage.style.display = 'none';

    const noImage = document.getElementById('noImage');
    noImage.style.display = 'none';

    const yesButton = document.getElementById('yesButton');
    yesButton.style.display = 'none';

    const noButton = document.getElementById('noButton');
    noButton.style.display = 'none';

    const musicAudio = document.getElementById('musicAudio');
    musicAudio.play();

    const yesAudio = document.getElementById('yesAudio');
    yesAudio.play();

    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸', '🎉', '🌟', '🍭', '🌼', '💖', '🦄'],
        emojiSize: 100,
        confettiNumber: 100,
    });
}

function confetti() {
    if (yesImage.style.display !== 'none') {
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸', '🎉', '🌟', '🍭', '🌼', '💖', '🦄'],
            emojiSize: 100,
            confettiNumber: 100,
        });
    }
}

document.addEventListener('click', confetti);
