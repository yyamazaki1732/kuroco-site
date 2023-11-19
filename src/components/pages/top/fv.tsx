import { Img } from "@/components/elements/img";

export const TopFv = () => {
  const layoutStyle = {
    height: "calc(64vh + 80px)",
    gridTemplateColumns: "45% 55%",
  };
  const fvImgInfo = {
    pc: {
      src: "/pages/top/fv/img-top-fv-pc.webp",
      alt: "",
      width: 1180,
      height: 870,
      priority: true,
      dual: {
        srcSet: "/pages/top/fv/img-top-fv-sp.webp",
        media: "",
        size: "800",
      },
    },
  };
  return (
    <section>
      <div className="grid " style={layoutStyle}>
        <div className="bg-primary-600"></div>
        <div className="bg-primary-300">
          <Img {...fvImgInfo.pc} />
        </div>
      </div>
    </section>
  );
};
