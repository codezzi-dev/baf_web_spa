import { StaticImageData } from "next/image";

export interface Employee {
  id: string;
  full_name: string;
  category?: string[];
  position: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  bio?: string;
  achievements?: string[];
  image?: StaticImageData;
}

export interface Department {
  name: string;
  head: Employee;
  members?: Employee[];
}

export interface OrganogramProps {
  ceo: Employee;
  departments: Department[];
}