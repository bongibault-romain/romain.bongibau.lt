import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="grow py-12 space-y-12">
        <article className="prose max-w-none 
        text-gray-600 dark:text-gray-400 text-justify
        prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-800 prose-headings:dark:text-gray-100 
        prose-a:hover:underline prose-a:decoration-2 prose-a:decoration-gray-300 prose-a:dark:decoration-gray-600 underline-offset-2 prose-a:text-gray-600 prose-a:dark:text-gray-400
        prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:dark:border-gray-700 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:dark:text-gray-400 
        prose-strong:font-medium prose-strong:text-gray-700 prose-strong:dark:text-gray-300
        prose-code:rounded prose-code:bg-transparent prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-400 prose-code:before:content-[''] prose-code:after:content-[''] 
        prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-800">
          {children}
        </article>
      </main>

      <Footer />
    </>
  );
}
