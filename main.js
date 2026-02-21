// dark mode toggle

const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode');
});

//sos

const sosBtn = document.getElementById('sosBtn');
sosBtn.addEventListener('click' , () => {
    alert("Emergency! Call 123-456-7890 now.\nLocation sharing requested...");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            alert('Your Location: \nLatitude: ${position.coords.latitude \nLongtitude: ${position.coords.longitude}');
        });
    }else {
        alert("Geolocation not supported by your browser.");
    }
});

// ===============================
// Doctor Search & Filter
// ===============================

const searchInput = document.getElementById("doctorSearch");
const specialityFilter = document.getElementById("specialityFilter");
const doctorCards = document.querySelectorAll(".doctor-card");

function filterDoctors() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedSpeciality = specialityFilter.value;

  doctorCards.forEach(card => {
    const doctorName = card.dataset.name;
    const doctorSpeciality = card.dataset.speciality;

    const nameMatch = doctorName.includes(searchValue);
    const specialityMatch =
      selectedSpeciality === "all" ||
      doctorSpeciality === selectedSpeciality;

    if (nameMatch && specialityMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterDoctors);
specialityFilter.addEventListener("change", filterDoctors); 




// document.addEventListener("DOMContentLoaded", () => {

//   const sosBtn = document.getElementById("sosBtn");

//   if (sosBtn) {
//     sosBtn.addEventListener("click", () => {
//       alert("Emergency! Call 123-456-7890");

//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//           alert(
//             `Your Location:
// Lat: ${position.coords.latitude}
// Lng: ${position.coords.longitude}`
//           );
//         });
//       } else {
//         alert("Geolocation not supported");
//       }
//     });
//   }



// });

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully! We'll contact you soon.");
      contactForm.reset();
    });
  }
});