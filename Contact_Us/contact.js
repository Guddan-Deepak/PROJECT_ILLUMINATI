document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents default form submission

        const name = document.querySelector('input[placeholder="Tejas mishra "]').value.trim();
        const phone = document.querySelector('input[placeholder="+91 123 123 1234"]').value.trim();
        const email = document.querySelector('input[placeholder="tejas@gmail.com "]').value.trim();
        const subject = document.querySelector('input[placeholder="Product Demo"]').value.trim();
        const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();

        if (!name || !phone || !email || !subject || !message) {
            alert('Please fill out all fields.');
            return;
        }

        alert(`Message Sent!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

        document.getElementById('contact-form').reset();
    });
});
