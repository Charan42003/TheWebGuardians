document.querySelector(".single-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let form_name = document.querySelector(".contact-name").value;
  let form_email = document.querySelector(".contact-email").value;
  let form_message = document.querySelector(".contact-message").value;

  saveContactInfo(form_name, form_email, form_message);

  document.querySelector("#contactForm").reset();

  function sendMail(parmas) {
    var templ = {
      to_name: "Sanjay",
      from_name: document.getElementById("from_name").value,
      message: document.getElementById("message").value,
      reply_to: document.getElementById("reply_to").value,
    };

    emailjs.send("service_1bxaq2k", "service_1bxaq2k").then(function (res) {
      alert("Thank you contacting, I will get back soon", res.status);
    });
  }
}
