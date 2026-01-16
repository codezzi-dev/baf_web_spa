import { OrganogramProps } from "@/types/organogram";
import monirul_islam from '@/assets/images/organizational-people/monirul_islam.jpg'
import nayeem from '@/assets/images/organizational-people/nayeem.jpg'
import abdun_naser_khan from '@/assets/images/organizational-people/abdun-naser-khan.png'
import iqbal_hossain from '@/assets/images/organizational-people/iqbal_hossain.jpg'
import shah_alom from '@/assets/images/organizational-people/shah_alam.jpg'
import kitab_ali from '@/assets/images/organizational-people/kitab_ali.jpg'
import mizanur_rahman from '@/assets/images/organizational-people/mizanur_rahman.jpeg'

import sabbir_mostofa from '@/assets/images/organizational-people/sabbir-mostafa-khan.png'
import muzibar_rahman_mollick from '@/assets/images/organizational-people/mujibur-rahman-mollick.jpg'
import farid_khan_chowdhury from '@/assets/images/organizational-people/farid-khan-chowdhury.jpg'
import firoja from '@/assets/images/organizational-people/firoja-khatun.png'
import sharmistha_roy from '@/assets/images/organizational-people/sharmistha-roy.png'
import nasir_ahmed from '@/assets/images/organizational-people/m-m-nazir-ahmed.jpg'
import shirin_akter from '@/assets/images/organizational-people/shirin-akter.png'
import mujibur_rahman from '@/assets/images/organizational-people/mujibur-rahman.jpg'
import riajul_islam from '@/assets/images/organizational-people/md-riajul-islam.png'
import touhidul_islam from '@/assets/images/organizational-people/colonel-md-touhidul-islam.png'
import nadiruzamman from '@/assets/images/organizational-people/commander-nadiruzzaman.png'
import ekramul_haque from '@/assets/images/organizational-people/wing-commander-md-ekramul-haque.png'
// Default data for demonstration
export const defaultOrganogramData: OrganogramProps = {
  ceo: {
    id: "president",
    full_name: "Major General (Retd.) Dr Md Nayeem Ashfaque Chowdhury",
    category: ['executive'],
    position: "President",
    email: "arif.hossain@example.com",
    phone: "+8801743-487255",
    photo_url:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    image: nayeem,
    bio: "Leading the Bangladesh Athletics Federation with a focus on development and excellence.",
    achievements: ["Led national sports program", "Increased funding by 30%"],
  },
  departments: [
    {
      name: "Technical Committee",
      head: {
        id: "tech-head",
        full_name: "Abdul Karim",
        position: "Technical Director",
        email: "technical@baf.org.bd",
      },
      members: [
        { id: "tech-1", full_name: "Md. Rahman", position: "Head Coach" },
        { id: "tech-2", full_name: "Fatima Akter", position: "Asst. Coach" },
      ],
    },
    {
      name: "Administration",
      head: {
        id: "admin-head",
        full_name: "Shamim Hossain",
        position: "Secretary General",
        email: "admin@baf.org.bd",
      },
      members: [
        { id: "admin-1", full_name: "Kamal Uddin", position: "Finance Officer" },
        { id: "admin-2", full_name: "Nasreen Begum", position: "Admin Officer" },
      ],
    },
    {
      name: "Development",
      head: {
        id: "dev-head",
        full_name: "Rafiq Ahmed",
        position: "Development Director",
        email: "development@baf.org.bd",
      },
      members: [
        { id: "dev-1", full_name: "Sumon Das", position: "Program Manager" },
        { id: "dev-2", full_name: "Rina Khatun", position: "Youth Coordinator" },
      ],
    },
  ],
};