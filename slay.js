function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value;
  const correct = "9497";

  const resultDiv = document.getElementById("result");

  if (userAnswer === correct) {
      resultDiv.innerHTML = "정답입니다!<br> @parkwonkangsphone_k 계정으로 이동하세요";
      resultDiv.style.color = "#5AB0FF";
  } else {
      resultDiv.innerHTML = "틀렸습니다.";
      resultDiv.style.color = "red";
  }

  resultDiv.style.display = "block";
}