import Image, { StaticImageData } from "next/image";

type PostImageProps = {
  alt: string;
  caption?: string;
  src: StaticImageData | string;
};

export default function PostImage({ alt, caption, ...props }: PostImageProps) {
  return (
    <figure>
      <Image className="w-full rounded-xl" {...props} alt={alt} />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-200">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
