function calculateAverage() {
  var numbersInput = document.getElementById("numbersInput").value;
  var numbersArray = numbersInput.split(",").map(Number);
  if (numbersArray.length === 0) {
    alert("Введите числа для расчета среднего");
    return;
  }
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }

  var average = sum / numbersArray.length;

  var resultElement = document.getElementById("result");
  resultElement.textContent = "Среднее число: " + average;
}

function calculateRemainder() {
  var dividend = document.getElementById("dividendInput").value;
  var divisor = document.getElementById("divisorInput").value;

  if (divisor == 0) {
    alert("Деление на ноль невозможно");
    return;
  }

  var remainder = dividend % divisor;

  var resultElement = document.getElementById("решение");
  resultElement.textContent = "Остаток при делении: " + remainder;
}

