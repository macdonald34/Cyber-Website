document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // You can add more robust form validation logic here if needed
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (email && phone) {
        // Form is valid, you can submit the form or perform other actions
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all required fields.');
    }
});