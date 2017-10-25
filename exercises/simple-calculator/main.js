additionButton.addEventListener("click", function () {
    document.getElementById('outputAddition').innerHTML = Number(document.getElementById('input1').value) + Number(document.getElementById('input2').value);
});

subtractionButton.addEventListener("click", function () {
    document.getElementById('outputSubtraction').innerHTML = Number(document.getElementById('input3').value) - Number(document.getElementById('input4').value);
});

multiplicationButton.addEventListener("click", function () {
    document.getElementById('outputMultiplication').innerHTML = Number(document.getElementById('input5').value) * Number(document.getElementById('input6').value);
});
