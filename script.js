const form = document.getElementById('booking-form');
form.addEventListener('input', () => {
    const formData = new FormData(form);
    console.log(formData)

    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }

})