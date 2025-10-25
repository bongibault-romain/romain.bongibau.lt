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
        <article>
          {children}
        </article>
      </main>

      <Footer />
    </>
  );
}
