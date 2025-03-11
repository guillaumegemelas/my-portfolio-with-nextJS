import React, { useState } from "react";
import { Button } from "./atom/Button";
import { Alert } from "./Alert";
import ReCAPTCHA from "react-google-recaptcha";

import ConfettiExplosion from "react-confetti-explosion";

export const Contact = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [captcha, setCaptcha] = useState();
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

    if (!captcha) {
      console.log("reCAPTCHA not verified.");
      alert("Merci de cliquer sur le Recaptcha");
      return;
    }

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

    const url =
      "https://site--mail-portfolio-1--zqfvjrr4byql.code.run/send-email";

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
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setShowAlert(false);
        }, 3000);

        setIsExploding(true);
        setTimeout(() => {
          setIsExploding(false);
        }, 2500);
      } else {
        alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête fetch:", error);
      alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  };

  return (
    <div className="w-full pb-12 pt-12">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 md:px-8"
      >
        {/* Vos champs de formulaire ici--- */}

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

        <div className="pb-20px mb-4 mt-4 flex justify-center">
          <ReCAPTCHA
            className="g-recaptcha"
            size="normal"
            theme="dark"
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
            onChange={setCaptcha}
          />
        </div>

        {!showAlert && <Button type="submit">Envoyer</Button>}
        {showAlert && <Alert />}
        {isExploding && (
          <div className="flex w-full justify-center">
            <ConfettiExplosion
              force={0.6}
              // duration={2500}
              particleCount={80}
              width={1000}
            />
          </div>
        )}
      </form>

      {/* {!showConfetti && <Confetti width={width} height={height} />} */}
      {/* <div className="absolute inset-0 flex items-start justify-center"> */}
      {/* {isExploding && (
          <ConfettiExplosion
            force={0.6}
            // duration={2500}
            particleCount={80}
            width={1000}
          />
        )} */}
      {/* </div> */}
    </div>
  );
};
