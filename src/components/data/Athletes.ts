import imranur_rahman from "@/assets/images/home/featured-athlete/Imranur-Rahman.png"
import shirin_akter from "@/assets/images/home/featured-athlete/Shirin-Akter.jpg"
import sumaya_Dewan from "@/assets/images/home/featured-athlete/Sumaya-Dewan .jpg"
import md_ismail from "@/assets/images/home/featured-athlete/Md-Ismail.png"
import { StaticImageData } from "next/image";

interface Athlete {
  id: number;
  name: string;
  specialty: string;
  bestTime: string;
  goldMedals: number;
  silverMedals: number;
  emoji: string;
  image: StaticImageData;
  gradient: string;
}

export const athletes:Athlete[] = [
    {
      id: 1,
      name: "Imranur Rahman",
      specialty: "100m Sprint",
      bestTime: "10.01s",
      goldMedals: 5,
      silverMedals: 0o0,
      emoji: "🏃",
      image: imranur_rahman,
      gradient: "from-blue-500 to-blue-400",
    },
    {
      id: 2,
      name: "Shirin Akter",
      specialty: "400m Hurdles",
      bestTime: "11.06s",
      goldMedals: 15,
      silverMedals: 2,
      emoji: "🏃‍♀️",
      image: shirin_akter,
      gradient: "from-yellow-500 to-yellow-300",
    },
    {
      id: 3,
      name: "Ismail Hossain",
      specialty: "Long Jump",
      bestTime: "10.20s",
      goldMedals: 0o5,
      silverMedals: 3,
      emoji: "⛹️",
      image: md_ismail,
      gradient: "from-red-500 to-red-400",
    },
    {
      id: 4,
      name: "Sumaya Dewan",
      specialty: "Marathon",
      bestTime: "11.06s",
      goldMedals: 2,
      silverMedals: 2,
      emoji: "🏃‍♀️",
      image: sumaya_Dewan,
      gradient: "from-purple-500 to-purple-400",
    },
     {
      id: 5,
      name: "Imranur Rahman",
      specialty: "100m Sprint",
      bestTime: "10.01s",
      goldMedals: 5,
      silverMedals: 0o0,
      emoji: "🏃",
      image: imranur_rahman,
      gradient: "from-blue-500 to-blue-400",
    },
    {
      id: 6,
      name: "Shirin Akter",
      specialty: "400m Hurdles",
      bestTime: "11.06s",
      goldMedals: 15,
      silverMedals: 2,
      emoji: "🏃‍♀️",
      image: shirin_akter,
      gradient: "from-yellow-500 to-yellow-300",
    },
    {
      id: 7,
      name: "Ismail Hossain",
      specialty: "Long Jump",
      bestTime: "10.20s",
      goldMedals: 0o5,
      silverMedals: 3,
      emoji: "⛹️",
      image: md_ismail,
      gradient: "from-red-500 to-red-400",
    },
    {
      id: 8,
      name: "Sumaya Dewan",
      specialty: "Marathon",
      bestTime: "11.06s",
      goldMedals: 2,
      silverMedals: 2,
      emoji: "🏃‍♀️",
      image: sumaya_Dewan,
      gradient: "from-purple-500 to-purple-400",
    },

  ];