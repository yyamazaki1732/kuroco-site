import Image from "next/image";

type Img = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  dual?: {
    srcSet: string;
    media: string;
    size: number;
  };
};

export const Img: React.FC<Img> = ({
  src,
  alt,
  width,
  height,
  className,
  priority,
  dual,
}) => {
  const img = (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
    />
  );
  const mediaSize = dual ? dual.size.toString() : "";

  return dual ? (
    <picture>
      <source
        srcSet={dual.srcSet}
        media={`(${dual.media}-width: ${mediaSize}px)`}
      />
      {img}
    </picture>
  ) : (
    img
  );
};
