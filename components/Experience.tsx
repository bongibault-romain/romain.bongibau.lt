import { useTranslations } from "next-intl";
import Image from "next/image";

const LexLau = () => (
  <Image
    src="/images/lexlau.png"
    className="rounded-full"
    alt="LexLau"
    width={24}
    height={24}
  />
);

const Gerresheimer = () => (
  <Image
    src="/images/gerresheimer.jpg"
    className="rounded-full"
    alt="Gerresheimer"
    width={24}
    height={24}
  />
);

const Maloc = () => (
  <Image
    src="/images/maloc.png"
    className="rounded-full"
    alt="Maloc"
    width={24}
    height={24}
  />
);

export default function Experience() {
  const t = useTranslations("components.experience");

  const items = [
    {
      title: t("lexlau.title"),
      link: "https://lexlau.com",
      icon: <LexLau />,
      date: t("lexlau.date"),
      location: t("lexlau.location"),
      description: t("lexlau.description"),
    },
    {
      title: t("gerresheimer.title"),
      link: "https://www.gerresheimer.com/en/company/locations/momignies-belgium",
      icon: <Gerresheimer />,
      date: t("gerresheimer.date"),
      location: t("gerresheimer.location"),
      description: t("gerresheimer.description"),
    },
    {
      title: t("maloc.title"),
      icon: <Maloc />,
      date: t("maloc.date"),
      location: t("maloc.location"),
      description: t("maloc.description"),
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
                    {item.link ? (
                      <a
                        className="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                        href={item.link}
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
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
