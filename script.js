function playGame() {
    const choice = document.getElementById('choice').value;
    const playerNumber = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');

    // Validação do número do jogador
    if (isNaN(playerNumber) || playerNumber < 0 || playerNumber > 5) {
        resultDiv.innerHTML = "Por favor MAURAO, insira um número válido entre 0 e 5.";
        return;
    }
    // Alteraçao 01 de 03
    // Número aleatório do computador (0 a 4)
    const computerNumber = Math.floor(Math.random() * 6);
    const sum = playerNumber + computerNumber;
    const isEven = sum % 2 === 0;

    // Determina o resultado
    let resultText = `Você escolheu ${choice} e jogou ${playerNumber}. O computador jogou ${computerNumber}.<br>`;
    resultText += `Soma: ${sum} (${isEven ? 'Par' : 'Ímpar'}).<br>`;

    if ((isEven && choice === 'par') || (!isEven && choice === 'impar')) {
        resultText += "<strong>Você venceu!</strong>";
    } else {
        resultText += "<strong>Computador venceu!</strong>";
    }

    resultDiv.innerHTML = resultText;
}