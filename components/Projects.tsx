import fs from 'fs/promises'

import Image from "next/image";
import Link from 'next/link';
import { getProjectPosts } from './mdx/utils';

export default async function Projects() {

  console.log("Rendering Projects component");

  const files = await fs.readdir("content/projects");
  const items = getProjectPosts();

  console.log("Projects items:", items);

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Projets
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4 group">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative aspect-video rounded-xl shadow-lg overflow-hidden min-[580px]:odd:-rotate-2 min-[580px]:even:rotate-2 even:group-hover:rotate-0 odd:group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
          >
            <figure className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-t before:to-75% before:from-gray-950/50 before:to-transparent">
              <Image
                className="h-full w-full object-cover"
                src={item.image}
                width={600}
                height={338}
                alt={item.title}
              />
            </figure>
            <div className="relative flex flex-col justify-end h-full w-full px-6 py-5">
              <h3 className="text-sm font-medium text-white">
                <Link className="before:absolute before:inset-0" href={item.link}>
                  {item.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
