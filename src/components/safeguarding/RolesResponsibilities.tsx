import { Star, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ElementDto } from "@/api/types/common/element.type";

interface RolesResponsibilitiesProps {
  roleAndResponsibilities: ElementDto
}
const RolesResponsibilities: React.FC<RolesResponsibilitiesProps> = ({ roleAndResponsibilities }) => {
  return (
    <Card className="card">
      <CardHeader className="card-header gradient-light-green">
        <CardTitle className="card-title">
          <Star className="w-5 h-5 text-yellow" />
          {roleAndResponsibilities.stepGroupTitle}
        </CardTitle>
      </CardHeader>

      <CardContent className="card-content">
        <p className="text-sm text-muted-foreground mb-6">
          {roleAndResponsibilities.stepGroupSummary}
        </p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {roleAndResponsibilities.stepFromDtos.map((item, index) => (
            <div key={`left-${index}`} className="flex items-center gap-2 bg-green-900/5 p-4 rounded-md">
              <CheckCircle className="w-4 h-4 text-tag-green flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item.stepTitle}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RolesResponsibilities;
