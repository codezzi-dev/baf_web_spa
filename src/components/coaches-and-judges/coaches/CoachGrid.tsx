import CoachCard, { Coach } from "./CoachCard";

interface CoachGridProps {
  searchQuery: string;
  activeSpecialization: string;
  selectedDivision: string;
}

const coaches: Coach[] = [
  {
    id: "1",
    name: "Md. Abdul Karim",
    specialization: "Sprint Training",
    experience: "15 years",
    location: "Dhaka, Bangladesh",
    phone: "+880 1711-234567",
    email: "karim.coach@gmail.com",
    certifications: ["IAAF Level 3", "National Coach", "Sports Science"],
    status: "elite",
  },
  {
    id: "2",
    name: "Fatima Rahman",
    specialization: "Distance Running",
    experience: "12 years",
    location: "Chittagong, Bangladesh",
    phone: "+880 1812-345678",
    email: "fatima.athletics@gmail.com",
    certifications: ["IAAF Level 2", "Marathon Specialist"],
    status: "verified",
  },
  {
    id: "3",
    name: "Shahid Hossain",
    specialization: "Throws (Shot Put, Discus)",
    experience: "20 years",
    location: "Rajshahi, Bangladesh",
    phone: "+880 1913-456789",
    certifications: ["IAAF Level 3", "Olympic Training", "Biomechanics"],
    status: "elite",
  },
  {
    id: "4",
    name: "Nusrat Jahan",
    specialization: "High Jump & Long Jump",
    experience: "8 years",
    location: "Khulna, Bangladesh",
    email: "nusrat.jumps@gmail.com",
    certifications: ["IAAF Level 2", "Youth Development"],
    status: "active",
  },
  {
    id: "5",
    name: "Rafiq Ahmed",
    specialization: "Combined Events",
    experience: "18 years",
    location: "Sylhet, Bangladesh",
    phone: "+880 1614-567890",
    website: "https://rafiqcoach.com",
    certifications: ["IAAF Level 3", "Decathlon Expert", "Mental Training"],
    status: "elite",
  },
  {
    id: "6",
    name: "Ayesha Begum",
    specialization: "Sprint Training",
    experience: "10 years",
    location: "Barisal, Bangladesh",
    phone: "+880 1715-678901",
    email: "ayesha.sprint@gmail.com",
    certifications: ["IAAF Level 2", "Women's Athletics"],
    status: "verified",
  },
  {
    id: "7",
    name: "Mohammad Iqbal",
    specialization: "Distance Running",
    experience: "14 years",
    location: "Rangpur, Bangladesh",
    phone: "+880 1816-789012",
    certifications: ["IAAF Level 2", "Cross Country", "Endurance"],
    status: "active",
  },
  {
    id: "8",
    name: "Taslima Akter",
    specialization: "Throws (Javelin)",
    experience: "9 years",
    location: "Mymensingh, Bangladesh",
    email: "taslima.javelin@gmail.com",
    certifications: ["IAAF Level 2", "Strength Training"],
    status: "verified",
  },
  {
    id: "9",
    name: "Kamal Uddin",
    specialization: "High Jump & Long Jump",
    experience: "16 years",
    location: "Dhaka, Bangladesh",
    phone: "+880 1917-890123",
    email: "kamal.jumps@gmail.com",
    website: "https://kamaluddin.coach",
    certifications: ["IAAF Level 3", "Technical Expert", "Video Analysis"],
    status: "elite",
  },
  {
    id: "10",
    name: "Razia Sultana",
    specialization: "Sprint Training",
    experience: "7 years",
    location: "Chittagong, Bangladesh",
    phone: "+880 1618-901234",
    certifications: ["IAAF Level 1", "Youth Coach"],
    status: "active",
  },
  {
    id: "11",
    name: "Habibur Rahman",
    specialization: "Combined Events",
    experience: "22 years",
    location: "Dhaka, Bangladesh",
    phone: "+880 1719-012345",
    email: "habib.combined@gmail.com",
    certifications: ["IAAF Level 3", "Olympic Coach", "Sports Psychology"],
    status: "elite",
  },
  {
    id: "12",
    name: "Sumaiya Khan",
    specialization: "Distance Running",
    experience: "11 years",
    location: "Rajshahi, Bangladesh",
    email: "sumaiya.distance@gmail.com",
    certifications: ["IAAF Level 2", "Half Marathon", "Recovery"],
    status: "verified",
  },
];

const specializationMap: Record<string, string[]> = {
  sprints: ["Sprint Training"],
  distance: ["Distance Running"],
  throws: ["Throws (Shot Put, Discus)", "Throws (Javelin)"],
  jumps: ["High Jump & Long Jump"],
  combined: ["Combined Events"],
};

const CoachGrid = ({ searchQuery, activeSpecialization, selectedDivision }: CoachGridProps) => {
  const filteredCoaches = coaches.filter((coach) => {
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialization.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSpecialization =
      !activeSpecialization ||
      specializationMap[activeSpecialization]?.some((spec) =>
        coach.specialization.includes(spec)
      );

    const matchesDivision =
      !selectedDivision ||
      selectedDivision === "All Divisions" ||
      coach.location.includes(selectedDivision);

    return matchesSearch && matchesSpecialization && matchesDivision;
  });

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>

      {filteredCoaches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No coaches found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CoachGrid;
