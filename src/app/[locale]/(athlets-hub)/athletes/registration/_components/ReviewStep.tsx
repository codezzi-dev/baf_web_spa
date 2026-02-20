"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { ClipboardCheck, Edit3 } from "lucide-react";
import type { FormData } from "./FormSchema";
import { useGetAllDistricts, useGetAllSubDistricts } from "@/api/hooks/key-value/location.hook";
import { useMemo } from "react";
import type { KeyValueType } from "@/api/types/common/key-value.type";
import { useGetAllInstitutes } from "@/api/hooks/key-value/Institutes.hook";

interface ReviewStepProps {
  onEdit: (stepIndex: number) => void;
}

export function ReviewStep({ onEdit }: ReviewStepProps) {
  const { watch } = useFormContext<FormData>();
  const formData = watch();

  // Fetch shared data
  const { data: institutes } = useGetAllInstitutes();
  const { data: districts } = useGetAllDistricts();

  // Fetch sub-districts for BOTH addresses
  const presentDistrictId = formData.addresses?.[0]?.athleteAddressDistrictId || "";
  const permanentDistrictId = formData.addresses?.[1]?.athleteAddressDistrictId || "";

  const { data: presentSubDistricts } = useGetAllSubDistricts(presentDistrictId);
  const { data: permanentSubDistricts } = useGetAllSubDistricts(permanentDistrictId);

  // Helper to get district name
  const getDistrictName = useMemo(() => {
    return (districtId: string) => {
      return districts?.data?.find(
        (d: KeyValueType) => String(d.key) === String(districtId)
      )?.value || "—";
    };
  }, [districts]);

  // Helper to get sub-district name based on address index
  const getSubDistrictName = useMemo(() => {
    return (addressIndex: number, subDistrictId: string) => {
      const subDistrictData = addressIndex === 0 ? presentSubDistricts : permanentSubDistricts;
      return subDistrictData?.data?.find(
        (s: KeyValueType) => String(s.key) === String(subDistrictId)
      )?.value || "—";
    };
  }, [presentSubDistricts, permanentSubDistricts]);

  // Get institute name
  const instituteName = useMemo(() => {
    return institutes?.data?.find(
      (i: KeyValueType) => String(i.key) === String(formData.instituteId)
    )?.value;
  }, [institutes, formData.instituteId]);

  const ReviewItem = ({ label, value }: { label: string; value: string | React.ReactNode }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500 font-medium">{label}</span>
      <span className="text-sm text-slate-800 mt-1 sm:mt-0">{value || "—"}</span>
    </div>
  );

  const ReviewSection = ({
    title,
    icon: Icon,
    stepIndex,
    children,
  }: {
    title: string;
    icon: React.ElementType;
    stepIndex: number;
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Icon className="text-slate-600" size={20} />
          <h4 className="font-semibold text-slate-800">{title}</h4>
        </div>
        <button
          type="button"
          onClick={() => onEdit(stepIndex)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Edit3 size={14} />
          Edit
        </button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );

  const getFeetAndInches = (cm: number) => {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet} feet ${inches} inches`;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
        <div className="p-2 bg-green-100 rounded-lg">
          <ClipboardCheck className="text-green-600" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Review Information</h3>
          <p className="text-sm text-slate-500">Review all details before submission</p>
        </div>
      </div>

      <ReviewSection title="Personal Information" icon={ClipboardCheck} stepIndex={0}>
        <ReviewItem label="Full Name" value={formData.athleteFullName} />
        <ReviewItem label="Father's Name" value={formData.athleteFatherName} />
        <ReviewItem label="Mother's Name" value={formData.athleteMotherName} />
        <ReviewItem label="Email" value={formData.athleteEmail} />
        <ReviewItem label="Contact Number" value={formData.athleteContactNo} />
        <ReviewItem label="Gender" value={formData.athleteGender} />
        <ReviewItem label="Height" value={`${formData.athleteHeight} cm / ${getFeetAndInches(formData.athleteHeight as number || 0)}`} />
        <ReviewItem label="Weight" value={`${formData.athleteWeight} kg`} />
        <ReviewItem label="Blood Group" value={formData.athleteBloodGroup} />
        <ReviewItem label="Date of Birth" value={formData.athleteDob} />
        <ReviewItem label="Institute" value={instituteName} />
      </ReviewSection>

      <ReviewSection title="Identity Verification" icon={ClipboardCheck} stepIndex={1}>
        <ReviewItem label="Identifier Type" value={formData.identifierType} />
        <ReviewItem label="ID Number" value={formData.identifierNumber} />
        <ReviewItem label="Images Uploaded" value={`${formData.identifierImages?.length || 0} file(s)`} />
      </ReviewSection>

      <ReviewSection title="Bengali Details" icon={ClipboardCheck} stepIndex={2}>
        <ReviewItem label="Full Name (Bengali)" value={formData.athleteFullNameInBengali} />
        <ReviewItem label="Father's Name (Bengali)" value={formData.athleteFatherNameInBengali} />
        <ReviewItem label="Mother's Name (Bengali)" value={formData.athleteMotherNameInBengali} />
      </ReviewSection>

      <ReviewSection title="Addresses" icon={ClipboardCheck} stepIndex={3}>
        {formData.addresses?.map((addr, idx) => (
          <div key={idx} className="mb-4 pb-4 border-b border-slate-100 last:border-0 last:mb-0 last:pb-0">
            <ReviewItem label={`Address ${idx + 1} Type`} value={addr.athleteAddressType} />
            {/* ✅ Use helper functions instead of useMemo inside map */}
            <ReviewItem label="District" value={getDistrictName(addr.athleteAddressDistrictId)} />
            <ReviewItem label="Sub-District" value={getSubDistrictName(idx, addr.athleteAddressSubDistrictId)} />
            <ReviewItem label="Postal Code" value={addr.athleteAddressPostalCode} />
            <ReviewItem label="Area" value={addr.athleteAddressArea} />
          </div>
        ))}
      </ReviewSection>

      <ReviewSection title="Documents" icon={ClipboardCheck} stepIndex={4}>
        {formData.documents?.map((doc, idx) => (
          <div key={idx} className="mb-4 pb-4 border-b border-slate-100 last:border-0 last:mb-0 last:pb-0">
            <ReviewItem label={`Document ${idx + 1} Category`} value={doc.docCategoryId} />
            <ReviewItem label="Document Name" value={doc.athleteDocName} />
            <ReviewItem label="Document ID" value={doc.athleteDocRelatedId} />
            <ReviewItem label="File" value={<img className="w-10 h-10 border border-slate-200 rounded-lg" src={doc.athleteDocPhysicalPathUrl}></img>} />
          </div>
        ))}
      </ReviewSection>
    </div>
  );
}