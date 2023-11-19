import { Header, Footer } from "@/components/layouts/index";

export const Layouts = ({ customClass, children }) => {
  return (
    <div className={`${customClass}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
