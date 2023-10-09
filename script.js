function toggleMinBox() {
    var minBox = document.getElementById("minBox");
    var maxBox = document.getElementById("maxBox");

    if (minBox.style.display === "block") {
        minBox.style.display = "none";
    } else {
        minBox.style.display = "block";
        maxBox.style.display = "none";
    }
}

function toggleMaxBox() {
    var minBox = document.getElementById("minBox");
    var maxBox = document.getElementById("maxBox");

    if (maxBox.style.display === "block") {
        maxBox.style.display = "none";
    } else {
        maxBox.style.display = "block";
        minBox.style.display = "none";
    }
}

function setValue(inputId, selectedValue) {
    var inputField = document.getElementById(inputId);
    inputField.value = selectedValue;
}





document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('e');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // You can add code here to send the form data to your server or perform other actions.
        // For this example, we'll just show a confirmation message.
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset(); // Reset the form after submission
    });
});
