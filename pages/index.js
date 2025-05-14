import dynamic from "next/dynamic";
import Head from "next/head";
import { CommentSection } from "../src/components/comment";
// import { DrawSection } from "../src/components/draw";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/hero";
import { ProjectSection } from "../src/components/project";
import { Curriculum } from "../src/components/curriculum/Curriculum";
import { Skills } from "../src/components/skills/Skills";

//-------------------
// import Script from "next/script";
//--------------------

// dynamic import Memory Section.
const DynamicMemorySection = dynamic(() => import("../src/components/memory"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Guillaume Gemelas, Développeur web et mobile</title>
        <meta
          name="description"
          content="Guillaume Gemelas, développeur web et mobile freelance, dans l'Ain. J'accompagne les entreprises et particuliers avec aindev dans la création de leur site web sur-mesure"
          key="desc"
        />
        {/* ajout de balise meta keywords: tout va bien avant ajout de cette balise */}
        <meta
          name="keywords"
          content="développeur web ain, création de site web ain, freelance web ain, aindev, ain.dev, web Bourg-en-Bresse"
          key="keywords"
        />
        {/* ajout de la balise schema.org. à vérifier SEO google si action ou pas: fait le 08/03/24! */}

        {/* <Script
          src="https://www.google.com/recaptcha/enterprise.js"
          async
          defer
        /> */}

        {/* Google tag (gtag.js) */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QQETYWE3PV"
        ></script> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QQETYWE3PV');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebPage",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://guillaume-gemelas-dev.com/",
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@id": "https://guillaume-gemelas-dev.com/#Skills",
                      name: "Compétences",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@id": "https://guillaume-gemelas-dev.com/#Achievements",
                      name: "Réalisations",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                      "@id": "https://guillaume-gemelas-dev.com/#Comments",
                      name: "Commentaires",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    item: {
                      "@id": "https://guillaume-gemelas-dev.com/#Contact",
                      name: "Contact",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <div className="flex flex-col gap-40">
        <Header />
        <HeroSection />
        <Skills />
        <ProjectSection />
        <Curriculum />
        <DynamicMemorySection />
        {/* <DrawSection /> */}
        <CommentSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
