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

  console.log("Rendering Education component");

  const items = [
    {
      title: "Diplôme d'ingénieur en informatique et réseaux",
      link: "https://www.insa-toulouse.fr/formation/ingenieur-specialite-informatique-et-reseaux/",
      icon: <INSA />,
      date: "2023 - 2026",
      location: "Institut National des Sciences Appliquées, 31400 Toulouse, France",
      description:
      "Formation axée sur le développement logiciel, les réseaux, l'algorithmique et la cybersécurité. J'y ai renforcé mes compétences en programmation, en mathématiques appliquées et en gestion de projets techniques."
    },
    {
      title: "Classe Préparatoire Aux Grandes Ecoles",
      link: "https://www.faidherbe.org/",
      icon: <Faidherbe />,
      date: "2021 - 2023",
      location: "Lycée Faidherbe, 59034 Lille, France",
      description: 
      "Deux années intenses où j'ai consolidé mes bases scientifiques tout en développant une solide méthode de travail. Cette formation m'a permis de progresser en logique, en modélisation et en informatique."
    },
    {
      title: "Baccalauréat Général",
      link: "https://www.ispfourmies.com/",
      icon: <ISP />,
      date: "2018 - 2021",
      location: "Institution Saint Pierre, 59610 Fourmies, France",
      description:
      "Spécialités : Mathématiques, Physique-Chimie, SVT - Option Mathématiques expertes. Ce parcours a confirmé mon intérêt pour les sciences et préparé le terrain pour mes études d'ingénieur."
    },
  ];

  console.log("Education items:", items);

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Éducation
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
