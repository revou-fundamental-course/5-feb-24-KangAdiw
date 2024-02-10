function convertTo() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var calculationInput = document.getElementById("calculation");

  var celsiusValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusValue)) {
    var fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    calculationInput.value = celsiusValue + " °C * 9/5 + 32 = " + fahrenheitValue.toFixed(2) + " °F";
  } else {
    alert("Masukkan suhu Celsius yang valid.");
  }
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculation").value = "";
}

function reverseConversion() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var calculationInput = document.getElementById("calculation");

  var fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitValue)) {
    var celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    celsiusInput.value = celsiusValue.toFixed(2);
    calculationInput.value = "(" + fahrenheitValue.toFixed(2) + " °F - 32) * 5/9 = " + celsiusValue.toFixed(2) + " °C";
  } else {
    alert("Masukkan suhu Fahrenheit yang valid.");
  }
}
