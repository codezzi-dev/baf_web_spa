import { User, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Employee {
  id: string;
  name: string;
  title: string;
  image?: string;
  email?: string;
  phone?: string;
}

interface Department {
  name: string;
  head: Employee;
  members?: Employee[];
}

interface OrganogramProps {
  ceo: Employee;
  departments: Department[];
}

const EmployeeCard = ({ employee, isHead = false }: { employee: Employee; isHead?: boolean }) => (
  <Card className={`p-4 text-center transition-all hover:shadow-lg ${isHead ? 'border-primary border-2 bg-primary/5' : 'border-muted'}`}>
    <div className={`mx-auto mb-3 rounded-full overflow-hidden ${isHead ? 'w-20 h-20 ring-4 ring-primary/20' : 'w-16 h-16'} bg-muted flex items-center justify-center`}>
      {employee.image ? (
        <img src={employee.image} alt={employee.name} className="w-full h-full object-cover" />
      ) : (
        <User className={`${isHead ? 'h-10 w-10' : 'h-8 w-8'} text-muted-foreground`} />
      )}
    </div>
    <h4 className={`font-semibold text-foreground ${isHead ? 'text-lg' : 'text-sm'}`}>{employee.name}</h4>
    <p className={`text-muted-foreground ${isHead ? 'text-sm' : 'text-xs'} mt-1`}>{employee.title}</p>
    {(employee.email || employee.phone) && (
      <div className="mt-2 space-y-1">
        {employee.email && (
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <Mail className="h-3 w-3" />
            <span className="truncate max-w-[120px]">{employee.email}</span>
          </div>
        )}
        {employee.phone && (
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <Phone className="h-3 w-3" />
            <span>{employee.phone}</span>
          </div>
        )}
      </div>
    )}
  </Card>
);

const CEOCard = ({ ceo }: { ceo: Employee }) => (
  <Card className="p-6 text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl max-w-xs mx-auto">
    <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/30 bg-white/20 flex items-center justify-center">
      {ceo.image ? (
        <img src={ceo.image} alt={ceo.name} className="w-full h-full object-cover" />
      ) : (
        <User className="h-12 w-12 text-primary-foreground" />
      )}
    </div>
    <h3 className="text-xl font-bold">{ceo.name}</h3>
    <p className="text-primary-foreground/80 text-sm mt-1">{ceo.title}</p>
    {(ceo.email || ceo.phone) && (
      <div className="mt-3 space-y-1">
        {ceo.email && (
          <div className="flex items-center justify-center gap-1 text-xs text-primary-foreground/80">
            <Mail className="h-3 w-3" />
            <span>{ceo.email}</span>
          </div>
        )}
        {ceo.phone && (
          <div className="flex items-center justify-center gap-1 text-xs text-primary-foreground/80">
            <Phone className="h-3 w-3" />
            <span>{ceo.phone}</span>
          </div>
        )}
      </div>
    )}
  </Card>
);

const Organogram = ({ ceo, departments }: OrganogramProps) => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* CEO Section */}
        <div className="flex flex-col items-center">
          <CEOCard ceo={ceo} />
          
          {/* Connector line from CEO */}
          <div className="w-0.5 h-8 bg-border"></div>
          
          {/* Horizontal connector */}
          <div className="relative w-full max-w-4xl">
            <div className="h-0.5 bg-border"></div>
            
            {/* Vertical connectors to departments */}
            <div className="flex justify-around">
              {departments.map((_, index) => (
                <div key={index} className="w-0.5 h-8 bg-border"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {departments.map((department) => (
            <div key={department.name} className="space-y-4">
              {/* Department Header */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground bg-accent/10 py-2 px-4 rounded-lg inline-block">
                  {department.name}
                </h3>
              </div>
              
              {/* Department Head */}
              <EmployeeCard employee={department.head} isHead />
              
              {/* Department Members */}
              {department.members && department.members.length > 0 && (
                <>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-border"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {department.members.map((member) => (
                      <EmployeeCard key={member.id} employee={member} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Default data for demonstration
export const defaultOrganogramData: OrganogramProps = {
  ceo: {
    id: "ceo",
    name: "Kazi Salahuddin",
    title: "President",
    email: "president@baf.org.bd",
    phone: "+880 1711-000001",
  },
  departments: [
    {
      name: "Technical Committee",
      head: {
        id: "tech-head",
        name: "Abdul Karim",
        title: "Technical Director",
        email: "technical@baf.org.bd",
      },
      members: [
        { id: "tech-1", name: "Md. Rahman", title: "Head Coach" },
        { id: "tech-2", name: "Fatima Akter", title: "Asst. Coach" },
      ],
    },
    {
      name: "Administration",
      head: {
        id: "admin-head",
        name: "Shamim Hossain",
        title: "Secretary General",
        email: "admin@baf.org.bd",
      },
      members: [
        { id: "admin-1", name: "Kamal Uddin", title: "Finance Officer" },
        { id: "admin-2", name: "Nasreen Begum", title: "Admin Officer" },
      ],
    },
    {
      name: "Development",
      head: {
        id: "dev-head",
        name: "Rafiq Ahmed",
        title: "Development Director",
        email: "development@baf.org.bd",
      },
      members: [
        { id: "dev-1", name: "Sumon Das", title: "Program Manager" },
        { id: "dev-2", name: "Rina Khatun", title: "Youth Coordinator" },
      ],
    },
  ],
};

export default Organogram;
