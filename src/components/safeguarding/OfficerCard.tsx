import { Phone, Mail, Clock, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const OfficerCard = () => {
  return (
    <Card className="overflow-hidden">
      {/* Header with icon */}
      <div className="bg-maroon p-8 flex justify-center">
        <div className="w-24 h-24 rounded-full bg-maroon-foreground/10 flex items-center justify-center">
          <Shield className="w-12 h-12 text-maroon-foreground" />
        </div>
      </div>
      
      {/* Officer info */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground">Dr. Nasrin Sultana</h3>
        <p className="text-primary font-medium">Chief Safeguarding Officer</p>
        <p className="text-accent text-sm font-medium">Licensed Child Protection Specialist</p>
      </div>
      
      {/* Emergency Contact */}
      <div className="px-6 pb-4">
        <div className="bg-green-light rounded-lg p-4">
          <div className="flex items-center gap-2 text-primary font-medium mb-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm">Emergency Contact</span>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-3 h-3" />
              <span>+880 1711-999888</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-3 h-3" />
              <span>safeguarding@bdathletics.gov.bd</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 24/7 Support */}
      <div className="px-6 pb-6">
        <div className="bg-yellow/10 border border-yellow/30 rounded-lg p-4">
          <div className="flex items-center gap-2 text-yellow-foreground font-medium mb-1">
            <Clock className="w-4 h-4 text-yellow" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Available round-the-clock for urgent safeguarding concerns
          </p>
        </div>
      </div>
    </Card>
  );
};

export default OfficerCard;
