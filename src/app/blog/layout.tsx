import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="px-6 pt-20 pb-16">{children}</main>
      <Footer />
    </>
  );
}
