import { Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const infoItems = [
  {
    title: "Confidentiality",
    description: "All concerns are treated confidentially and shared only on a need-to-know basis to protect the child's welfare.",
    bgColor: "bg-tag-green/10",
    borderColor: "border-tag-green/30",
    textColor: "text-tag-green",
  },
  {
    title: "No Concern is Too Small",
    description: "If something doesn't feel right, report it. It's better to raise a concern that turns out to be nothing than to miss a serious issue.",
    bgColor: "bg-tag-yellow/10",
    borderColor: "border-tag-yellow/30",
    textColor: "text-tag-yellow",
  },
  {
    title: "Anonymous Reporting",
    description: "You can report concerns anonymously if you prefer. Your identity will be protected throughout the process.",
    bgColor: "bg-tag-blue/10",
    borderColor: "border-tag-blue/30",
    textColor: "text-tag-blue",
  },
];

const ImportantInfo = () => {
  return (
    <Card className="card">
      <CardHeader className="card-header gradient-light-green">
        <CardTitle className="card-title">
          <Info className="w-5 h-5 text-muted-foreground" />
          Important Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 card-content">
        {infoItems.map((item, index) => (
          <div key={index} className={`p-4 rounded-lg ${item.bgColor} border ${item.borderColor}`}>
            <h4 className={`font-semibold mb-1 ${item.textColor}`}>{item.title}</h4>
            <p className={`text-xs ${item.textColor}`}>{item.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ImportantInfo;
