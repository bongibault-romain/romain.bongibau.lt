import Image from "next/image";

const Udemy = () => (
  <Image src="/images/udemy.png" alt="Udemy" width={24} height={24} />
)

const TOEIC = () => (
  <Image src="/images/toeic.png" alt="Udemy" width={24} height={24} />
)

export default function Certificates() {
  const items = [
    {
      title: "Formation de Développeur Web",
      link: "https://www.udemy.com/certificate/UC-0DUYDEHI/",
      icon: <Udemy />,
      description: 
      " Formation complète au développement web (HTML, CSS, JavaScript, PHP, MySQL, WordPress…) avec réalisation de projets concrets : site vitrine, blog, jeu, e-commerce, etc."
    },
    {
      title: "Formation Développeur Java",
      link: "https://www.udemy.com/certificate/UC-d5545f09-c9e6-4682-9ec3-cbd8861be0ea/",
      icon: <Udemy />,
      description:
      "Formation complète au développement Java (Java 8 à 17) incluant 45 ateliers pratiques, apprentissage progressif des fondamentaux orienté projet, avec introduction à Java EE, Maven et Spring Boot."
    },
    {
      title: "Certification TOEIC® - 885 / 990",
      link: "https://www.etsglobal.org/fr/en/digital-score-report/7ED332706994A01B08CF92F743173D057AAEF9E1DD1DEFE929C195A1A74D1F15Y2Ric3FWNU9UbytCWlo2VW1sQzZjZlJKelBFdzk2V092YjBUdFNoWXpQcjdCVHM5",
      icon: <TOEIC />,
      description: "Test Listening & Reading (INSA Toulouse, 2025) - Listening : 470 / Reading : 415 - Niveau avancé, score valide jusqu'en mai 2027."
    }
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Certifications
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative p-5 rounded-xl odd:bg-linear-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-linear-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group"
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
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
