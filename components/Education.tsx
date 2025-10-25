import { useTranslations } from "next-intl";
import Image from "next/image";


const INSA = () => (
  <Image src="/images/insa.jpg" className="rounded-full" alt="INSA Toulouse" width={24} height={24} />
)

const Faidherbe = () => (
  <Image src="/images/faidherbe.jpg" className="rounded-full" alt="INSA Toulouse" width={24} height={24} />
)

const ISP = () => (
  <Image src="/images/isp.png" className="rounded-full" alt="INSA Toulouse" width={24} height={24} />
)

export default function Education() {
  const t = useTranslations("components.education");

  const items = [
    {
      title: t("insa.title"),
      link: "https://www.insa-toulouse.fr/formation/ingenieur-specialite-informatique-et-reseaux/",
      icon: <INSA />,
      date: t("insa.date"),
      location: t("insa.location"),
      description: t("insa.description"),
    },
    {
      title: t("faidherbe.title"),
      link: "https://www.faidherbe.org/",
      icon: <Faidherbe />,
      date: t("faidherbe.date"),
      location: t("faidherbe.location"),
      description: t("faidherbe.description"),
    },
    {
      title: t("isp.title"),
      link: "https://www.ispfourmies.com/",
      icon: <ISP />,
      date: t("isp.date"),
      location: t("isp.location"),
      description: t("isp.description"),
    },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        {t("title")}
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <article
            key={index}
            className="p-5 rounded-xl odd:bg-linear-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-linear-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]"
          >
            <div className="sm:flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs max-sm:mb-3 sm:mt-5">
                {item.icon}
              </div>
              <div>
                <div className="space-y-1.5 mb-3">
                  <div className="text-[13px] italic text-gray-500/70">
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    <a
                      className="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                      target="_blank"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </h3>
                  <div className="text-[13px] font-medium text-gray-600dark:text-gray-400">
                    {item.location}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
