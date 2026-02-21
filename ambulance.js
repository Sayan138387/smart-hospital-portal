const form = document.getElementById('ambulanceForm');

    form.addEventListener('submit' , function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const emergencyType = document.getElementById('emergencyType').value;
        if(!name || !phone || !address || !emergencyType) {
            alert("Please fill in all fields.");
            return;
        }
        alert(`Ambulance Confirmed!
            Name: ${name}
            Phone: ${phone}
            Pickup Address: ${address}
            Emergency Type: ${emergencyType}
            Our team is on the way! Stay safe.`);

            form.reset();
        });            

            
