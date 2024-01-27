emailjs.init("w6anl8IbqIBlhgnfn");
window.onload = () => {
	const emailForm = document.getElementById("email-form");
	emailForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const senderName = document.getElementById("name");
		const email = document.getElementById("email");

		if (!senderName.value || !email.value) {
			alert("You must enter atleast name and email to submit this form");
			return;
		}
		const serviceID = "service_qokrtkr";
		const templateID = "template_2xf9i9e";

		emailjs.sendForm(serviceID, templateID, emailForm).then(
			() => {
				alert("Email sent to Sudipta!");
			},
			(error) => {
				alert("Email failed to send", error);
			}
		);
	});
};
