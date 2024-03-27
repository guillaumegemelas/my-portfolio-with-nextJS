import React, { useState, useRef } from "react";
import { Button } from "./atom/Button";
import { Alert } from "./Alert";
//-----------------
import ReCAPTCHA from "react-google-recaptcha";
//-----------------

export const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  //-----------------
  // State to store the Google reCAPTCHA token
  const [captchaToken, setCaptchaToken] = useState("");

  // Ref for the Google reCAPTCHA component
  const recaptchaRef = useRef(null);

  // Function to handle changes in the reCAPTCHA token
  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
  //-----------------

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nom: event.target.elements.nom.value,
      prenom: event.target.elements.prenom.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
    };

    if (
      !formData.nom ||
      !formData.prenom ||
      !formData.email ||
      !formData.message
    ) {
      console.error(
        "Certains éléments requis du formulaire n'ont pas été trouvés"
      );
      return;
    }
    //-----------------
    // Vérifiez si le token ReCAPTCHA est présent
    if (!captchaToken) {
      console.error(
        "Veuillez vérifier que vous êtes un humain en cochant la case reCAPTCHA."
      );
      return;
    }
    //-----------------

    const url =
      "https://site--mailing-back--zqfvjrr4byql.code.run/process-form";
    // "http://localhost:3000/process-form";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowAlert(true);

        // Réinitialiser les champs du formulaire
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête fetch:", error);
      alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  };

  return (
    <div className="w-full pt-12 pb-12">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 md:px-8"
      >
        <label
          className="block text-xs font-medium text-skin-secondary md:text-sm"
          htmlFor="nom"
        >
          Votre nom
        </label>
        <input
          className="w-full rounded border-2 border-primary border-opacity-50 bg-transparent p-3 text-sm focus:border-opacity-100"
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Votre nom"
          required
        />
        <label
          className="block text-xs font-medium text-skin-secondary md:text-sm"
          htmlFor="prenom"
        >
          Votre prénom
        </label>
        <input
          className="w-full rounded border-2 border-primary border-opacity-50 bg-transparent p-3 text-sm focus:border-opacity-100"
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          placeholder="Votre prénom"
          required
        />
        <label
          className="block text-xs font-medium text-skin-secondary md:text-sm"
          htmlFor="email"
        >
          Votre email
        </label>
        <input
          className="w-full rounded border-2 border-primary border-opacity-50 bg-transparent p-3 text-sm focus:border-opacity-100"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
        />
        <label
          className="block text-xs font-medium text-skin-secondary md:text-sm"
          htmlFor="message"
        >
          Votre message
        </label>
        <textarea
          className="w-full rounded border-2 border-primary border-opacity-50 bg-transparent p-3 text-sm focus:border-opacity-100"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
        ></textarea>
        {/* Google reCAPTCHA */}
        <div className="pb-20px">
          <ReCAPTCHA
            className="g-recaptcha"
            size="normal"
            sitekey={process.env.CAPTCHA_KEY}
            ref={recaptchaRef}
            onChange={onCaptchaChange}
          />
        </div>
        {/* Google reCAPTCHA */}
        {!showAlert && <Button type="submit">Envoyer</Button>}
        {showAlert && <Alert />}
      </form>
    </div>
  );
};
