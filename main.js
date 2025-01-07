document.getElementById('rollButton').addEventListener('click', function() {
    const dice = document.getElementById('dice');
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    dice.textContent = getDiceFace(randomNumber);

    
    dice.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        dice.style.transform = 'rotate(0deg)';
    }, 200);
});

function getDiceFace(number) {
    switch (number) {
        case 1: return '⚀';
        case 2: return '⚁';
        case 3: return '⚂';
        case 4: return '⚃';
        case 5: return '⚄';
        case 6: return '⚅';
        default: return '🎲';
    }
}