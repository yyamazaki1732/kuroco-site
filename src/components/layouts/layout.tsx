import { Header, Footer } from "@/components/layouts/index";

export const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
