function showPassword(clicked) {
  if (clicked.target.classList.contains("generator")) {
    const lengthInput = document.querySelector('input[type="number"]');
    const length = parseInt(lengthInput.value, 10);

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const [upperCheck, lowerCheck, numberCheck, symbolCheck] = checkboxes;

    const isAnyChecked =
      upperCheck.checked ||
      lowerCheck.checked ||
      numberCheck.checked ||
      symbolCheck.checked;

    if (!isAnyChecked) {
      alert("Please select at least one character type.");
      return;
    }

    if (!isAnyChecked) {
      alert(
        "Please select at least one character type (uppercase, lowercase, numbers, symbols)."
      );
      return;
    }

    if (isNaN(length) || length < 8 || length > 32) {
      alert("Password length must be a number between 8 and 32.");
      return;
    }

    let passwordPool = [];
    function addCharacters(from, to) {
      for (let i = from; i <= to; i++) {
        passwordPool.push(String.fromCharCode(i));
      }
    }
    if (upperCheck.checked) addCharacters(65, 90);
    if (lowerCheck.checked) addCharacters(97, 122);
    if (numberCheck.checked) addCharacters(48, 57);
    if (symbolCheck.checked) {
      addCharacters(33, 47);
      addCharacters(58, 64);
      addCharacters(91, 96);
      addCharacters(123, 126);
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordPool.length);
      password += passwordPool[randomIndex];
    }

    document.querySelector(".password").textContent = password;
  }
}

document.querySelector(".main-box").addEventListener("click", showPassword);
