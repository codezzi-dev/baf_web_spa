import { StaticImageData } from "next/image";
import presidentImage from "@/assets/images/organizational-people/nayeem.jpg";
import safeguardingOfficerImage from "@/assets/images/organizational-people/shirin-akter.png";
export interface Employee {
    id: number;
    image: StaticImageData;
    name: string;
    position: string;
    organization: string;
    responsibilities: {
        icon: "Award" | "Target" | "Users",
        description: string
    }[],
    greetings: string;
    vission: string;
    message: {
        firstPart: string[],
        secondPart: string[],
        thirdPart: string[],
    };
}

export const president: Employee = {
    id: 1,
    image: presidentImage,
    name: "Gen. M. A. Matin (Retd.)",
    position: "President",
    organization: "Bangladesh Athletics Federation",
    responsibilities: [
        {
            icon: "Award",
            description: "Veteran Administrator"
        },
        {
            icon: "Target",
            description: "Sports Development Leader"
        },
        {
            icon: "Users",
            description: "Youth Empowerment Advocate"
        }
    ],
    greetings: "Dear Athletes, Coaches, Officials, and Athletics Enthusiasts",
    message: {
        firstPart: [
            "It is with immense pride and profound honor that I address you as the President of the Bangladesh Athletics Federation. Athletics is not just a sport; it is a testament to the human spirit, a celebration of determination, and a pathway to national glory.",
            "Bangladesh has a rich heritage of sporting excellence, and athletics holds a special place in our journey. From the tracks of Dhaka to the international arenas, our athletes have consistently demonstrated courage, resilience, and an unwavering commitment to excellence. Each stride they take carries the hopes and aspirations of millions of Bangladeshis."
        ],
        secondPart: [
            "The Bangladesh Athletics Federation is dedicated to fostering a culture of excellence, where every young boy and girl with athletic potential can dream of representing our nation. We are investing in infrastructure, coaching, sports science, and athlete welfare programs to ensure that our athletes have access to the best resources available.",

            "I firmly believe that sports, particularly athletics, plays a crucial role in nation-building. It teaches discipline, builds character, promotes healthy living, and unites people across all divides. "],
        thirdPart: [
            "To our athletes: You are the pride of our nation. Every time you step onto the track or field, you carry not just your dreams, but the collective aspirations of Bangladesh. Train hard, compete with honor, and know that the entire nation stands behind you.",
            "To our coaches and support staff: Your dedication and expertise are the foundation of our success. Thank you for your tireless efforts in nurturing talent and building champions.",
            "To our stakeholders, sponsors, and partners: Your support is invaluable. Together, we are building a legacy that will benefit generations to come.",
            "Let us work together to make Bangladesh a powerhouse in athletics. The journey may be challenging, but with unity, determination, and unwavering commitment, there is no limit to what we can achieve."
        ]
    },
    vission: "We are committed to creating a comprehensive ecosystem that identifies talent from the grassroots level, provides world-class training facilities, and ensures our athletes have every opportunity to compete and succeed on the global stage."
}


export interface Officer {
    id: number;
    image: StaticImageData;
    name: string;
    position: string;
    organization: string;

}

export const safeguardingOfficer: Officer = {
    id: 1,
    image: safeguardingOfficerImage,
    name: "Dr. Nasrin Sultana",
    position: "Chief Safeguarding Officer",
    organization: "Bangladesh Athletics Federation",
}