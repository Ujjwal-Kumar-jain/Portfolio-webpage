
    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("confirmation").textContent = "Message sent successfully!";
      this.reset();
    });
  