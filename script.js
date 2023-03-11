const message =
  "Votre message a bien été pris en compte par le Royaume ! Merci de votre visite ! ";
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
