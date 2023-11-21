import Link from "next/link";
type PrimaryButtonProps = {
  path: string;
  ja: string;
  en: string;
  className?: string;
  onPrimaryButtonEnter;
  onPrimaryButtonLeave;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  path,
  ja,
  en,
  className,
  onPrimaryButtonEnter,
  onPrimaryButtonLeave,
}) => {
  return (
    <Link
      href={`/${path}`}
      className={`flex flex-col px-2.5 ${className}`}
      onMouseEnter={(e) => onPrimaryButtonEnter(e)}
      onMouseLeave={(e) => onPrimaryButtonLeave(e)}
    >
      <span className={`flex flex-col items-start `}>
        {ja !== null ? <span className="font-700">{ja}</span> : ""}
        {en !== null ? <span>{en}</span> : ""}
      </span>
    </Link>
  );
};
