import "../src/styles/globals.css";
import "../src/styles/theme.css";
import clsx from "clsx";
import { useTheme, ThemeProvider } from "../src/context/ThemeProvider";

const AppWithTheme = ({ children }) => {
  const { isDark } = useTheme();
  // console.log(isDark, "log de isDark");
  //true si mode Dark actif ou false si light actif;
  return (
    <div
      id="app"
      className={clsx({
        dark: isDark,
      })}
    >
      {children}
    </div>
  );
};

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <AppWithTheme>
      <div className="m-auto h-full max-w-7xl px-4">
        <div id="progress"></div>
        <Component {...pageProps} />
      </div>
    </AppWithTheme>
  </ThemeProvider>
);

export default MyApp;
