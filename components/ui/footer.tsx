import MdiEmail from "../icons/MdiEmail";
import MdiGithub from "../icons/MdiGithub";
import MdiRss from "../icons/MdiRss";

export default function Footer() {
  return (
    <footer className="space-y-12 text-center pb-16">
      <div className="space-y-6">
        {/* Social icons */}
        <ul className="inline-flex gap-4">
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="mailto:romain@bongibau.lt"
              aria-label="GitHub"
            >
              <MdiEmail className="fill-current" width={20} height={20} />
            </a>
          </li>
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="https://github.com/bongibault-romain"
              target="_blank"
              aria-label="GitHub"
            >
              <MdiGithub className="fill-current" width={20} height={20} />
            </a>
          </li>
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="/projects.xml"
              target="_blank"
              aria-label="RSS Feed"
            >
              <MdiRss className="fill-current" width={20} height={20} />
            </a>
          </li>
        </ul>
        {/* Copyright notes */}
        <p className="text-sm text-gray-400 dark:text-gray-600">
          &copy; Bongibault Romain, {new Date().getFullYear()}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
