import { useEffect, useState } from "react";
import { Control, useController } from "react-hook-form";
import { MdHeight } from "react-icons/md";

interface HeightInputFieldProps {
    control: Control<any>;
    name: string;
    label?: string;
    required?: boolean;
}

export const HeightInputField = ({
    control,
    name,
    label = "Height",
    required = false,
}: HeightInputFieldProps) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, control });

    const totalCm = field.value || 0;
    const totalInches = totalCm / 2.54;

    const [feet, setFeet] = useState<string>(
        totalCm ? Math.floor(totalInches / 12).toString() : ""
    );
    const [inches, setInches] = useState<string>(
        totalCm ? Math.round(totalInches % 12).toString() : ""
    );

    useEffect(() => {
        const ft = parseInt(feet) || 0;
        const inc = parseInt(inches) || 0;

        if (feet || inches) {
            const totalInches = ft * 12 + inc;
            const cm = Math.round(totalInches * 2.54);
            field.onChange(cm);
        } else {
            field.onChange(undefined);
        }
    }, [feet, inches]);

    return (
        <div className=" flex flex-col gap-2 ">
            <label className="text-sm font-medium text-slate-700">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-xl bg-slate-100 hover:bg-white focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
                <MdHeight className="text-slate-400" size={20} />

                <div className="flex items-center gap-2 flex-1">
                    <input
                        type="number"
                        min="0"
                        max="8"
                        value={feet}
                        onChange={(e) => setFeet(e.target.value)}
                        placeholder="0"
                        className="w-1/2 px-2 py-1 text-center border-b border-slate-200 focus:border-blue-500 outline-none bg-transparent"
                    />
                    <span className="text-slate-500 text-sm">ft</span>

                    <input
                        type="number"
                        min="0"
                        max="11"
                        value={inches}
                        onChange={(e) => setInches(e.target.value)}
                        placeholder="0"
                        className="w-1/2 px-2 py-1 text-center border-b border-slate-200 focus:border-blue-500 outline-none bg-transparent"
                    />
                    <span className="text-slate-500 text-sm">in</span>
                </div>
            </div>

            {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
        </div>
    );
};