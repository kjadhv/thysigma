import React from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ title = "Leave A Message", fullWidth = false }) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formEl = e.currentTarget;
emailjs
    .sendForm(
      "service_psgah3g",
      "template_8rsmgpq",
      formEl,              // ✅ use stored reference
      "c07Juoilf22vQAYjR"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        formEl.reset();    // ✅ use stored reference
      },
      (error) => {
        console.log(error);
        alert("Failed to send message.");
        }
      );
  };

  return (
    <>
      <div className="contact-main__form">
        <h3>{title}</h3>

        <form className="section__content-cta" onSubmit={handleSubmit}>
          <div className="group-wrapper">
            <div className="group-input">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="group-input">
              <input type="email" name="email" placeholder="Email" required />
            </div>
          </div>

          <div className="group-input">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>

          <div
            className="group-input"
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <textarea
              name="message"
              placeholder="Message"
              style={{ flex: 1 }}
              required
            ></textarea>
          </div>

          <div className="form-cta">
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .contact-main__form {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          ${!fullWidth ? "max-width: 600px; margin: 0 auto;" : ""}
        }

        .contact-main__form h3 {
          margin-bottom: 1px;
          font-size: 28px;
          font-weight: 600;
        }

        .section__content-cta {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .group-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .group-input {
          margin-bottom: 20px;
        }

        .contact-main__form input,
        .contact-main__form textarea {
          padding: 15px;
          font-size: 16px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          border-radius: 8px;
          font-family: inherit;
        }

        .contact-main__form textarea {
          min-height: 150px;
          resize: vertical;
          flex: 1;
        }

        .form-cta {
          display: flex;
          margin-top: 20px;
        }

        @media (max-width: 991px) {
          .contact-main__form {
            padding: 30px;
          }
        }

        @media (max-width: 767px) {
          .contact-main__form {
            padding: 20px;
          }

          .contact-main__form h3 {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .group-wrapper {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .group-input {
            margin-bottom: 10px;
          }

          .contact-main__form input,
          .contact-main__form textarea {
            padding: 12px;
            font-size: 14px;
          }

          .contact-main__form textarea {
            min-height: 100px;
          }

          .form-cta {
            margin-top: 15px;
          }

          .btn--primary {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;