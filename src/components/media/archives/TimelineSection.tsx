import { Card, CardContent, CardHeader } from "@/components/ui/card";

const timelineData = [
  {
    decade: "2020s",
    count: "1 item",
    events: [{ title: "Golden Jubilee Celebration 2021", year: 2021 }],
  },
  {
    decade: "2010s",
    count: "1 item",
    events: [{ title: "Coaching Manual Archives 1980-2010", year: 2010 }],
  },
  {
    decade: "2000s",
    count: "2 items",
    events: [
      { title: "Documentary: Journey of Bangladesh Athletics 2000", year: 2000 },
      { title: "International Athletic Meet Dhaka 2005", year: 2005 },
    ],
  },
  {
    decade: "1990s",
    count: "4 items",
    events: [
      { title: "Bangladesh Athletics Annual Report 1990", year: 1990 },
      { title: "Asian Games Dhaka Bid Presentation 1995", year: 1995 },
      { title: "Historic Press Conference - First Olympic Qualification 1996", year: 1996 },
    ],
  },
  {
    decade: "1980s",
    count: "2 items",
    events: [
      { title: "First South Asian Games Participation 1984", year: 1984 },
      { title: "National Stadium Opening Ceremony 1985", year: 1985 },
    ],
  },
  {
    decade: "1970s",
    count: "2 items",
    events: [
      { title: "1st National Athletics Championship 1972", year: 1972 },
      { title: "Bangladesh Athletics Federation Founding Documents", year: 1972 },
    ],
  },
];

const TimelineSection = () => {
  return (
    <Card className="mb-16 card">
      <CardHeader className="card-header">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Timeline of <span className="text-tag-yellow">Excellence</span>
        </h2>
      </CardHeader>

      <CardContent className="max-w-full card-content flex flex-col  gap-4">
        {timelineData.map((decade, index) => (
          <div key={decade.decade} className="relative w-full flex flex-col md:flex-row gap-4">
       
            {/* Decade header */}
            <div className="flex items-end justify-between md:block w-full md:w-auto pb-2 md:pb-0 pr-0 md:pr-4 border-b-4 md:border-b-0 border-r-0 md:border-r-4 border-tag-yellow">
              <span className="text-tag-yellow font-bold text-lg">
                {decade.decade}
              </span>
              <div className="text-xs text-muted-foreground md:text-right">
                {decade.count}
              </div>
            </div>

            {/* Events */}
            <div className="w-full">
              {decade.events.map((event, eventIndex) => (
                <div key={eventIndex} className="flex items-center gap-3 mb-3 w-full">
                  <div className="relative flex items-center flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
                    <span className="relative z-10 text-sm text-foreground flex-1">
                      {event.title}
                    </span>
                    <span className="relative z-10 bg-background border-2 rounded-md text-xs border-tag-yellow/10 text-tag-yellow font-medium px-2">
                      {event.year}
                    </span>
                  </div>
                </div>
              ))}

              {/* Spacer between decades */}
              {index < timelineData.length - 1 && <div className="h-6" />}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TimelineSection;
