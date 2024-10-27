document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseMessage = document.getElementById('response-message');

    // Подготовка данных для отправки
    if (!name || !email || !message) {
        responseMessage.textContent = 'Please fill out all fields.';
        return;
    }
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Отправка почты через EmailJS
    emailjs.send('service_lqvmvxc', 'template_jj8u7gv', templateParams)
        .then(function(response) {
            responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
            // Сброс формы после успешной отправки
            document.getElementById('contact-form').reset();
        }, function(error) {
            responseMessage.textContent = 'Sorry, there was an error sending your message. Please try again later.';
        });
});

  