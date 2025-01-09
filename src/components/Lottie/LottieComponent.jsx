import dynamic from "next/dynamic";
import PropTypes from "prop-types";

// Charger Lottie uniquement côté client (désactiver le SSR)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieComponent = ({ animationData, width, height, loop }) => {
  if (!animationData) {
    console.error("Aucune animation Lottie n'a été fournie.");
    return null;
  }

  return (
    <div style={{ width, height }}>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
};

// Définir les types des props pour sécuriser l'utilisation
LottieComponent.propTypes = {
  animationData: PropTypes.object.isRequired, // Fichier JSON de l'animation
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Largeur
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Hauteur
  loop: PropTypes.bool, // Si l'animation doit boucler ou non
};

// Valeurs par défaut pour les props
LottieComponent.defaultProps = {
  width: 200,
  height: 200,
  loop: true,
};

export default LottieComponent;
