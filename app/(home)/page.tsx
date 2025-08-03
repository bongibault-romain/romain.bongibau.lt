import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certficates";
import { Metadata } from "next";
import Skills from "@/components/Skills";

export async function generateMetadata(): Promise<Metadata> {  
  return {
    title: "Bongibault Romain - Portfolio",
    description:
      "Portfolio de Romain Bongibault, étudiant en informatique à l'INSA Toulouse. Découvrez mes projets, articles et expériences.",
    keywords: [
      "portfolio",
      "informatique",
      "étudiant",
      "INSA Toulouse",
      "projets",
      "articles",
      "expériences",
      "recommandations",
      "certificats",
      "éducation",
    ],
    openGraph: {
      title: "Bongibault Romain - Portfolio",
      description:
        "Portfolio de Romain Bongibault, étudiant en informatique à l'INSA Toulouse. Découvrez mes projets, articles et expériences.",
      url: `/`,
    },
  };
}

export default async function Home() {
  return (
    <>
      <Experience />
      {/* <Recommendations /> */}
      <Projects />
      <Education />
      <Certificates />
      <Skills />
      {/* <Articles /> */}
    </>
  );
}
