document.getElementById('e').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // You can add your code here to send the form data to a server or perform any other actions.
    
    // Show the confirmation message and hide the form.
    document.getElementsById('e').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
});




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
