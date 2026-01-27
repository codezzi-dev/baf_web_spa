import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";

export interface ArchiveItem {
  id: string;
  title: string;
  description: string;
  year: number;
  date: string;
  category: "video" | "documents" | "news" | "photo";
  image: string;
  badge?: string;
}

interface ArchiveCardProps {
  item: ArchiveItem;
}

const categoryColors: Record<string, string> = {
  video: "bg-[hsl(var(--green-dark))]",
  documents: "bg-[hsl(var(--maroon))]",
  news: "bg-blue-500",
  photo: "bg-purple-500",
};

const badgeColors: Record<string, string> = {
  Featured: "bg-[hsl(var(--yellow))] text-black",
  Event: "bg-[hsl(var(--maroon))] text-white",
  "Photo History": "bg-purple-500 text-white",
  Video: "bg-[hsl(var(--green-dark))] text-white",
};

const ArchiveCard = ({ item }: ArchiveCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow border-border card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`${categoryColors[item.category]} text-white text-xs`}>
            {item.year}
          </Badge>
          {item.badge && (
            <Badge className={`${badgeColors[item.badge] || "bg-gray-500 text-white"} text-xs`}>
              {item.badge}
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-[hsl(var(--green-dark))] transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {item.date}
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-[hsl(var(--yellow))] hover:text-[hsl(var(--yellow))]/80 transition-colors">
            View
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArchiveCard;
