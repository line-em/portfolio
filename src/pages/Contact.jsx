import emailjs from "@emailjs/browser";
import { Envelope } from "phosphor-react";
import React, { useRef } from "react";
import { useToggle } from "../hooks/useToggle";

// emailjs.
// TODO: CREATE FORM

const Contact = () => {
	const formRef = useRef(null);
	const [sent, isSent] = useToggle(false);

	// FIXME: Add dotenv to protect the key. At https://dashboard.emailjs.com/admin/templates/yn0vzya, enable more security stuff.
	// Form validation and styles.
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_wt1n5fr", "template_ej104ab", formRef.current, "F9Y_vVQS1p8Uu3uud")
			.then((result) => {
				isSent(true);
				console.log(result);
			})
			.catch((error) => {
				isSent(false);
				console.log(error.text);
			});
	};

	return (
		<section className="main_container" role="note" data-aos="fade-up" id="about">
			<article className="description_area">
				<Envelope size={68} color="var(--dark-pink)" />
				<h3>Drop me a line!</h3>
				<hr />

				<form
					action="https://formspree.io/xqjqgjqg"
					ref={formRef}
					onSubmit={sendEmail}
					className="form_style"
				>
					<fieldset>
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" placeholder="Your name" required />
					</fieldset>
					<fieldset>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your email"
							pattern="[^ @]*@[^ @]*"
							required
						/>
						<p className="error-message">Please enter a valid e-mail address.</p>
					</fieldset>
					<fieldset>
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" placeholder="Your message" required />
					</fieldset>
					<fieldset className="center">
						<button
							type="submit"
							className="button_style border_style text-white extra-padding-x"
						>
							Send
						</button>
					</fieldset>

					{sent ? <h2 className="text-white">Message sent! 🥳</h2> : ""}
				</form>
			</article>
		</section>
	);
};

export default Contact;
