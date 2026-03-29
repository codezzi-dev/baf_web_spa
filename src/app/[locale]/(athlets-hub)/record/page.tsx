"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Trophy, Award, Globe, Medal, Calendar, MapPin, Target, History, Crown, Video } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";
import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import { useGetRecords } from "@/api/hooks/athletes/records.hook";



const recordTypeIcons = {
  national: Trophy,
  international: Globe,
};

export default function AthleticsRecordsPage() {
  const trecords = useTranslations("records");
  const [selectedRecordType, setSelectedRecordType] = useState("national");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const ALL_DISCIPLINES = `${trecords("all")} ${trecords("discipline")}`;
  const [selectedDiscipline, setSelectedDiscipline] = useState(ALL_DISCIPLINES);

  const DISCIPLINES = [
    `${trecords("all")} ${trecords("discipline")}`,
    "100m Sprint",
    "200m Sprint",
    "400m Sprint",
    "800m Run",
    "1500m Run",
    "Long Jump",
    "High Jump",
    "Javelin Throw",
    "Discus Throw",
    "Marathon",
  ];

  const { data: apiResponse, error, isLoading } = useGetRecords();
  if (isLoading) {
    return <Loading />;
  }
  if (error || !apiResponse) {
    return <Error />;
  }

  const allRecords = apiResponse.data ?? [];
  console.log(allRecords)
  // Filter dummy records
  const records = allRecords.filter((record) => {
    const matchesType = record.athleteRecordType?.toLowerCase() === selectedRecordType.toLowerCase();
    const matchesCategory = selectedCategory === "all" || record.athleteRecordCategory?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesGender = selectedGender === "all" || record.athleteGender?.toLowerCase() === selectedGender.toLowerCase();
    const matchesDiscipline = selectedDiscipline === ALL_DISCIPLINES || record.disciplineName === selectedDiscipline;

    return matchesType && matchesCategory && matchesGender && matchesDiscipline;
  });

  const groupedRecords = records.reduce<Record<string, typeof records>>((acc, record) => {
    if (!acc[record.disciplineName]) acc[record.disciplineName] = [];
    acc[record.disciplineName].push(record);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F3] to-white py-12 px-4 pt-32 md:pt-40">
      <div className="main_container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg mb-8 border border-[#D4AF37]/20">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
              Record Breakers
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#2D3436] mb-6 leading-tight">
            Athletics{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">Records</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            National and international records by Bangladeshi athletes
          </p>
        </div>

        {/* Filters */}
        <Card className="border-none shadow-2xl mb-8">
          <CardContent className="p-2 md:p-8">
            <div className="space-y-6">
              {/* Record Type */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#D4AF37]" />
                  {trecords("record-type")}
                </label>
                <Tabs value={selectedRecordType} onValueChange={setSelectedRecordType}>
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-xl">
                    <TabsTrigger value="national">
                      <Trophy className="w-4 h-4 mr-2 hidden md:block" />
                      {trecords("national")}
                    </TabsTrigger>
                    <TabsTrigger value="international">
                      <Globe className="w-4 h-4 mr-2 hidden md:block" />
                      {trecords("international")}
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Category, Gender, Discipline */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{trecords("category")}</label>
                  <Tabs value={selectedCategory} onValueChange={(val) => {
                    setSelectedCategory(val);
                    // reset gender to matching label when switching category
                    setSelectedGender(selectedGender);
                  }}>
                    <TabsList className="grid w-full grid-cols-4 bg-gray-100 rounded-xl">
                      <TabsTrigger value="all">{trecords("all")}</TabsTrigger>
                      <TabsTrigger value="senior">{trecords("senior")}</TabsTrigger>
                      <TabsTrigger value="u-18">{trecords("under-18")}</TabsTrigger>
                      <TabsTrigger value="u-16">{trecords("under-16")}</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{trecords("gender")}</label>
                  <Tabs value={selectedGender} onValueChange={setSelectedGender}>
                    <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-xl">
                      <TabsTrigger value="all">
                        {trecords("all")}
                      </TabsTrigger>
                      <TabsTrigger value="Male">
                        {selectedCategory === "senior" || selectedCategory === "all"
                          ? trecords("men")
                          : selectedCategory === "u-16"
                            ? trecords("u16-boys")
                            : trecords("u18-boys")}
                      </TabsTrigger>
                      <TabsTrigger value="Female">
                        {selectedCategory === "senior" || selectedCategory === "all"
                          ? trecords("women")
                          : selectedCategory === "u-16"
                            ? trecords("u16-girls")
                            : trecords("u18-girls")}
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Discipline */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{trecords("discipline")}</label>
                  <Select value={selectedDiscipline} onValueChange={setSelectedDiscipline}>
                    <SelectTrigger className="!h-11 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {DISCIPLINES.map((discipline) => (
                        <SelectItem key={discipline} value={discipline}>
                          {discipline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Records List */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border-none shadow-lg animate-pulse">
                <CardContent className="p-8">
                  <div className="h-40 bg-gray-200 rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : records.length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedRecords).map(([discipline, disciplineRecords]) => (
              <div key={discipline}>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-[#00704A]" />
                  <h2 className="text-3xl font-bold text-[#2D3436]">{discipline}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {disciplineRecords.map((record, index) => {
                    console.log("record", record)
                    const RecordIcon = recordTypeIcons[record.athleteRecordType?.toLowerCase() as keyof typeof recordTypeIcons] ?? Trophy;
                    const currentYear = new Date().getFullYear();
                    const recordYear = new Date(record.athleteRecordYear).getFullYear();
                    const yearsStanding = currentYear - recordYear;

                    return (
                      <Card
                        key={index}
                        className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                      >
                        {/* Header */}
                        <div className="h-32 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] relative overflow-hidden">
                          {record.disciplineName && (
                            <>
                              <img
                                src={record.athleteFullName}
                                alt={record.athleteFullName}
                                className="w-full h-full object-cover opacity-40"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </>
                          )}

                          <div className="absolute inset-0 flex items-center justify-between px-6">
                            <div>
                              <Badge
                                variant="outline"
                                className="bg-white/20 backdrop-blur-sm text-white border-none mb-2"
                              >
                                {record.athleteRecordType.replace("_", " ").toUpperCase()} RECORD
                              </Badge>
                              <h3 className="text-2xl font-bold text-white">{record.athleteRecordValue}</h3>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                              <RecordIcon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-6 space-y-4">
                          <div>
                            <h4 className="text-2xl font-bold text-[#2D3436] mb-1">{record.athleteFullName}</h4>
                            <p className="text-gray-600">{record.disciplineName}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-[#00704A]" />
                              <div>
                                <div className="text-xs text-gray-500">Year</div>
                                <div className="font-semibold">{record.athleteRecordYear}</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="w-4 h-4 text-[#C1272D]" />
                              <div>
                                <div className="text-xs text-gray-500">Venue</div>
                                <div className="font-semibold line-clamp-1">{record.athleteRecordVenue}</div>
                              </div>
                            </div>
                          </div>

                          {yearsStanding >= 1 && (
                            <div className="bg-[#D4AF37]/10 rounded-xl p-4 border border-[#D4AF37]/20">
                              <div className="flex items-center gap-2">
                                <History className="w-5 h-5 text-[#D4AF37]" />
                                <span className="text-sm font-semibold text-[#2D3436]">
                                  Record standing for{" "}
                                  <span className="text-[#D4AF37]">
                                    {yearsStanding} {yearsStanding === 1 ? "year" : "years"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          )}

                          {record.athleteEarlierRecords && (
                            <div className="pt-4 border-t border-gray-100">
                              <div className="text-xs text-gray-500 mb-1">Previous Record</div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-gray-700">{record.athleteFullName}</span>
                                <span className="text-sm font-bold text-gray-600">{record.athleteRecordValue}</span>
                              </div>
                            </div>
                          )}

                          {/* {record.video_url && (
                            <button
                              onClick={() => window.open(record.video_url, "_blank")}
                              className="w-full mt-4 bg-gradient-to-r from-[#00704A] to-[#005239] hover:from-[#005239] hover:to-[#00704A] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                            >
                              <Video className="w-5 h-5" />
                              Watch Performance
                            </button>
                          )} */}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Card className="border-none shadow-lg">
            <CardContent className="p-16 text-center">
              <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-2">No records found</p>
              <p className="text-sm text-gray-500">Try adjusting your filters</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
