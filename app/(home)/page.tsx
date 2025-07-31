import Tutorials from "@/components/Tutorials";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import SideHustles from "@/components/SideHustles";
import Recommendations from "@/components/Recommendations";
import Newsletter from "@/components/Newsletter";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certficates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bongibault Romain - Portfolio",
  description: "Portfolio de Romain Bongibault, étudiant en informatique à l'INSA Toulouse. Découvrez mes projets, articles et expériences.",
  keywords: ["portfolio", "informatique", "étudiant", "INSA Toulouse",
    "projets", "articles", "expériences", "recommandations", "certificats", "éducation"],
  openGraph: {
    title: "Bongibault Romain - Portfolio",
    description: "Portfolio de Romain Bongibault, étudiant en informatique à l'INSA Toulouse. Découvrez mes projets, articles et expériences.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
  },
  authors: [
    {
      name: "Romain Bongibault",
      url: "https://romain.bongibau.lt",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: true,
  }
};

export default async function Home() {
  return (
    <>
      <Experience />
      {/* <Recommendations /> */}
      <Projects />
      <Education />
      <Certificates />
      {/* <Articles /> */}
    </>
  );
}
