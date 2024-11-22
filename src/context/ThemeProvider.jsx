import { useState, createContext, useContext, useEffect } from "react";

//Création du contexte: utilisé pour stocker le thème actuel de l'appli.
const ThemeContext = createContext({ theme: "dark" });
//on met une valeur par défaut, pas obligatoire mais possible.

//on créé une variable pour gérer le thème du localstorage: constante définie pour représenter la clé utilisée pour stocker le thème dans le stockage local (localStorage) du navigateur.
const LOCALE_STORAGE_THEME_KEY = "colorScheme";

// Dark mode exercise
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const isDark = theme === "dark";
  const isLight = theme === "light";

  //pour vérifier si le thème a été enregistré dans le localStorage au chargement, si c'est le cas, il le charge
  useEffect(() => {
    const savedColorsScheme = localStorage.getItem(LOCALE_STORAGE_THEME_KEY);

    if (savedColorsScheme) {
      setTheme(savedColorsScheme);
      return;
    }
    //si non, il utilise une requête média (window.matchMedia) pour détecter le thème du système d'exploitation (par exemple, le mode sombre du système d'exploitation) et le configure comme thème (dans les settings du mac)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    //on créé une fonction:si il n'y a pas de localStorage on utilise la mediaQuery et on ajoute un event listener pour écouter les changement.
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };

    //on écoute les changements pour appeler notre handleChange
    mediaQuery.addEventListener("change", handleChange);

    //on appelle notre fonction
    handleChange();
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  //permet de basculer entre les thèmes sombre et clair et met à jour le thème dans le localStorage.
  const toggleTheme = () =>
    setTheme((curr) => {
      const newTheme = curr === "dark" ? "light" : "dark";
      localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme);
      return newTheme;
    });

  // console.log("render ThemeProvider");

  const values = { theme, isDark, isLight, toggleTheme };

  return (
    //composant <ThemeContext.Provider> qui encapsule ses children. Cela rend les valeurs de thème, isDark, isLight, et toggleTheme disponibles pour tous les composants descendants qui utilisent useTheme.
    <ThemeContext.Provider value={values}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

//Cette fonction utilise useContext pour accéder au contexte ThemeContext. Elle est destinée à être utilisée dans d'autres composants pour accéder aux valeurs de thème et de bascule.
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
