

// JavaScript code to toggle between 'container' and 'con'
function togglecon1() {
  var con1 = document.querySelector('.con1');
  var con2 = document.querySelector('.con2');

  if ( con1.style.display === 'none' ){
    con1.style.display = 'flex';
    con2.style.display = 'none';
  } else {
    con1.style.display = 'none';
    con2.style.display = 'flex';
  }
}
function togglecon2() {
  var con1 = document.querySelector('.con1');
  var con2 = document.querySelector('.con2');

  if (con2.style.display === 'none' ) {
    con2.style.display = 'flex';
    con1.style.display = 'none';
  } else {
    con2.style.display = 'none';
    con1.style.display = 'flex';
  }
}











  document.addEventListener("DOMContentLoaded", function () {
    var passwordInput = document.querySelector('input[type="password"]');
    var showPasswordButton = document.querySelector('.password span i');

    showPasswordButton.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.classList.remove("ri-eye-line");
          showPasswordButton.classList.add("ri-eye-off-line");
          showPasswordButton.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        showPasswordButton.classList.remove("ri-eye-off-line");
          showPasswordButton.classList.add("ri-eye-line");
          showPasswordButton.textContent = "Show";
      }
    });
  });
  