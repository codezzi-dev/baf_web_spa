import React, { FC } from "react";
import { Badge } from "../../ui/Badge";
import { Target, Eye, Users, type LucideIcon, icons } from "lucide-react";

export type MissionVision = {
  option: {
    icon: "Target" | "Eye" | "Users";
    title: string;
    description: string;
    tags: string[];
    color: string;
  }[];
};

type MissionVissionCardProps = {
  missionVision: MissionVision;
};

const MissionVisionSection: FC<MissionVissionCardProps> = ({
  missionVision,
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-20">
      {missionVision.option.map((option) => {
        const Icon = icons[option.icon] ?? Target;
        return (
          <div
            key={option.title}
            className="rounded-2xl border-none shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300"
          >
            <div className={`h-48 bg-${option.color} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="p-8 md:p-10 bg-white">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                {option.title}
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{option.description}</p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {option.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`bg-${option.color}/10 text-${option.color} border-none rounded-2xl px-2 py-1`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MissionVisionSection;
