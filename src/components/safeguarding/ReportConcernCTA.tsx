import { Shield, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ReportConcernCTA = () => {
  return (
    <section className="bg-tag-green rounded-2xl p-8 md:p-12 text-center">
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
        <Shield className="w-6 h-6 text-primary-foreground" />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
        Need to Report a Concern?
      </h2>
      
      <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
        Your concern could make a critical difference. Contact us immediately if you have any safeguarding concerns.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0">
          <Phone className="w-4 h-4 mr-2" />
          Call Now: +880 1711-999888
        </Button>
        <Button variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
          <Mail className="w-4 h-4 mr-2" />
          Email Us
        </Button>
      </div>
    </section>
  );
};

export default ReportConcernCTA;
