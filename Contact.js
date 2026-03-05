// Initialize email.js with the provided API key
emailjs.init("w6anl8IbqIBlhgnfn");

// Execute the following code when the window is fully loaded
window.onload = () => {
  // Get the email form element by its ID
  const emailForm = document.getElementById("email-form");

  // Add a submit event listener to the email form
  emailForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the sender's name and email input elements by their IDs
    const senderName = document.getElementById("name");
    const email = document.getElementById("email");

    // Check if both name and email fields are filled
    if (!senderName.value || !email.value) {
      // Display an alert if either name or email is missing
      alert("You must enter at least name and email to submit this form");
      return;
    }

    // Define the service ID and template ID for email.js
    const serviceID = "service_qokrtkr";
    const templateID = "template_2xf9i9e";

    // Use email.js to send the form data
    emailjs.sendForm(serviceID, templateID, emailForm).then(
      () => {
        // Display a success alert if the email is sent successfully
        alert("Email sent to Sudipta!");
      },
      (error) => {
        // Display an error alert if the email fails to send
        alert("Email failed to send", error);
      }
    );
  });
};
