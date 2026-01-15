import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { StoryCardProps } from "@/types/press-realease/story";

const categoryStyles = {
  announcement: "bg-badge-announcement text-white",
  event: "bg-badge-event text-white",
  partnership: "bg-badge-partnership text-white",
};

const StoryCard = ({ story, featured = false }: StoryCardProps) => {
  return (
    <Link
      href={`/press-releases/${story.id}`}
      className={cn(
        "group block overflow-hidden rounded-lg bg-card shadow-card transition-all duration-300 hover:shadow-card-hover",
        featured && "md:col-span-2 lg:col-span-1"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <Badge
          className={cn(
            "absolute bottom-4 left-4 border-0 text-xs font-medium",
            categoryStyles[story.category]
          )}
        >
          {story.category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="mb-2 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {story.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {story.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {story.date}
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
