"use client";
import { FileText, Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SafeguardingResources } from "@/api/types/the-federation/safeguarding-officer.type";

interface ResourcesSectionProps {
  safeguardingResources: SafeguardingResources[];
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ safeguardingResources }) => {
  const handleDownload = (url: string, name: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          {safeguardingResources.map((resource) => (
            <div
              key={resource.documentId}
              className="flex items-center justify-between bg-green-900/5 hover:bg-green-900/10 p-4 rounded-md"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-tag-green" />
                <span className="text-sm text-muted-foreground">{resource.documentName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-primary bg-accent/10 px-2 py-1 rounded-full border-2">
                  {resource.documentType}
                </span>
                <button
                  onClick={() => handleDownload(resource.documentUrl, resource.documentName)}
                  className="text-xs font-medium text-primary-foreground bg-primary hover:bg-primary/90 px-2 py-1 rounded-full flex items-center gap-1 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;