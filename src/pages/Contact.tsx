import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Button from "@mui/material/Button";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState("");
  const [fail, setFail] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setIsClicked(true);
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_API_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "Ross",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFail(false);
        setSuccess("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Message failed!");
        setIsClicked(false);
      });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="emailForm">
        <h2>Contact me!</h2>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            Phone:
            <br />
            <small>Format: 123-456-7890</small>{" "}
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Your Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            cols={30}
            rows={10}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <p>{status}</p>
        {fail ? (
          <Button
            type="submit"
            disabled={isClicked}
            variant="contained"
            size="large"
          >
            Send
          </Button>
        ) : (
          <p>{success}</p>
        )}
      </form>
    </div>
  );
};

export default EmailForm;
