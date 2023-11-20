import * as card from "@/components/elements/card";
import * as heading from "@/components/elements/heading";

export const Service = () => {
  const layoutStyle = {
    gridTemplateColumns: "max-content 60%",
  };

  const AccentHeadingInfo: heading.AccentHeadingProps = {
    tag: "div",
    text: "SERVICE",
  };
  const PrimaryHeadingInfo: heading.PrimaryHeadingProps = {
    tag: "h2",
    text: "6つの宣教領域",
  };
  const description =
    "教会や宣教団体が事務管理・財務・税務・法務における課題に直面したとき、どこに（誰に）相談したら良いか分からないという声をよく聞きます。そこで、MA-netでは安定した宣教論・教会論に基づいた各分野の専門家をご紹介し問題解決を図りつつ団体を建て上げていきます。";
  type ServiceType = card.ServiceCardProps["type"];

  const serviceTypes: ServiceType[] = [
    "inc",
    "gen",
    "arch",
    "legal",
    "mgmt",
    "hum",
  ];

  return (
    <section className="bg-left-margin">
      <a href="#!">
        <div
          className="grid justify-between max-w-normal mx-auto py-16"
          style={layoutStyle}
        >
          <div className="flex flex-col gap-y-3">
            <heading.AccentHeading {...AccentHeadingInfo} />
            <heading.PrimaryHeading {...PrimaryHeadingInfo} />
          </div>
          <p className="text-body14 text-neutral-800">{description}</p>
        </div>
        <div className="max-w-normal mx-auto relative w-full min-h-[30rem] grid grid-cols-3 gris-rows-2 gap-2 justify-center py-16">
          {serviceTypes.map((type) => (
            <card.ServiceCard key={type} type={type} />
          ))}
        </div>
      </a>
    </section>
  );
};
