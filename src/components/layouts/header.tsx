import { useState } from "react";
import Link from "next/link";
import { PrimaryButton, AccentButton } from "@/components/elements/button";
import { LogoType } from "@/components/elements/logo";

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleIshovered = (e) => {
    console.log("e.currentTarget", e.currentTarget);
    console.log("e.target", e.target);
    e.currentTarget === e.target;
    setIsHovered((prevState) => !prevState);
  };

  const PrimaryLinks = [
    {
      ja: "私たちについて",
      en: "About",
      path: "about",
      subLinks: [
        {
          ja: "ビジョン",
          en: "Vision",
          path: "/",
        },
        {
          ja: "事務所概要",
          en: "Profile",
          path: "/",
        },
        {
          ja: "協力者",
          en: "Member",
          path: "/",
        },
      ],
    },
    {
      ja: "サービス",
      en: "Service",
      path: "service",
      subLinks: [
        {
          ja: "法人設立",
          en: "Incorporation",
          path: "/",
        },
        {
          ja: "人事",
          en: "Human affairs",
          path: "/",
        },
        {
          ja: "会計/総務",
          en: "General affairs",
          path: "/",
        },
        {
          ja: "運営",
          en: "Management",
          path: "/",
        },
        {
          ja: "会堂建築",
          en: "Architecture",
          path: "/",
        },
        {
          ja: "法務",
          en: "Legal affairs",
          path: "/",
        },
      ],
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
  ];
  const AccentLinks = {
    ja: "お問合せ\n無料相談",
    en: null,
    path: "contact",
  };

  return (
    <header className="flex justify-between items-center p-1.5 bg-neutral-100 min-h-20">
      <h1>
        <Link href={"/"} className="w-max py-3.5">
          <LogoType className={"w-[auto] h-5"} />
        </Link>
      </h1>
      <nav>
        <ul className="flex gap-x-3.5">
          {PrimaryLinks.map((link, index) => {
            return (
              <li key={index} className="relative">
                <PrimaryButton
                  ja={link.ja}
                  en={link.en}
                  path={link.path}
                  onPrimaryButtonEnter={(e) => handleIshovered(e)}
                  onPrimaryButtonLeave={(e) => handleIshovered(e)}
                />
                {isHovered && link.subLinks ? (
                  <div className="absolute top-full left-1/2 p-4 bg-neutral-100 border border-primary-400 -translate-x-1/2">
                    <ul
                      className={`grid gap-x-2 gap-y-4 ${
                        link.subLinks.length === 6
                          ? "grid-cols-[repeat(2,max-content)]"
                          : link.subLinks.length === 3
                          ? "grid-cols-[repeat(2,max-content)]"
                          : ""
                      }`}
                    >
                      {link.subLinks.map((subLink, index) => (
                        <li key={index}>
                          <PrimaryButton
                            ja={subLink.ja}
                            en={subLink.en}
                            path={subLink.path}
                            onPrimaryButtonEnter={(e) => handleIshovered(e)}
                            onPrimaryButtonLeave={(e) => handleIshovered(e)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>
            );
          })}
          <li>
            <AccentButton
              ja={AccentLinks.ja}
              en={AccentLinks.en}
              path={AccentLinks.path}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
