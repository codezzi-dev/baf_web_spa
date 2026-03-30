import { Coach } from "@/api/types/coaches-and-judges/coaches.type";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Phone, Mail, Award } from "lucide-react";


interface CoachCardProps {
  coach: Coach;
}

const statusColors = {
  active: "bg-green-100 text-green-700 border-green-200",
  verified: "bg-blue-100 text-blue-700 border-blue-200",
  elite: "bg-yellow-100 text-yellow-700 border-yellow-200",
};

const CoachCard = ({ coach }: CoachCardProps) => {
  const certifications: { name: string; year: number }[] = (() => {
    try {
      return JSON.parse(coach.coacheCertificationsInJson ?? "[]");
    } catch {
      return [];
    }
  })();
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-maroon to-maroon/70 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {coach.coacheFullName.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground text-lg leading-tight">{coach.coacheFullName}</h3>
            <Badge className={`${statusColors[coach.status]} text-xs capitalize flex-shrink-0`}>
              {coach.status}
            </Badge>
          </div>
          <p className="text-maroon font-medium text-sm mt-1">{coach.coacheSpecialization}</p>
          <p className="text-muted-foreground text-sm">{coach.coacheYearsOfExperience} experience</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{coach.coacheAddress}</span>
        </div>
        {coach.coachePhone && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{coach.coachePhone}</span>
          </div>
        )}
        {coach.coacheEmail && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{coach.coacheEmail}</span>
          </div>
        )}
        {/* {coach.website && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="w-4 h-4 flex-shrink-0" />
            <a href={coach.website} className="text-maroon hover:underline truncate">
              Website
            </a>
          </div>
        )} */}
      </div>

      {/* <div className="flex items-center gap-2 flex-wrap">
        <Award className="w-4 h-4 text-yellow-600" />
        {coach.certifications.slice(0, 2).map((cert, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {cert}
          </Badge>
        ))}
        {coach.certifications.length > 2 && (
          <Badge variant="outline" className="text-xs">
            +{coach.certifications.length - 2}
          </Badge>
        )}
      </div> */}

      <div className="flex items-center gap-2 flex-wrap">
        <Award className="w-4 h-4 text-yellow-600" />
        <div>
          {certifications.slice(0, 2).map((cert, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {cert.name}
            </Badge>
          ))}
          {certifications.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{certifications.length - 2}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
