"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  ShieldCheck,
  Globe,
  MapPin,
  FileText,
  ClipboardCheck,
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";
import { FormData, formSchema, stepFieldGroups } from "./_components/FormSchema";

import { PersonalInfoStep } from "./_components/PersonalInfoStep";
import { IdentityVerificationStep } from "./_components/IdentityVerificationStep";
import { BengaliDetailsStep } from "./_components/BengaliDetailsStep";
import { AddressesStep } from "./_components/AddressStep";
import { DocumentsStep } from "./_components/DocumentsStep";
import { ReviewStep } from "./_components/ReviewStep";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/Button"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useRegisterAthlete } from "@/api/services/athletes/online-registration.api";
import { CreateAthleteRequest } from "@/api/schemas/athletes/online-registration.schema";
import { ApiResponse } from "@/api/types/common/api-response.type";

const steps = [
  { id: 0, title: "Personal Info", icon: User },
  { id: 1, title: "Identity", icon: ShieldCheck },
  { id: 2, title: "Bengali Details", icon: Globe },
  { id: 3, title: "Addresses", icon: MapPin },
  { id: 4, title: "Documents", icon: FileText },
  { id: 5, title: "Review", icon: ClipboardCheck },
];

const AthleteRegistrationForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [declaration, setDeclaration] = useState({
    infoAccurate: false,
    termsAccepted: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState<ApiResponse<any> | null>(null);
  const { mutate, isPending, isError, error } = useRegisterAthlete();

  // Add this transformer function before the component

  const transformFormDataToRequest = (data: FormData): CreateAthleteRequest => {
    // Split full name into first and last name
    const nameParts = data.athleteFullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Map string IDs to integers (Assumed mapping based on common patterns, to be verified)
    const identityTypeMap: Record<string, number> = {
      "nid": 1,
      "passport": 2,
      "driving_license": 3,
      "birth_certificate": 4
    };

    return {
      athleteGenData: {
        athleteFirstName: firstName,
        athleteLastName: lastName,
        athleteFatherName: data.athleteFatherName,
        athleteMotherName: data.athleteMotherName,
        athleteEmail: data.athleteEmail,
        athleteContactNo: data.athleteContactNo,
        athleteDob: new Date(data.athleteDob)
          .toISOString()
          .split("T")[0],
        athleteGender: data.athleteGender as "M" | "F" | "O",
        athleteAlternateContactNo: data.athleteAlternateContactNo || undefined,
        athleteHeight: Number(data.athleteHeight),
        athleteWeight: Number(data.athleteWeight),
        athleteBloodGroup: data.athleteBloodGroup,
        athleteIdentityType: identityTypeMap[data.identifierType] || 0,
        athleteIdentificationNumber: data.identifierNumber,
        instituteId: data.instituteId ? Number(data.instituteId) : 0,
      },
      athleteIdentityData: {
        athleteIdentityDocRelatedId: data.identifierNumber,
        athleteIdentityDocsUrl: [], // TEMPORARY FIX: Sending empty array to avoid schema error until file upload is solved
        athleteIdentityDocCategoryId: identityTypeMap[data.identifierType] || 0,
      },
      athleteCoreDataInBengali: {
        athleteFullNameInBengali: data.athleteFullNameInBengali,
        athleteFatherNameInBengali: data.athleteFatherNameInBengali,
        athleteMotherNameInBengali: data.athleteMotherNameInBengali,
      },
      athleteAddresses: data.addresses.map((addr) => ({
        athleteAddressDistrictId: Number(addr.athleteAddressDistrictId),
        athleteAddressSubDistrictId: Number(addr.athleteAddressSubDistrictId),
        athleteAddressPostalCode: Number(addr.athleteAddressPostalCode),
        athleteAddressArea: addr.athleteAddressArea,
        athleteAddressType: getAddressTypeId(addr.athleteAddressType),
      })),
      athleteDocuments: data.documents
        .filter((doc) => doc.athleteDocPhysicalPathUrl) // Only include docs with URLs (files will be filtered out)
        .map((doc) => ({
          athleteDocName: doc.athleteDocName,
          athleteDocRelatedId: doc.athleteDocRelatedId,
          athleteDocPhysicalPathUrl: doc.athleteDocPhysicalPathUrl,
          docCategoryId: Number(doc.docCategoryId),
        })),
    };
  };

  // Helper to convert address type string to number
  const getAddressTypeId = (type: string): number => {
    const typeMap: Record<string, number> = {
      "Present Address": 1,
      "Permanent Address": 2,
    };
    return typeMap[type] || 1;
  };
  const methods = useForm<FormData>({
    shouldUnregister: false,
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      athleteFullName: "",
      athleteFatherName: "",
      athleteMotherName: "",
      athleteEmail: "",
      athleteContactNo: "",
      athleteDob: "",
      athleteGender: "",
      athleteAlternateContactNo: "",
      athleteHeight: "",
      athleteWeight: "",
      athleteBloodGroup: "",
      instituteId: "",
      identifierType: "",
      identifierNumber: "",
      identifierImages: [],
      athleteFullNameInBengali: "",
      athleteFatherNameInBengali: "",
      athleteMotherNameInBengali: "",
      addresses: [
        {
          id: 1,
          athleteAddressDistrictId: "",
          athleteAddressSubDistrictId: "",
          athleteAddressPostalCode: "",
          athleteAddressArea: "",
          athleteAddressType: "Present Address",
        },
        {
          id: 2,
          athleteAddressDistrictId: "",
          athleteAddressSubDistrictId: "",
          athleteAddressPostalCode: "",
          athleteAddressArea: "",
          athleteAddressType: "Permanent Address",
        },
      ],
      documents: [
        {
          id: 1,
          athleteDocName: "",
          athleteDocRelatedId: "",
          athleteDocPhysicalPathUrl: "",
          docCategoryId: "",
        },
      ],
    },
  });

  const {
    formState: { errors, isValid },
  } = methods;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep />;
      case 1:
        return <IdentityVerificationStep />;
      case 2:
        return <BengaliDetailsStep />;
      case 3:
        return <AddressesStep />;
      case 4:
        return <DocumentsStep />;
      case 5:
        return <ReviewStep onEdit={setCurrentStep} />;
      default:
        return null;
    }
  };

  const onSubmit = async (data: FormData) => {
    if (currentStep === 5 && declaration.infoAccurate && declaration.termsAccepted) {
      const requestData = transformFormDataToRequest(data);

      mutate(requestData, {
        onSuccess: (response) => {
          console.log("Registration successful:", response);
          toast.success("Registration submitted successfully!");
          setApiResponse(response);
          setSubmitted(true);
        },
        onError: (error) => {
          console.error("Registration failed:", error);
          toast.error(error.message || "Registration failed. Please try again.");
        },
      });
    }
  };




  const canProceed = Object.keys(errors).length === 0 && isValid;
  const [isStepLoading, setIsStepLoading] = useState(false);

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setIsStepLoading(true);

      const isValid = await methods.trigger(stepFieldGroups[currentStep]);

      // 🚨 Extra check ONLY for Identity step
      if (currentStep === 1) {
        const identifierError = methods.formState.errors.identifierNumber;
        if (identifierError) {
          setIsStepLoading(false);
          toast.error("Please fix identity number error before proceeding.");
          return;
        }
      }

      setIsStepLoading(false);

      if (!isValid) {
        toast.error("Please fill all required fields for this step.");
        return;
      }

      setCurrentStep((prev) => prev + 1);
    }
  };


  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  //   if (Object.keys(errors).length > 0) {
  //     toast.error("Something is wrong...");
  //   }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
              <Check className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Application Submitted!</h2>
            <p className="text-slate-600">
              Thank you for submitting your athlete registration. We will review your application and contact you soon.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-slate-600 ">
                Email ID: <span className="font-bold">{apiResponse?.data?.userId}</span>
              </p>
              <p className="text-slate-600 ">
                Password: <span className="font-bold">{apiResponse?.data?.password}</span>
              </p>
            </div>
            <Button
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(0);
                methods.reset();
              }}
              variant="default"
              className="w-full"
            >
              Start New Application
            </Button>
            <Button
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(0);
                methods.reset();

                router.push("/");
              }}
              variant="default"
              className="w-full"
            >
              Goto Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Athlete Registration</h1>
          <p className="text-lg text-slate-600">Complete your registration in 6 simple steps</p>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  <button
                    onClick={() => setCurrentStep(index)}
                    className={`flex flex-col items-center focus:outline-none transition-all`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${isActive
                        ? "bg-blue-500 text-white ring-4 ring-blue-200"
                        : isCompleted
                          ? "bg-green-500 text-white"
                          : "bg-slate-200 text-slate-400"
                        }`}
                    >
                      {isCompleted ? <Check size={20} /> : <StepIcon size={20} />}
                    </div>
                    <span
                      className={`text-xs font-medium text-center ${isActive ? "text-blue-600" : isCompleted ? "text-green-600" : "text-slate-500"
                        }`}
                    >
                      {step.title}
                    </span>
                  </button>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded-full transition-all ${isCompleted ? "bg-green-500" : "bg-slate-200"
                        }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
              {renderStep()}

              {/* Declaration Checkboxes - only show on review step */}
              {currentStep === 5 && (
                <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
                  <h4 className="font-semibold text-slate-800">Declaration</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="accurate"
                        checked={declaration.infoAccurate}
                        onCheckedChange={(checked) =>
                          setDeclaration((prev) => ({ ...prev, infoAccurate: checked as boolean }))
                        }
                        className="mt-1"
                      />
                      <label htmlFor="accurate" className="text-sm text-slate-700 cursor-pointer">
                        I declare that all the information provided is accurate and truthful.
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={declaration.termsAccepted}
                        onCheckedChange={(checked) =>
                          setDeclaration((prev) => ({ ...prev, termsAccepted: checked as boolean }))
                        }
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-slate-700 cursor-pointer">
                        I agree to the terms and conditions of athlete registration.
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              <Button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="default"
                className="flex items-center gap-2 bg-transparent"
              >
                <ChevronLeft size={18} />
                Previous
              </Button>

              <div className="text-sm text-slate-600">
                Step {currentStep + 1} of {steps.length}
              </div>
              {currentStep === 5 ?
                (<Button
                  type="submit"
                  onClick={handleNext}
                  disabled={isStepLoading || !declaration.infoAccurate || !declaration.termsAccepted}
                  className="flex items-center gap-2"
                  variant="default"
                >
                  <>
                    <Check size={18} />
                    Submit
                  </>
                </Button>) : (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={isStepLoading}
                    className="flex items-center gap-2"
                    variant="default"
                  >
                    <>
                      Next
                      <ChevronRight size={18} />
                    </>
                  </Button>)
              }

            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AthleteRegistrationForm;
