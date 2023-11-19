import Image from "next/image";

type Img = {
  src: string;
  alt: string;
  width: number;
  height: number;
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
  priority,
  dual,
}) => {
  const img = (
    <Image
      src={src}
      alt={alt}
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
