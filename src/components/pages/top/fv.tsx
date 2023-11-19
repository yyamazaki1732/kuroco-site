import { Img } from "@/components/elements/img";
import { LogoMark } from "@/components/elements/logo";

export const TopFv = () => {
  const layoutStyle = {
    height: "calc(64vh + 80px)",
    gridTemplateColumns: "45% 55%",
  };
  const fvImgInfo = {
    src: "/pages/top/fv/img-top-fv-pc.webp",
    alt: "",
    width: 1180,
    height: 870,
    className: "object-cover h-full",
    priority: true,
    dual: {
      srcSet: "/pages/top/fv/img-top-fv-sp.webp",
      media: "",
      size: 800,
    },
  };
  return (
    <section>
      <div className="grid " style={layoutStyle}>
        <div className="bg-primary-600"></div>
        <div className="relative">
          <Img {...fvImgInfo} />
          <LogoMark className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30 w-1/2 h-auto" />
        </div>
      </div>
    </section>
  );
};
