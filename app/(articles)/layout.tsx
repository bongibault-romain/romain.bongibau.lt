import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Rendering ProjectLayout");

  return (
    <>
      <Header />

      <main className="grow py-12 space-y-12">
        <article className="prose dark:prose-invert relative">
          {children}
        </article>
      </main>

      <Footer />
    </>
  );
}
