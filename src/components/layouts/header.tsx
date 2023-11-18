import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/elements/button";
import { LogoType } from "@/components/elements/logo";

export const Header = () => {
  const headerLinks = [
    {
      ja: "私たちについて",
      en: "About",
      path: "about",
    },
    {
      ja: "サービス",
      en: "Service",
      path: "service",
    },
    {
      ja: "よくある質問",
      en: "Faq",
      path: "faq",
    },
    {
      ja: "代表ブログ",
      en: "Blog",
      path: "blog",
    },
    {
      ja: "お問合せ\n無料相談",
      en: null,
      path: "contact",
    },
  ];
  return (
    <header className="flex justify-between items-center p-1.5 bg-neutral-100 min-h-20">
      <h1>
        <Link href={"/"} className="w-max py-3.5">
          {/* <Image
            src="/icon-logo-type.svg"
            alt="Ma-net logo"
            className=""
            placeholder="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="100%"
            width={144}
            height={30}
            priority={true}
          /> */}
          <LogoType className={"w-[auto] h-5"} />
        </Link>
      </h1>
      <nav>
        <ul className="flex gap-x-3.5">
          {headerLinks.map((link, index, array) => {
            return (
              <li key={link.path}>
                <PrimaryButton
                  ja={link.ja}
                  en={link.en}
                  path={link.path}
                  type={index === array.length - 1 ? "filled" : "text"}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
