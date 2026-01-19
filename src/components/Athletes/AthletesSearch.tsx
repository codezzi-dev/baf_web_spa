"use client";

import React, { useState } from "react";
import { Users, Search, Filter, Trophy, MapPin, Calendar, Award, X } from "lucide-react";
import {Button} from "../ui/Button";
import AthleteCard, { IAthlete } from "./AthletsCard";
import CustomSelect from "../ui/CustomSelect";
import imranur_rahman from '@/assets/images/athletes/Imranur-Rahman.png'
import ismail_hossain from '@/assets/images/athletes/Md-Ismail.png'
import shirin_akter from '@/assets/images/athletes/Shirin-Akter.jpg'
import sumaya_dewan from '@/assets/images/athletes/Sumaya-Dewan.jpg'
import abdul_motalab from '@/assets/images/athletes/abdul-motalab.jpg'
import jahir_rahman from '@/assets/images/athletes/jahir-rayhan.jpg'
import mahfuzur_rahman from '@/assets/images/athletes/mahfuzur-rahman.jpg'
import rakibul_hasan from '@/assets/images/athletes/rakibul-hasan.jpg'
import ritu_akter from '@/assets/images/athletes/most-ritu-akter.jpeg'
import najimul_hossain from '@/assets/images/athletes/najimul-hossain-roni.jpg'


const TEAMS = [
  "All Teams",
  "Dhaka",
  "Chittagong",
  "Rajshahi",
  "Khulna",
  "Sylhet",
  "Barisal",
  "Rangpur",
  "Mymensingh",
  "National Team",
];

const EVENTS = [
  "All Events",
  "100m Sprint",
  "200m Sprint",
  "400m Sprint",
  "800m Run",
  "1500m Run",
  "5000m Run",
  "10000m Run",
  "110m Hurdles",
  "400m Hurdles",
  "Long Jump",
  "High Jump",
  "Triple Jump",
  "Pole Vault",
  "Shot Put",
  "Discus Throw",
  "Javelin Throw",
  "Hammer Throw",
  "Marathon",
  "Race Walking",
];

const CATEGORIES = ["All Categories", "senior", "junior", "youth"];

const teamColors = {
  Dhaka: "bg-blue-100 text-blue-800",
  Chittagong: "bg-green-100 text-green-800",
  Rajshahi: "bg-purple-100 text-purple-800",
  Khulna: "bg-orange-100 text-orange-800",
  Sylhet: "bg-pink-100 text-pink-800",
  Barisal: "bg-indigo-100 text-indigo-800",
  Rangpur: "bg-red-100 text-red-800",
  Mymensingh: "bg-yellow-100 text-yellow-800",
  "National Team": "bg-gradient-to-r from-[#00704A] to-[#005239] text-white",
};

const AthletesSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [selectedEvent, setSelectedEvent] = useState("All Events");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAthletes = athletesData.filter((athlete) => {
    const matchesSearch = searchQuery === "" || athlete.full_name?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTeam = selectedTeam === "All Teams" || athlete.team === selectedTeam;

    const matchesEvent = selectedEvent === "All Events" || athlete.preferred_events?.includes(selectedEvent);

    const matchesCategory = selectedCategory === "All Categories" || athlete.athlete_category === selectedCategory;

    return matchesSearch && matchesTeam && matchesEvent && matchesCategory;
  });

  const activeFiltersCount = [
    selectedTeam !== "All Teams",
    selectedEvent !== "All Events",
    selectedCategory !== "All Categories",
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedTeam("All Teams");
    setSelectedEvent("All Events");
    setSelectedCategory("All Categories");
    setSearchQuery("");
  };

  return (
    <div className="py-6 main_container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="border-none shadow-lg rounded-xl">
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-[#00704A] mb-1">{athletesData.length}</div>
            <div className="text-sm text-gray-600">Total Athletes</div>
          </div>
        </div>
        <div className="border-none shadow-lg rounded-xl">
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-[#C1272D] mb-1">
              {athletesData.filter((a) => a.gender === "male").length}
            </div>
            <div className="text-sm text-gray-600">Male Athletes</div>
          </div>
        </div>
        <div className="border-none shadow-lg rounded-xl">
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-1">
              {athletesData.filter((a) => a.gender === "female").length}
            </div>
            <div className="text-sm text-gray-600">Female Athletes</div>
          </div>
        </div>
        <div className="border-none shadow-lg rounded-xl">
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-[#00704A] mb-1">{filteredAthletes.length}</div>
            <div className="text-sm text-gray-600">Filtered Results</div>
          </div>
        </div>
      </div>

      {/* Search Header */}
      <div className="flex flex-col items-center justify-between bg-white w-full border border-gray-200 rounded-xl mb-8">
        {/* Search + Filter Toggle */}

        {/* Search Header */}
        <div className="flex flex-col w-full items-center justify-center gap-4 bg-white p-6 rounded-xl">
          {/* Search Input */}
          <div className="relative w-full ">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search athletes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg pl-10 pr-4 py-3 border border-gray-300  shadow-sm text-gray-700 text-sm focus:ring-2 focus:ring-[#00704A] focus:border-[#00704A] transition-all outline-none"
            />
          </div>

          {/* Filter Button */}
          <div className="w-full flex justify-start">
            <Button
              type="button"
              variant="default"
              onClick={() => setShowFilters((prev) => !prev)}
              className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-[#00704A] text-white font-medium rounded-lg shadow hover:bg-[#005f3b] transition-all"
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-white text-[#00704A] rounded-full text-xs px-2 py-0.5 font-semibold">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white  p-4 mb-6 flex flex-col md:flex-row gap-4 items-center w-full">
            <CustomSelect label="Select Team" options={TEAMS} value={selectedTeam} onChange={setSelectedTeam} />

            <CustomSelect label="Select Event" options={EVENTS} value={selectedEvent} onChange={setSelectedEvent} />

            <CustomSelect
              label="Select Category"
              options={CATEGORIES}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />

            <Button
              variant='outline'
              type="button"
              className="text-red-500 flex items-center gap-2"
              onClick={clearFilters}
            >
              <X className="w-4 h-4" />
              Clear
            </Button>
          </div>
        )}
      </div>

      {/* Results Grid */}
      {filteredAthletes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAthletes.map((athlete, id) => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-12">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p>No athletes found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default AthletesSearch;



const athletesData = [
  {
    id: 1,
    full_name: "Imranur Rahman",
    photo_url: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    image: imranur_rahman,
    team: "Falcons",
    gender: "male",
    athlete_category: "professional",
    bio: "A dedicated athlete specializing in 100m sprints and relay races.",
    preferred_events: ["100 Meter Sprint", "4x100 Meter Relay"],
    achievements: ["Gold Medal - 100m Sprint 2023", "Silver Medal - 200m 2022"],
    registration_date: "2021-03-15T00:00:00Z",
  },
  {
    id: 2,
    full_name: "Mohammad Ismail Hossain",
    photo_url: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
    image: ismail_hossain,
    team: "Eagles",
    gender: "female",
    athlete_category: "junior",
    bio: "Focused on long-distance running and cross-country events.",
    preferred_events: ["100 Meter Sprint", "4x100 Meter Relay", "Long Jump"],
    achievements: ["Bronze - City Marathon 2022"],
    registration_date: "2020-06-10T00:00:00Z",
  },
  {
    id: 3,
    full_name: "Shirin Akter",
    photo_url: "https://images.unsplash.com/photo-1612902376975-6d3c7c68d9b8",
    image: shirin_akter,
    team: "Tigers",
    gender: "male",
    athlete_category: "amateur",
    bio: "A passionate footballer and sprinter representing his local club.",
    preferred_events: ["100 Meter Sprint", "200 Meter Sprint", "4x100 Meter Relay", "4x400 Meter Relay"],
    achievements: ["District Football Champion 2023"],
    registration_date: "2022-08-01T00:00:00Z",
  },
  {
    id: 4,
    full_name: "Sumaya Dewan",
    photo_url: "https://images.unsplash.com/photo-1614284828631-83baf9932f60",
    image: sumaya_dewan,
    team: "Panthers",
    gender: "female",
    athlete_category: "professional",
    bio: "Specializes in gymnastics with national-level achievements.",
    preferred_events: ["100 Meter Sprint", "200 Meter Sprint", "4x100 Meter Relay", "4x400 Meter Relay"],
    achievements: ["Gold - National Gymnastics 2023"],
    registration_date: "2021-11-10T00:00:00Z",
  },
  {
    id: 5,
    full_name: "Abdul Motalab",
    photo_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    image: abdul_motalab,
    team: "Warriors",
    gender: "male",
    athlete_category: "junior",
    bio: "Up-and-coming basketball player known for quick reflexes.",
    preferred_events: ["100 Meter Sprint", "200 Meter Sprint", "4x100 Meter Relay", "4x400 Meter Relay"],
    achievements: ["MVP - Junior League 2022"],
    registration_date: "2022-02-20T00:00:00Z",
  },
  {
    id: 6,
    full_name: "Jahir Rayhan",
    photo_url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    image: jahir_rahman,
    team: "Lions",
    gender: "female",
    athlete_category: "amateur",
    bio: "An enthusiastic swimmer with a focus on freestyle and butterfly events.",
    preferred_events: ["100 Meter Sprint", "200 Meter Sprint", "4x100 Meter Relay", "4x400 Meter Relay"],
    achievements: ["Gold - City Swim Meet 2023"],
    registration_date: "2021-09-05T00:00:00Z",
  },
  {
    id: 7,
    full_name: "Mahfuzur Rahman",
    photo_url: "https://images.unsplash.com/photo-1612902377183-5ec87dfb19a3",
    image: mahfuzur_rahman,
    team: "Sharks",
    gender: "male",
    athlete_category: "professional",
    bio: "A competitive swimmer representing his state in multiple championships.",
    preferred_events: ["High Jump"],
    achievements: ["Silver - State Championship 2023"],
    registration_date: "2019-12-12T00:00:00Z",
  },
  {
    id: 8,
    full_name: "Md. Rakibul Hasan",
    photo_url: "https://images.unsplash.com/photo-1590080875831-25bdb2f3f3dd",
    image: rakibul_hasan,
    team: "Falcons",
    gender: "female",
    athlete_category: "junior",
    bio: "Young and passionate table tennis player with a sharp backhand.",
    preferred_events: ["100 Meter Sprint", "200 Meter Sprint", "4x100 Meter Relay", "4x400 Meter Relay"],
    achievements: ["Runner-up - Inter School Championship 2023"],
    registration_date: "2023-01-22T00:00:00Z",
  },
  {
    id: 9,
    full_name: "Most Ritu Akter",
    photo_url: "https://images.unsplash.com/photo-1620240731644-57bba900bde6",
    image: ritu_akter,
    team: "Eagles",
    gender: "male",
    athlete_category: "professional",
    bio: "Track and field athlete specializing in hurdles and high jump.",
    preferred_events: ["High Jump"],
    achievements: ["Gold - Regional Athletics Meet 2023"],
    registration_date: "2020-08-10T00:00:00Z",
  },
  {
    id: 10,
    full_name: "Najimul Hossain Roni",
    photo_url: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    image: najimul_hossain,
    team: "Panthers",
    gender: "female",
    athlete_category: "amateur",
    bio: "Yoga and pilates trainer competing in local fitness events.",
    preferred_events: ["100 Meter Sprint", "200 Meter Sprint", "4x100 Meter Relay", "4x400 Meter Relay"],
    achievements: ["1st Place - City Wellness Contest 2022"],
    registration_date: "2022-05-14T00:00:00Z",
  },
];
