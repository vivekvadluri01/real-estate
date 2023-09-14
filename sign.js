

// JavaScript code to toggle between 'container' and 'con'
function togglecontainer() {
  var container = document.querySelector('.container');
  var con = document.querySelector('.con');

  if ( container.style.display === 'none' ){
    container.style.display = 'flex';
    con.style.display = 'none';
  } else {
    container.style.display = 'none';
    con.style.display = 'flex';
  }
}
function togglecon() {
  var container = document.querySelector('.container');
  var con = document.querySelector('.con');

  if (con.style.display === 'none' ) {
    con.style.display = 'flex';
    container.style.display = 'none';
  } else {
    con.style.display = 'none';
    container.style.display = 'flex';
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