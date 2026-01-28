"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
import { MapPin, Plus, Trash2, AlertCircle } from "lucide-react";
import type { FormData } from "./FormSchema";
import { FormInputField, FormSelectField } from "./FormFields";
import React, { useEffect, useState } from "react";
import { httpGet } from "@/lib/axios/helpers";
import { GET_DISTRICTS_URL } from "@/lib/axios/URLs";
import { Checkbox } from "./Checkbox";

const districts = [
  { id: "1", value: "Dhaka" },
  { id: "2", value: "Chittagong" },
  { id: "3", value: "Rajshahi" },
  { id: "4", value: "Khulna" },
  { id: "5", value: "Sylhet" },
];

const subDistricts = [
  { id: "1", value: "Mirpur" },
  { id: "2", value: "Gulshan" },
  { id: "3", value: "Dhanmondi" },
  { id: "4", value: "Uttara" },
];

// const addressTypes = [
//   { id: "present", value: "Present Address" },
//   { id: "permanent", value: "Permanent Address" },
// ];


export function AddressesStep() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  // const addNewAddress = () => {
  //   append({
  //     id: Date.now(),
  //     athleteAddressDistrictId: "",
  //     athleteAddressSubDistrictId: "",
  //     athleteAddressPostalCode: "",
  //     athleteAddressArea: "",
  //     athleteAddressType: "present",
  //     athleteAddressType: fields.length === 0 ? "present" : "permanent",
  //   } as any);
  // };

  const getDistrictData = async () => {
    const res = await httpGet(GET_DISTRICTS_URL);

    console.log(res);
  };

  useEffect(() => {
    getDistrictData();
  }, []);

  const { watch, setValue } = useFormContext();
  const [sameAsPresent, setSameAsPresent] = useState(false);
  // Present address values
  const presentAddress = watch("addresses.0");

  const handleCopyAddress = () => {
    const newValue = !sameAsPresent;
    setSameAsPresent(newValue);

    if (newValue) {
      setValue(
        "addresses.1.athleteAddressDistrictId",
        presentAddress.athleteAddressDistrictId
      );
      setValue(
        "addresses.1.athleteAddressSubDistrictId",
        presentAddress.athleteAddressSubDistrictId
      );
      setValue(
        "addresses.1.athleteAddressPostalCode",
        presentAddress.athleteAddressPostalCode
      );
      setValue(
        "addresses.1.athleteAddressArea",
        presentAddress.athleteAddressArea
      );
    } else {
      // Optional: uncheck করলে permanent address clear
      setValue("addresses.1.athleteAddressDistrictId", "");
      setValue("addresses.1.athleteAddressSubDistrictId", "");
      setValue("addresses.1.athleteAddressPostalCode", "");
      setValue("addresses.1.athleteAddressArea", "");
    }
  };

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

      {/* <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={handleCopyAddress}
      >
        <Checkbox
          checked={sameAsPresent}
          onCheckedChange={() => {}}
        />
        <span className="text-sm">
          Permanent address same as present address
        </span>
      </div> */}

      <div className="space-y-6">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="p-6 border border-slate-200 rounded-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-slate-800">
                {index === 0 && "Present Address"}
                {index === 1 && "Permanent Address"}
              </h4>

              {/* {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                  Remove
                </button>
              )} */}
            </div>

            <React.Fragment>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <FormSelectField
                control={control}
                name={`addresses.${index}.athleteAddressType` as const}
                label="Address Type"
                options={index === 0 ? presentAddress : permanentAddress}
                placeholder="Select address type"
                required
              /> */}

                <FormInputField
                  control={control}
                  name={`addresses.${index}.athleteAddressType` as const}
                  label="Address Type"
                  placeholder="Enter postal code"
                  required
                  disabled
                />

                <FormSelectField
                  control={control}
                  name={`addresses.${index}.athleteAddressDistrictId` as const}
                  label="District"
                  options={districts}
                  placeholder="Select district"
                  required
                />
                <FormSelectField
                  control={control}
                  name={
                    `addresses.${index}.athleteAddressSubDistrictId` as const
                  }
                  label="Sub-District"
                  options={subDistricts}
                  placeholder="Select sub-district"
                  required
                />
                <FormInputField
                  control={control}
                  name={`addresses.${index}.athleteAddressPostalCode` as const}
                  label="Postal Code"
                  placeholder="Enter postal code"
                  required
                />
                <div className="md:col-span-2">
                  <FormInputField
                    control={control}
                    name={`addresses.${index}.athleteAddressArea` as const}
                    label="Area/Street Address"
                    placeholder="Enter complete address"
                    required
                  />
                </div>
              </div>
              {/* Middle Button */}
              {index === 0 && (
                <div
                  className="flex items-center justify-end gap-3 cursor-pointer mt-2 "
                  onClick={handleCopyAddress}
                >
                  <Checkbox
                    checked={sameAsPresent}
                    onCheckedChange={() => {}}
                  />
                  <span className="text-sm">
                    Permanent address same as present address
                  </span>
                </div>
              )}
            </React.Fragment>
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

      {/* <Button type="button" onClick={addNewAddress} variant="default" className="w-full bg-transparent">
        <Plus size={18} />
        Add Another Address
      </Button> */}
    </div>
  );
}
