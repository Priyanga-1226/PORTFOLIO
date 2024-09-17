
  (function() {
      emailjs.init('ylrh2g5tGnsD5vJYK'); // Replace with your actual public key
  })();

  function sendMail() {
    var props = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_d82mmdf"; // Replace with your actual service ID
    const templateID = "template_av6wq39"; // Replace with your actual template ID

    emailjs.send(serviceID, templateID, props)
      .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("There was an error sending your message. Please try again.");
      });
  }

