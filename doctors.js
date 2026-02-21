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