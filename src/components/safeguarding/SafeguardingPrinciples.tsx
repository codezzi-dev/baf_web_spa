import { Heart, Users, Lock, ShieldCheck, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ElementDto } from "@/api/types/the-federation/safeguarding-officer.type";

const principlesMeta: Record<string, { icon: LucideIcon; color: string }> = {
  "Child-Centered": { icon: Heart, color: "bg-tag-green" },
  "Inclusive": { icon: Users, color: "bg-tag-red" },
  "Confidential": { icon: Lock, color: "bg-tag-yellow" },
  "Proactive": { icon: ShieldCheck, color: "bg-primary" },
};

const defaultMeta = { icon: ShieldCheck, color: "bg-primary" };

interface SafeguardingPrinciplesProps {
  ourSafeguardingPrinciples: ElementDto;
}

const SafeguardingPrinciples: React.FC<SafeguardingPrinciplesProps> = ({
  ourSafeguardingPrinciples,
}) => {
  return (
    <Card className="card">
      <CardHeader className="card-header gradient-light-red">
        <CardTitle className="card-title">
          <Heart className="w-5 h-5 text-tag-red" />
          <h2 className="text-xl font-bold">
            {ourSafeguardingPrinciples.stepGroupTitle}
          </h2>
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {ourSafeguardingPrinciples.stepFromDtos.map((principle) => {
          const { icon: Icon, color } =
            principlesMeta[principle.stepTitle.trim()] ?? defaultMeta;

          return (
            <div key={principle.stepId} className="text-center">
              <div
                className={`w-14 h-14 mx-auto rounded-xl ${color} flex items-center justify-center mb-3`}
              >
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {principle.stepTitle}
              </h3>
              <p
                className="text-xs text-muted-foreground [&>p]:m-0"
                dangerouslySetInnerHTML={{ __html: principle.stepDescription }}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SafeguardingPrinciples;