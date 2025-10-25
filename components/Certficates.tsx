import { useTranslations } from "next-intl";
import Image from "next/image";

const Udemy = () => (
  <Image src="/images/udemy.png" alt="Udemy" width={24} height={24} />
)

const TOEIC = () => (
  <Image src="/images/toeic.png" alt="Udemy" width={24} height={24} />
)

export default function Certificates() {
  const t = useTranslations("components.certificates");

  const items = [
    {
      title: t("web.title"),
      link: "https://www.udemy.com/certificate/UC-0DUYDEHI/",
      icon: <Udemy />,
      description: t("web.description")
    },
    {
      title: t("toeic.title"),
      link: "https://www.etsglobal.org/fr/en/digital-score-report/7ED332706994A01B08CF92F743173D057AAEF9E1DD1DEFE929C195A1A74D1F15Y2Ric3FWNU9UbytCWlo2VW1sQzZjZlJKelBFdzk2V092YjBUdFNoWXpQcjdCVHM5",
      icon: <TOEIC />,
      description: t("toeic.description")
    },
    {
      title: t("java.title"),
      link: "https://www.udemy.com/certificate/UC-d5545f09-c9e6-4682-9ec3-cbd8861be0ea/",
      icon: <Udemy />,
      description: t("java.description")
    },
    {
      title: t("vue.title"),
      link: "https://www.udemy.com/certificate/UC-0069174d-fa63-4355-b717-234d3f0b9a27/",
      icon: <Udemy />,
      description: t("vue.description")
    },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        {t("title")}
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative p-5 rounded-xl nth-[3n+1]:bg-linear-to-tr nth-[3n+1]:from-gray-100 nth-[3n+1]:to-gray-50 dark:nth-[3n+1]:bg-linear-to-tr dark:nth-[3n+1]:from-gray-800 dark:nth-[3n+1]:to-gray-800/[0.65] group"
          >
            <div
              className="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
              aria-hidden="true"
            >
              <svg
                className="fill-current opacity-80 dark:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
              >
                <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
              </svg>
            </div>
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs mb-4">
              {item.icon}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                <a className="before:absolute before:inset-0" target="_blank" href={item.link}>
                  {item.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
