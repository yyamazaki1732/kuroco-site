import Link from "next/link";

type AccentButtonProps = {
  path: string;
  ja: string;
  en: string;
};

export const AccentButton: React.FC<AccentButtonProps> = ({ path, ja, en }) => {
  return (
    <Link
      href={`/${path}`}
      className={
        "flex flex-col px-2.5  bg-accent-700 text-neutral-100 text-heading14 min-w-35 max-w-38.5 grid place-items-center leading-relaxed w-30 h-full"
      }
    >
      <span
        className={"flex flex-col items-start items-center whitespace-pre-wrap"}
      >
        {ja !== null ? <span>{ja}</span> : ""}
        {en !== null ? <span>{en}</span> : ""}
      </span>
    </Link>
  );
};
