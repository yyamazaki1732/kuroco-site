export type PrimaryHeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4";
  text: string;
  className?: string;
};

export const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({
  tag,
  text,
  className,
}) => {
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
    }
  };

  return (
    <div className={`text-heading34 font-700 ${className}`}>
      {renderHeading()}
    </div>
  );
};
