const form = document.getElementById('appointmentForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const symptoms = document.getElementById('symptoms').value.trim();

    if(!name || !age || !phone || !email || !doctor || !date || !time || !symptoms) {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Appointment Confirmed!
        Name: ${name}
        Doctor: ${doctor}
        Date: ${date} at ${time}
        We will contact you at ${phone}`);

});