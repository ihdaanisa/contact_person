const contactForm = document.getElementById("contact-form");
const loader = document.querySelector(".loader");
const successMessage = document.querySelector(".success-message");

loader.style.display = "none";
successMessage.style.display = "none";

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loader.style.display = "block";
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      loader.style.display = "none";
      successMessage.style.display = "block"; // Tampilkan pesan sukses
      // Optional: Reset form fields
      contactForm.reset();
    })
    .catch(() => {
      loader.style.display = "none";
      alert("Error occurred");
    });
});
