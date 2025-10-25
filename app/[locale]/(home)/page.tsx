import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certficates";
import { Metadata } from "next";
import Skills from "@/components/Skills";
import { use } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  console.log("Generating metadata for locale:", locale);
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

export default function Home({ params }: Props) {
  const {locale} = use(params);
 
  // Enable static rendering
  setRequestLocale(locale);
 
  // Once the request locale is set, you
  // can call hooks from `next-intl`
  const t = useTranslations('components.skills');
  
  return (
    <>
      <Experience />
      {/* <Recommendations /> */}
      <Projects />
      <Education />
      <Certificates />
      <Skills />
    </>
  );
}
