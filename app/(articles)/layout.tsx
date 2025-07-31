import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
