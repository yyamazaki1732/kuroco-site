import IconInc from "public/icons/icon-inc.svg";
import IconHum from "public/icons/icon-hum.svg";
import IconGen from "public/icons/icon-gen.svg";
import IconArch from "public/icons/icon-arch.svg";
import IconLegal from "public/icons/icon-legal.svg";
import IconMgmt from "public/icons/icon-mgmt.svg";
import IconArrow from "public/icons/icon-arrow.svg";

export type ServiceCardProps = {
  type: "inc" | "gen" | "arch" | "legal" | "mgmt" | "hum";
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ type }) => {
  const chooseIcon = () => {
    switch (type) {
      case "inc":
        return <IconInc className="w-full h-[auto]" title="IconInc" />;
        break;
      case "gen":
        return <IconGen className="w-full h-[auto]" title="IconGen" />;
        break;
      case "arch":
        return <IconArch className="w-full h-[auto]" title="IconArch" />;
        break;
      case "legal":
        return <IconLegal className="w-full h-[auto]" title="IconLegal" />;
        break;
      case "mgmt":
        return <IconMgmt className="w-full h-[auto]" title="IconMgmt" />;
        break;
      case "hum":
        return <IconHum className="w-full h-[auto]" title="IconHum" />;
        break;
    }
  };
  return (
    <div className="w-full flex flex-col gap-y-4 items-end">
      <div className="text-mary-600">
        <h4 className="text-heading14">サービス</h4>
        <h5 className="grid grid-cols-[max-content_1fr] bg-neutral-100 border border-primary-600 items-center gap-x-3 mt-2">
          <span className="w-14 h-[auto] aspect-1/1 p-2 bg-primary-600">
            {chooseIcon()}
          </span>
          法人設立
        </h5>
        <p className="mt-2 text-justify">
          諸教会における宗教法人格取得を中心としつつ、諸活動においての適切な法人格（一般社団法人、NPO法人、他）取得や法人格未取得団体の運営と事務管理についてのサポートをします。
        </p>
      </div>
      <IconArrow title="arrow" className="text-primary-600" />
    </div>
  );
};
