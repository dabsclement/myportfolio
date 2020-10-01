const form = document.getElementById("contactForm");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};
SHA256:p4UzWYjBHyz5hLlGKAqUn1vvSrVDeyKQrfZAMjaQMcQ 