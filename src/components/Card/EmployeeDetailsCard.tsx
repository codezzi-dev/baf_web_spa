import React, { FC } from 'react'
import { Card } from '../ui/card'
import { Award, Target, Users } from 'lucide-react'
import presidentImage from "@/assets/images/organizational-people/nayeem.jpg";

import Image from 'next/image'
import { Separator } from '../ui/Separator'
import { MessageFromPresident } from '@/api/types/the-federation/message-from-president.type'

interface EmployeeDetailsCardProps {
    pageMessageFromPresident: MessageFromPresident;
}
const EmployeeDetailsCard: FC<EmployeeDetailsCardProps> = ({ pageMessageFromPresident }) => {
    const TAG_ICON_MAP: Record<string, "Award" | "Target" | "Users"> = {
        "Veteran Administrator": "Award",
        "Sports Development Leader": "Target",
        "Youth Empowerment Advocate": "Users",
    };

    function parsePresidentTags(tags: string) {
        return tags.split(",").map((tag) => ({
            description: tag.trim(),
            icon: TAG_ICON_MAP[tag.trim()] ?? "Award",
        }));
    }
    const responsibilities = parsePresidentTags(pageMessageFromPresident.messageFromPresidentTags);

    return (
        <div className="lg:col-span-1">
            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="h-80 bg-gradient-to-br from-white-100 to-white-200 relative overflow-hidden">
                    <Image
                        src={presidentImage}
                        alt={pageMessageFromPresident.messageFromPresidentName}
                        className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                </div>
                <div className="p-6 text-center">
                    <h2 className="font-playfair text-xl font-bold text-foreground">
                        {pageMessageFromPresident.messageFromPresidentName}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-primary">
                        {/* {pageMessageFromPresident.}, {president.organization} */}
                        President, Bangladesh Athletics Fedaration
                    </p>
                    <Separator className="my-4" />
                    <div className="mt-6 space-y-3 text-left">
                        {responsibilities.map((responsibility, index) => (
                            <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                                {responsibility.icon === "Award" && <Award className="h-4 w-4 text-warning" />}
                                {responsibility.icon === "Target" && <Target className="h-4 w-4 text-success" />}
                                {responsibility.icon === "Users" && <Users className="h-4 w-4 text-destructive" />}
                                <span>{responsibility.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default EmployeeDetailsCard