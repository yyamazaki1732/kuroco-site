import Link from "next/link";
import { Img } from "@/components/elements/img";
import { LogoMark } from "@/components/elements/logo";

export const Fv = () => {
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
        <div className="grid place-content-center relative">
          <h2 className="text-heading40 font-700 leading-normal">
            知恵と経験に <br />
            基づく宣教
          </h2>
          <Link
            href={"/"}
            className="bg-primary-600 text-neutral-100 absolute bottom-0 left-[var(--bg-edge)] w-full py-6 px-8 media-hover:hover:bg-primary-500 "
          >
            <span className="flex items-center gap-x-2">
              <span className="font-display font-700">Blog</span>-{" "}
              <span className="text-body14">
                「教会実務を神学する」一泊研修会
              </span>
            </span>
          </Link>
        </div>
        <div className="relative">
          <Img {...fvImgInfo} />
          <LogoMark className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30 w-1/2 h-auto" />
          <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-700 text-neutral-100 flex flex-col gap-y-1 font-display">
            <span className="text-heading28">SERVING MINISTRY</span>
            <span className="">with</span>
            <span className="text-heading28">Administration</span>
            <span className="">and</span>
            <span className="text-heading28">Management</span>
          </p>
        </div>
      </div>
    </section>
  );
};
