import { Megaphone } from "lucide-react";

interface Notice {
  id: string;
  text: string;
  isNew?: boolean;
}

interface RunningNoticeProps {
  notices?: Notice[];
}

const defaultNotices: Notice[] = [
  { id: "1", text: "🏃 National Athletics Championship 2026 registrations now open!", isNew: true },
  { id: "2", text: "📢 Training camp for junior athletes starts March 15th" },
  { id: "3", text: "🏅 Congratulations to our athletes for winning 5 medals at Asian Games!" },
  { id: "4", text: "📋 New selection criteria announced for Commonwealth Games 2026", isNew: true },
  { id: "5", text: "🎯 Upcoming: Inter-district Athletics Meet - April 2026" },
];

const RunningNotice = ({ notices = defaultNotices }: RunningNoticeProps) => {
  const duplicatedNotices = [...notices, ...notices];

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2.5">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-destructive text-destructive-foreground px-4 py-1 flex items-center gap-2 font-semibold text-sm z-10">
          <Megaphone className="h-4 w-4" />
          <span>NOTICE</span>
        </div>
        
        <div className="marquee-container overflow-hidden flex-1 relative">
          <div className="flex marquee-content whitespace-nowrap">
            {duplicatedNotices.map((notice, index) => (
              <div key={`${notice.id}-${index}`} className="flex items-center mx-8">
                {notice.isNew && (
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded mr-2 font-medium">
                    NEW
                  </span>
                )}
                <span className="text-sm">{notice.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningNotice;
