import Footer from "@/components/Footer";

export const metadata = {
  title: "Geraldin | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
