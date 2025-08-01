import Footer from "@/components/ui/footer";
import HomeHeader from "@/components/ui/home-header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader />

      <main className="grow py-12 space-y-12">{children}</main>

      <Footer />
    </>
  );
}
