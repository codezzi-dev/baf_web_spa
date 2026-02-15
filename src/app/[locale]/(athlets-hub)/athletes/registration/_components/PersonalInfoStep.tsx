"use client";
import { useFormContext } from "react-hook-form";
import { User, Users, Mail, Phone, Calendar, Building } from "lucide-react";

import { FormInputField, FormSelectField } from "./FormFields";
import { FormData } from "./FormSchema";
import { MdLineWeight, MdWaterDrop } from "react-icons/md";
import { BsGenderAmbiguous } from "react-icons/bs";
import { HeightInputField } from "./HeightInputField";
import { useGetAllInstitutes } from "@/api/hooks/key-value/Institutes.hook";
import { KeyValueType } from "@/api/types/common/key-value.type";
import { useEffect, useState } from "react";

const genderOptions = [
  { id: "male", value: "Male" },
  { id: "female", value: "Female" },
  { id: "other", value: "Other" },
];
const bloodGroupOptions = [
  { id: "A+", value: "A+" },
  { id: "A-", value: "A-" },
  { id: "B+", value: "B+" },
  { id: "B-", value: "B-" },
  { id: "AB+", value: "AB+" },
  { id: "AB-", value: "AB-" },
  { id: "O+", value: "O+" },
  { id: "O-", value: "O-" },
];

export function PersonalInfoStep() {
  const { control } = useFormContext<FormData>();
  const { data: institutes, isLoading: institutesLoading, error: institutesError } = useGetAllInstitutes();
  const [instituteOptions, setInstituteOptions] = useState<KeyValueType[]>([]);
  useEffect(() => {
    setInstituteOptions(institutes?.data ?? []);
  }, [institutes]);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
        <div className="p-2 bg-emerald-100 rounded-lg">
          <User className="text-emerald-600" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>
          <p className="text-sm text-slate-500">Basic details about the athlete</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <FormInputField
            control={control}
            name="athleteFullName"
            label="Full Name"
            icon={User}
            placeholder="Enter athlete's full name"
            required
          />
        </div>
        <FormInputField
          control={control}
          name="athleteFatherName"
          label="Father's Name"
          icon={Users}
          placeholder="Enter father's name"
          required
        />
        <FormInputField
          control={control}
          name="athleteMotherName"
          label="Mother's Name"
          icon={Users}
          placeholder="Enter mother's name"
          required
        />
        <FormInputField
          control={control}
          name="athleteEmail"
          label="Email Address"
          icon={Mail}
          type="email"
          placeholder="athlete@example.com"
          required
        />
        <FormInputField
          control={control}
          name="athleteContactNo"
          label="Contact Number"
          icon={Phone}
          type="tel"
          placeholder="+880 1XXX-XXXXXX"
          required
        />
        <FormInputField
          control={control}
          name="athleteAlternateContactNo"
          label="Alternate Contact"
          icon={Phone}
          type="tel"
          placeholder="+880 1XXX-XXXXXX"
        />
        <FormInputField
          control={control}
          name="athleteDob"
          label="Date of Birth"
          icon={Calendar}
          type="date"
          required
        />
        <FormSelectField
          control={control}
          name="athleteGender"
          label="Gender"
          icon={BsGenderAmbiguous}
          options={genderOptions}
          placeholder="Select gender"
          required
        />
        <HeightInputField
          control={control}
          name="athleteHeight"
          label="Height (ft in)"
          required
        />
        <FormInputField
          control={control}
          name="athleteWeight"
          type="number"
          label="Weight (kg)"
          icon={MdLineWeight}
          placeholder="Enter weight"
          required
        />
        <FormSelectField
          control={control}
          name="athleteBloodGroup"
          label="Blood Group"
          icon={MdWaterDrop}
          options={bloodGroupOptions}
          placeholder="Select blood group"
          required
        />
        <FormSelectField
          control={control}
          name="instituteId"
          label="Institute"
          icon={Building}
          options={instituteOptions.map((item) => {
            console.log(item);
            return ({
              id: item.key ?? 0,
              value: item.value ?? "",
            })
          })}
          isLoading={institutesLoading}
          disabled={institutesLoading || !!institutesError}
          placeholder={institutesError ? "Error loading institutes" : "Select institute"}
        />
      </div>
    </div>
  );
}
