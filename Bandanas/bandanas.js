let currentNumber = 0;

function changeNumber(amount) {
    currentNumber += amount;
    if (currentNumber < 0) {
        currentNumber = 0;
    }
    document.getElementById('numberDisplay').innerText = currentNumber;
}


