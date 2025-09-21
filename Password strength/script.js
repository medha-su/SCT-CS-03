function checkStrength() {
  const password = document.getElementById("password").value;
  const strengthDiv = document.getElementById("strength");

  let strength = 0;

  // Criteria
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  // Display result
  if (password.length === 0) {
    strengthDiv.textContent = "Enter a password";
    strengthDiv.className = "";
  } else if (strength <= 2) {
    strengthDiv.textContent = "Weak Password";
    strengthDiv.className = "weak";
  } else if (strength === 3 || strength === 4) {
    strengthDiv.textContent = "Medium Password";
    strengthDiv.className = "medium";
  } else {
    strengthDiv.textContent = "Strong Password";
    strengthDiv.className = "strong";
  }
}
