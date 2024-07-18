import React, { useState } from "react";
import emailjs from "emailjs-com";
import backround_image from "../../Assets/contcact.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_3q8h3bo",
        "template_wdhokxa",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "18YRLdFMoR1VTOK6Q"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message envoyé ! Nous vous recontacterons bientôt.");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error(
            "OOPS! Erreur lors de l'envoi du message. Veuillez réessayer plus tard."
          );
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      className="contact min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backround_image})` }}
    >
      <div className="contact-container bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Contactez-nous
        </h1>
        <form onSubmit={handleSubmit} className="contact-form space-y-4">
          <div>
            <label htmlFor="name" className="block text-blue-800 font-semibold">
              Nom :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-blue-800 bg-white bg-opacity-60"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-blue-800 font-semibold"
            >
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-blue-800 bg-white bg-opacity-60"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-blue-800 font-semibold"
            >
              Objet :
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-blue-800 bg-white bg-opacity-60"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-blue-800 font-semibold"
            >
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-blue-800 bg-white bg-opacity-60"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-800 text-white font-semibold rounded hover:bg-blue-900 relative"
            disabled={isLoading}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-blue-900 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V2.83a1 1 0 011.7-.71l5 5a1 1 0 010 1.41l-5 5A1 1 0 0112 14V12H4zm16 0a8 8 0 01-8 8V21.17a1 1 0 01-1.7.71l-5-5a1 1 0 010-1.41l5-5a1 1 0 011.41 0V10a1 1 0 011-1h8z"
                  ></path>
                </svg>
              </div>
            )}
            Envoyer
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
