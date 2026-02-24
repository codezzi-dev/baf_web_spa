import { cn } from "@/utils";

interface HeadingProps {
  title: string;
  className?: string;
}

export default function DynamicHeading({ title, className }: HeadingProps) {
  const words = title.trim().split(" ");

  const mid = Math.ceil(words.length / 2);

  const firstPart = words.slice(0, mid).join(" ");
  const secondPart = words.slice(mid).join(" ");

  return (
    <h2
      className={cn(
        "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
        className,
      )}
    >
      {firstPart}{" "}
      {secondPart && (
        <span className="bg-gradient-to-r from-[#00704A] to-[#005239] bg-clip-text text-transparent">
          {secondPart}
        </span>
      )}
    </h2>
  );
}
