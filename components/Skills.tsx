export default function Skills() {
    // html, css, js, typescript, react, nextjs, nodejs, mysql, postgresql, git, linux,
    // python, java, php, rest api
  const items = [
    {
        title: 'HTML - CSS',
        description: `Maîtrise des technologies fondamentales du web, permettant de créer des sites et applications interactives et responsives.`,
        rating: 4,
        image: '/images/skills/html.png',
    },
    {
        title: 'JavaScript',
        description: `Utilisation de JavaScript pour le développement web, avec une attention particulière à la performance et à l'expérience utilisateur.`,
        rating: 4,
        image: '/images/skills/javascript.png',
    },
    {
        title: 'TypeScript',
        description: `La majorité de mes projets sont développés en TypeScript, ce qui me permet d'écrire du code plus robuste et maintenable.`,
        rating: 4,
        image: '/images/skills/typescript.png',
    },
    {
        title: 'Next.js',
        description: `Utilisation de React et Next.js pour développer des applications web modernes, performantes et optimisées (comme ce portfolio).`,
        rating: 4,
        image: '/images/skills/nextjs.png',
    },
    {
        title: 'React',
        description: `Utilisation de React pour développer des interfaces utilisateur modernes et réactives.`,
        rating: 4,
        image: '/images/skills/react.png',
    },
    {
        title: 'Vue.js',
        description: `Utilisation de Vue.js pour la création d'un CRM/CMS collaboratif, avec une attention particulière à la performance et à l'expérience utilisateur.`,
        rating: 3,
        image: '/images/skills/vuejs.png',
    },
    {
        title: 'Node.js',
        description: `Développement d'applications backend avec Node.js, en utilisant des frameworks comme Adonis.JS pour créer des API RESTful.`,
        rating: 4,
        image: '/images/skills/nodejs.png',
    },
    {
        title: 'Bases de données',
        description: `Connaissance des bases de données relationnelles (MySQL, PostgreSQL) pour la gestion des données.`,
        rating: 4,
        image: '/images/skills/sql.png',
    },
    {
        title: 'Git',
        description: `Utilisation de Git pour le contrôle de version, facilitant la collaboration et la gestion des projets.`,
        rating: 4,
        image: '/images/skills/git.png',
    },
    {
        title: 'Linux',
        description: `Connaissance des systèmes Linux pour le développement et le déploiement d'applications.`,
        rating: 4,
        image: '/images/skills/linux.png',
    },
    {
        title: 'Python',
        description: `Utilisation de Python pour des scripts, l'automatisation et le développement d'applications.`,
        rating: 3,
        image: '/images/skills/python.png',
    },
    {
        title: 'Java',
        description: `Connaissances avancées en Java, développement d'applications orientées objet et de plugins Minecraft avec SpigotAPI.`,
        rating: 3,
        image: '/images/skills/java.png',
    },
    {
        title: 'API REST',
        description: `Création et consommation d'API REST pour l'intégration entre différentes applications.`,
        rating: 4,
        image: '/images/skills/api.png',
    },
    {
        title: 'PHP',
        description: `Expérience en développement web avec PHP, notamment pour des projets de gestion de contenu et d'applications web.`,
        rating: 3,
        image: '/images/skills/php.png',
    },
    {
        title: 'C',
        description: `Connaissances de base en C, principalement pour des projets académiques et des exercices de programmation.`,
        rating: 2,
        image: '/images/skills/c.png',
    }
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Compétences
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
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-xs text-gray-600 dark:text-gray-300 text-left leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
