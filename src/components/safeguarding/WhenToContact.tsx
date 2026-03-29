import { AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ElementDto } from "@/api/types/the-federation/safeguarding-officer.type";

const contactReasons = [
  "Witness or suspect abuse of any kind (physical, emotional, sexual, or neglect)",
  "Observe inappropriate behavior by staff, coaches, or officials",
  "Hear concerning disclosures from an athlete",
  "Notice significant changes in an athlete's behavior or wellbeing",
  "Have concerns about training practices or environments",
  "Experience or witness bullying, harassment, or discrimination",
  "Identify unsafe practices or potential risks to athletes",
  "Need guidance on safeguarding policies or procedures",
];
interface WhenToContactProps {
  contactTheSafeguardingOfficer: ElementDto
}

const WhenToContact: React.FC<WhenToContactProps> = ({ contactTheSafeguardingOfficer }) => {
  return (
    <Card className="card">
      <CardHeader className="card-header gradient-light-red">
        <CardTitle className="card-title">
          <AlertTriangle className="w-5 h-5 text-tag-red" />
          {contactTheSafeguardingOfficer.stepGroupTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content">
        <p className="text-sm text-muted-foreground mb-6">
          {contactTheSafeguardingOfficer.stepGroupSummary}
        </p>

        <div className="space-y-3">
          {contactTheSafeguardingOfficer.stepFromDtos.map((reason, index) => (
            <div key={index} className="flex items-start gap-4 p-3 border border-border rounded-md">
              <span className="w-6 h-6 rounded-full bg-maroon/10 text-maroon text-xs flex items-center justify-center flex-shrink-0 font-medium">
                {index + 1}
              </span>
              <span className="text-sm text-muted-foreground">{reason.stepTitle}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WhenToContact;
