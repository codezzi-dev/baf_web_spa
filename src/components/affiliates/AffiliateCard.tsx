import { MapPin, Phone, Mail, ExternalLink, Building2, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";

export interface Organization {
  id: string;
  name: string;
  description: string;
  location: string;
  phone?: string;
  email?: string;
  website?: string;
  category: string;
  status: "active" | "verified" | "online";
}

interface AffiliateCardProps {
  organization: Organization;
}

const statusColors = {
  active: "bg-green-100 text-green-700",
  verified: "bg-blue-100 text-blue-700",
  online: "bg-emerald-100 text-emerald-700",
};

const AffiliateCard = ({ organization }: AffiliateCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="bg-tag-green h-24 flex items-center justify-center relative">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <Badge className={`absolute top-2 right-2 ${statusColors[organization.status]}`}>
          {organization.status}
        </Badge>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[48px]">
          {organization.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
          {organization.description}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-maroon" />
            <span className="line-clamp-1">{organization.location}</span>
          </div>

          {organization.phone && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 shrink-0 text-green-600" />
              <span>{organization.phone}</span>
            </div>
          )}

          {organization.email && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 shrink-0 text-blue-600" />
              <span className="truncate">{organization.email}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className=" relative">
        <div className="flex flex-col items-center justify-end mt-4 pt-4 border-t w-full pb-4 gap-2">
          <div className="flex w-full justify-between gap-2">
            <div className="flex gap-2 text-xs items-center text-gray-400">

            <Users className="h-4 w-4 font-extralight "/>
            <span>220 Athletes</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {organization.status === "active" ? "Active" : organization.status === "verified" ? "Verified" : "Online"}
            </Badge>
          </div>

          {organization.website && (
            <a
              href={organization.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-sm text-tag-green bg-tag-green/10 font-medium w-full rounded-md py-2"
            >
              <ExternalLink className="w-3 h-3" />
              Visit Website
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AffiliateCard;
