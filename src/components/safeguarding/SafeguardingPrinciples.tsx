import { Heart, Users, Lock, ShieldCheck } from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const principles = [
  {
    icon: Heart,
    title: "Child-Centered",
    description: "The welfare of the child is paramount",
    color: "bg-tag-green",
  },
  {
    icon: Users,
    title: "Inclusive",
    description: "Protection for all regardless of background",
    color: "bg-tag-red",
  },
  {
    icon: Lock,
    title: "Confidential",
    description: "Information handled with discretion",
    color: "bg-tag-yellow",
  },
  {
    icon: ShieldCheck,
    title: "Proactive",
    description: "Prevention through education",
    color: "bg-primary",
  },
];

const SafeguardingPrinciples = () => {
  return (
    <Card className="card">
      <CardHeader className="card-header gradient-light-red">
        <CardTitle className="card-title">
          <Heart className="w-5 h-5 text-tag-red" />
          <h2 className="text-xl font-bold">Our Safeguarding Principles</h2>
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {principles.map((principle, index) => (
          <div key={index} className="text-center">
            <div className={`w-14 h-14 mx-auto rounded-xl ${principle.color} flex items-center justify-center mb-3`}>
              <principle.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{principle.title}</h3>
            <p className="text-xs text-muted-foreground">{principle.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SafeguardingPrinciples;
