"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
import { MapPin, AlertCircle } from "lucide-react";
import type { FormData } from "./FormSchema";
import { FormInputField, FormSelectField } from "./FormFields";
import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { Checkbox } from "./Checkbox";
import { useGetAllDistricts, useGetAllSubDistricts } from "@/api/hooks/key-value/location.hook";

export function AddressesStep() {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormData>();

  const { fields } = useFieldArray({
    control,
    name: "addresses",
  });

  const [sameAsPresent, setSameAsPresent] = useState(false);
  const isCopyingRef = useRef(false);
  const prevPresentDistrictRef = useRef<string | null>(null);
  const prevPermanentDistrictRef = useRef<string | null>(null);

  // Watch values
  const presentDistrictId = watch("addresses.0.athleteAddressDistrictId");
  const permanentDistrictId = watch("addresses.1.athleteAddressDistrictId");
  const presentAddress = watch("addresses.0");

  // Fetch data
  const { data: districts, isLoading: districtsLoading } = useGetAllDistricts();
  const { data: presentSubDistricts, isLoading: presentSubDistrictsLoading } =
    useGetAllSubDistricts(presentDistrictId || "");
  const { data: permanentSubDistricts, isLoading: permanentSubDistrictsLoading } =
    useGetAllSubDistricts(permanentDistrictId || "");

  // Memoized options
  const districtOptions = useMemo(() => {
    return districts?.data?.map((item) => ({
      id: String(item.key ?? ""),
      value: item.value ?? "",
    })) ?? [];
  }, [districts]);

  const presentSubDistrictOptions = useMemo(() => {
    return presentSubDistricts?.data?.map((item) => ({
      id: String(item.key ?? ""),
      value: item.value ?? "",
    })) ?? [];
  }, [presentSubDistricts]);

  const permanentSubDistrictOptions = useMemo(() => {
    return permanentSubDistricts?.data?.map((item) => ({
      id: String(item.key ?? ""),
      value: item.value ?? "",
    })) ?? [];
  }, [permanentSubDistricts]);

  // Reset PRESENT sub-district only when district actually changes (not on initial render)
  useEffect(() => {
    if (isCopyingRef.current) return;

    // Only reset if district actually changed (not initial mount)
    if (prevPresentDistrictRef.current !== null &&
      prevPresentDistrictRef.current !== presentDistrictId) {
      setValue("addresses.0.athleteAddressSubDistrictId", "");
    }
    prevPresentDistrictRef.current = presentDistrictId;
  }, [presentDistrictId, setValue]);

  // Reset PERMANENT sub-district only when district actually changes
  useEffect(() => {
    if (isCopyingRef.current || sameAsPresent) return;

    if (prevPermanentDistrictRef.current !== null &&
      prevPermanentDistrictRef.current !== permanentDistrictId) {
      setValue("addresses.1.athleteAddressSubDistrictId", "");
    }
    prevPermanentDistrictRef.current = permanentDistrictId;
  }, [permanentDistrictId, setValue, sameAsPresent]);

  // Copy function with string coercion
  const copyPresentToPermanent = useCallback(() => {
    isCopyingRef.current = true;

    setValue("addresses.1.athleteAddressDistrictId", String(presentAddress.athleteAddressDistrictId || ""));
    setValue("addresses.1.athleteAddressSubDistrictId", String(presentAddress.athleteAddressSubDistrictId || ""));
    setValue("addresses.1.athleteAddressPostalCode", String(presentAddress.athleteAddressPostalCode || ""));
    setValue("addresses.1.athleteAddressArea", presentAddress.athleteAddressArea || "");

    // Use setTimeout to ensure React has processed updates
    setTimeout(() => {
      isCopyingRef.current = false;
    }, 100);
  }, [presentAddress, setValue]);

  // Handle checkbox toggle
  const handleCopyAddress = () => {
    const newValue = !sameAsPresent;
    setSameAsPresent(newValue);

    if (newValue) {
      copyPresentToPermanent();
    } else {
      // Clear permanent address
      setValue("addresses.1.athleteAddressDistrictId", "");
      setValue("addresses.1.athleteAddressSubDistrictId", "");
      setValue("addresses.1.athleteAddressPostalCode", "");
      setValue("addresses.1.athleteAddressArea", "");
    }
  };

  // Sync when present address changes (if checkbox is checked)
  useEffect(() => {
    if (sameAsPresent && !isCopyingRef.current) {
      copyPresentToPermanent();
    }
  }, [
    sameAsPresent,
    presentAddress.athleteAddressDistrictId,
    presentAddress.athleteAddressSubDistrictId,
    presentAddress.athleteAddressPostalCode,
    presentAddress.athleteAddressArea,
    copyPresentToPermanent,
  ]);

  // Get sub-district options - use present options when same address
  const getSubDistrictOptions = useCallback((index: number) => {
    if (index === 1 && sameAsPresent) {
      return presentSubDistrictOptions;
    }
    return index === 0 ? presentSubDistrictOptions : permanentSubDistrictOptions;
  }, [sameAsPresent, presentSubDistrictOptions, permanentSubDistrictOptions]);

  const getSubDistrictLoading = useCallback((index: number) => {
    if (index === 1 && sameAsPresent) {
      return presentSubDistrictsLoading;
    }
    return index === 0 ? presentSubDistrictsLoading : permanentSubDistrictsLoading;
  }, [sameAsPresent, presentSubDistrictsLoading, permanentSubDistrictsLoading]);


  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
        <div className="p-2 bg-blue-100 rounded-lg">
          <MapPin className="text-blue-600" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Addresses</h3>
          <p className="text-sm text-slate-500">
            Add residential and permanent addresses
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="p-6 border border-slate-200 rounded-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-slate-800">
                {index === 0 ? "Present Address" : "Permanent Address"}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInputField
                control={control}
                name={`addresses.${index}.athleteAddressType` as const}
                label="Address Type"
                placeholder="Address type"
                required
                disabled
              />

              <FormSelectField
                control={control}
                name={`addresses.${index}.athleteAddressDistrictId` as const}
                label="District"
                options={districtOptions}
                placeholder={districtsLoading ? "Loading..." : "Select district"}
                required
                disabled={index === 1 && sameAsPresent}
              />

              <FormSelectField
                control={control}
                name={`addresses.${index}.athleteAddressSubDistrictId` as const}
                label="Sub-District"
                options={getSubDistrictOptions(index)}
                placeholder={
                  getSubDistrictLoading(index)
                    ? "Loading..."
                    : "Select sub-district"
                }
                required
                disabled={index === 1 && sameAsPresent}
              />

              <FormInputField
                control={control}
                name={`addresses.${index}.athleteAddressPostalCode` as const}
                label="Postal Code"
                placeholder="Enter postal code"
                required
                disabled={index === 1 && sameAsPresent}
              />

              <div className="md:col-span-2">
                <FormInputField
                  control={control}
                  name={`addresses.${index}.athleteAddressArea` as const}
                  label="Area/Street Address"
                  placeholder="Enter complete address"
                  required
                  disabled={index === 1 && sameAsPresent}
                />
              </div>
            </div>

            {index === 0 && (
              <div
                className="flex items-center justify-end gap-3 cursor-pointer mt-2"
                onClick={handleCopyAddress}
              >
                <Checkbox
                  checked={sameAsPresent}
                  onCheckedChange={handleCopyAddress}
                />
                <span className="text-sm">
                  Permanent address same as present address
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {errors.addresses && (
        <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-lg">
          <AlertCircle className="text-rose-600" size={18} />
          <span className="text-sm text-rose-700">
            {errors.addresses.message}
          </span>
        </div>
      )}
    </div>
  );
}