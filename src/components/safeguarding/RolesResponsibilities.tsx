import { Star, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const responsibilities = [
  "Policy development and implementation",
  "Investigating safeguarding concerns",
  "Training staff and volunteers",
  "Managing disclosure procedures",
  "Liaison with external authorities",
  "Record keeping and reporting",
  "Risk assessment and management",
  "Promoting safeguarding awareness"
];

const RolesResponsibilities = () => {
  return (
    <Card className="card">
      <CardHeader className="card-header gradient-light-green">
        <CardTitle className="card-title">
          <Star className="w-5 h-5 text-yellow" />
          Role & Responsibilities
        </CardTitle>
      </CardHeader>

      <CardContent className="card-content">
        <p className="text-sm text-muted-foreground mb-6">
          The Safeguarding Officer is responsible for ensuring the welfare, safety, and protection of all athletes,
          particularly children and vulnerable adults, within the Bangladesh Athletics Federation.
        </p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {responsibilities.map((item, index) => (
            <div key={`left-${index}`} className="flex items-center gap-2 bg-green-900/5 p-4 rounded-md">
              <CheckCircle className="w-4 h-4 text-tag-green flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RolesResponsibilities;
