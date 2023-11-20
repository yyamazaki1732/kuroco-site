export type AccentHeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "div";
  text: string;
};

export const AccentHeading: React.FC<AccentHeadingProps> = ({ tag, text }) => {
  const renderHeading = () => {
    switch (tag) {
      case "h1":
        return <h1>{text}</h1>;
      case "h2":
        return <h2>{text}</h2>;
      case "h3":
        return <h3>{text}</h3>;
      case "h4":
        return <h4>{text}</h4>;
      case "div":
        return <div>{text}</div>;
    }
  };

  return (
    <div className="text-accent-700 text-heading14 font-700 font-display relative pl-5 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:h-[0.125rem] before:w-3 before:bg-accent-700">
      {renderHeading()}
    </div>
  );
};
