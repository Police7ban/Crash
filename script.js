function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}

function checkPassword() {
    const password = document.getElementById('password-input').value;
    if (password === 'ahmed') {
        showScreen('crash-screen');
        generateRandomNumber(); // Generate a random number initially
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function generateRandomNumber() {
    const min = 1.20;
    const max = 3.20;
    const randomNum = (Math.random() * (max - min) + min).toFixed(2);
    document.getElementById('random-number').textContent = randomNum;
}

// Show the welcome screen initially
showScreen('welcome-screen');

// Switch to password screen after 6 seconds
setTimeout(() => {
    showScreen('password-screen');
}, 6000);