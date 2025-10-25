import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certficates";
import { Metadata } from "next";
import Skills from "@/components/Skills";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
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
