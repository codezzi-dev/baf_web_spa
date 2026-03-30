import { Coach } from "@/api/types/coaches-and-judges/coaches.type";
import CoachCard from "./CoachCard";

interface CoachGridProps {
  coaches: Coach[];
  isLoading: boolean;
  error: unknown;
}

const CoachGrid = ({ coaches, isLoading, error }: CoachGridProps) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong.</div>;

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <CoachCard key={coach.coachId} coach={coach} />
        ))}
      </div>
      {coaches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No coaches found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CoachGrid;
