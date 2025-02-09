import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariants = "extraSmall" | "small" | "regular" | "wide" | "medium";
const variantStyles: Record<BookCoverVariants, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
  medium: "book-cover_medium",
};
type Props = {
  className?: string;
  variant?: BookCoverVariants;
  coverColor: string;
  coverUrl: string;
};
const BookCover = ({
  variant = "regular",
  className,
  coverUrl = "https://placehold.co/400x600.png",
  coverColor = "#012B48",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverUrl}
          fill
          alt="Book"
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
