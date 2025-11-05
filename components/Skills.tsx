import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("components.skills");
  
  const items = [
    {
      title: "HTML - CSS",
      description: t("html-css"),
      rating: 4,
      image: "/images/skills/html.png",
    },
    {
      title: "JavaScript",
      description: t("javascript"),
      rating: 4,
      image: "/images/skills/javascript.png",
    },
    {
      title: "TypeScript",
      description: t("typescript"),
      rating: 4,
      image: "/images/skills/typescript.png",
    },
    {
      title: "Next.js",
      description: t("next-js"),
      rating: 4,
      image: "/images/skills/nextjs.png",
    },
    {
      title: "React",
      description: t("react"),
      rating: 4,
      image: "/images/skills/react.png",
    },
    {
      title: "Vue.js",
      description: t("vue-js"),
      rating: 3,
      image: "/images/skills/vuejs.png",
    },
    {
      title: "Node.js",
      description: t("node-js"),
      rating: 4,
      image: "/images/skills/nodejs.png",
    },
    {
      title: "SQL",
      description: t("sql"),
      rating: 4,
      image: "/images/skills/sql.png",
    },
    {
      title: "Git",
      description: t("git"),
      rating: 4,
      image: "/images/skills/git.png",
    },
    {
      title: "Linux",
      description: t("linux"),
      rating: 4,
      image: "/images/skills/linux.png",
    },
    {
      title: "Python",
      description: t("python"),
      rating: 3,
      image: "/images/skills/python.png",
    },
    {
      title: "Java",
      description: t("java"),
      rating: 3,
      image: "/images/skills/java.png",
    },
    {
      title: "API REST",
      description: t("api-rest"),
      rating: 4,
      image: "/images/skills/api.png",
    },
    {
      title: "PHP",
      description: t("php"),
      rating: 3,
      image: "/images/skills/php.png",
    },
    {
      title: "C",
      description: t("c"),
      rating: 2,
      image: "/images/skills/c.png",
    },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((skill, index) => (
          <div
            key={index}
            className="group relative odd:bg-linear-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-linear-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {/* Skill Image */}
            <div className="mb-4 flex justify-center">
              <img
                src={skill.image}
                alt={skill.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Skill Title */}
            <h3 className="font-inter-tight text-base font-semibold text-gray-800 dark:text-gray-100 text-center">
              {skill.title}
            </h3>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-xs text-gray-600 dark:text-gray-300 ltr:text-left rtl:text-right leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
