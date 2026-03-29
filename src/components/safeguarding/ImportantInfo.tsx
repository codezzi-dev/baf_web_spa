import { Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ElementDto } from "@/api/types/the-federation/safeguarding-officer.type";

const infoMeta: Record<string, { bgColor: string; borderColor: string; textColor: string }> = {
  "Confidentiality": {
    bgColor: "bg-tag-green/10",
    borderColor: "border-tag-green/30",
    textColor: "text-tag-green",
  },
  "No Concern is Too Small": {
    bgColor: "bg-tag-yellow/10",
    borderColor: "border-tag-yellow/30",
    textColor: "text-tag-yellow",
  },
  "Anonymous Reporting": {
    bgColor: "bg-tag-blue/10",
    borderColor: "border-tag-blue/30",
    textColor: "text-tag-blue",
  },
};

const defaultMeta = {
  bgColor: "bg-muted/10",
  borderColor: "border-muted/30",
  textColor: "text-muted-foreground",
};

interface ImportantInfoProps {
  importantInformation: ElementDto;
}

const ImportantInfo: React.FC<ImportantInfoProps> = ({ importantInformation }) => {
  return (
    <Card className="card">
      <CardHeader className="card-header gradient-light-green">
        <CardTitle className="card-title">
          <Info className="w-5 h-5 text-muted-foreground" />
          {importantInformation.stepGroupTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 card-content">
        {importantInformation.stepFromDtos.map((item) => {
          const { bgColor, borderColor, textColor } =
            infoMeta[item.stepTitle.trim()] ?? defaultMeta;

          return (
            <div key={item.stepId} className={`p-4 rounded-lg ${bgColor} border ${borderColor}`}>
              <h4 className={`font-semibold mb-1 ${textColor}`}>{item.stepTitle}</h4>
              <p
                className={`text-xs ${textColor} [&>p]:m-0`}
                dangerouslySetInnerHTML={{ __html: item.stepDescription }}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ImportantInfo;