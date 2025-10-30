const select = document.getElementById("select");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const convertBtn = document.getElementById("convertBtn");
const message = document.getElementById("message");

convertBtn.addEventListener("click", () => {
  let temp = parseFloat(input1.value);
  message.style.display = "none";

  if (isNaN(temp)) {
    message.style.display = "block";
    message.style.color = "red";
    message.textContent = "⚠️ Please enter a valid number!";
    return;
  }

  if (select.value === "f_to_c") {
    let result = ((temp - 32) * 5) / 9;
    input2.value = result.toFixed(2);
    message.style.display = "block";
    message.style.color = "green";
    message.textContent = `✅ Temperature Converted: ${temp}°F = ${result.toFixed(
      2
    )}°C`;
    window.alert(`Temperature Converted: ${temp}°C = ${result.toFixed(2)}°F`);
  } else if (select.value === "c_to_f") {
    let result = (temp * 9) / 5 + 32;
    input2.value = result.toFixed(2);
    message.style.display = "block";
    message.style.color = "green";
    message.textContent = `✅ Temperature Converted: ${temp}°C = ${result.toFixed(
      2
    )}°F`;
    window.alert(`Temperature Converted: ${temp}°C = ${result.toFixed(2)}°F`);
  } else {
    message.style.display = "block";
    message.style.color = "red";
    message.textContent = "⚠️ Please select a conversion type first!";
  }

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
});
