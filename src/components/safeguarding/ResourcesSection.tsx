import { FileText, Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const resources = [
  "Safeguarding Policy Document",
  "Code of Conduct for Coaches",
  "Reporting Procedures Guide",
  "Child Protection Guidelines",
  "Safe Training Environment Checklist",
  "Parent & Guardian Information Pack",
];

const ResourcesSection = () => {
  return (
    <Card className="card">
      <CardHeader className="card-header gradient-light-gray">
        <CardTitle className="card-title">
          <Download className="w-5 h-5 text-primary" />
          Safeguarding Resources
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content">
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <div key={index} className="flex items-center justify-between bg-green-900/5 hover:bg-green-900/10 p-4 rounded-md">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-tag-green"/>
                <span className="text-sm text-muted-foreground">{resource}</span>
              </div>
              <span className="text-xs font-medium text-primary bg-accent/10 px-2 py-1 rounded-full border-2">PDF</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
