import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <h1>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </h1>
    </header>
  );
};
