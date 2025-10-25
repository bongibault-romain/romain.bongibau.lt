import Image from "next/image";
import { getProjectPosts } from './mdx/utils';
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/naviguation";

export default async function Projects() {
  const t = await getTranslations('components.projects');
  const locale = await getLocale();
  const items = getProjectPosts(locale);

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        {t("title")}
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4 group">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative aspect-video rounded-xl shadow-lg overflow-hidden min-[580px]:odd:-rotate-2 min-[580px]:even:rotate-2 even:group-hover:rotate-0 odd:group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
          >
            <figure className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-t before:to-75% before:from-gray-950/70 before:to-gray-950/30">
              <Image
                className="h-full w-full object-cover"
                src={item.metadata.image?.path || '/images/projects/default-thumbnail.jpg'}
                width={600}
                height={338}
                alt={item.metadata.title}
              />
            </figure>
            <div className="relative flex flex-col justify-end h-full w-full px-6 py-5">
              <h3 className="text-sm font-medium text-white">
                <Link className="before:absolute before:inset-0" href={`/projects/${item.slug}`}>
                  {item.metadata.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
