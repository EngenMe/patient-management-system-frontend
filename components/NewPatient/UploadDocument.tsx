// In UploadDocument.tsx
import { NewPatient } from '@/interfaces/NewPatient.interface';
import { newPatientFormSchema } from '@/schemas/newPatientFormSchema';
import { CloudUpload } from 'lucide-react';
import { Controller, Control } from 'react-hook-form';
import { z } from 'zod';

interface Props {
    control: Control<z.infer<typeof newPatientFormSchema>>;
    name: keyof NewPatient;
}

const UploadDocument = ({ control, name }: Props) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={undefined}
            render={({ field, fieldState }) => (
                <div className="flex flex-col gap-4">
                    <label className="font-medium text-sm text-muted-foreground">Identification Document</label>
                    <div
                        className={`relative gap-3 flex flex-col items-center justify-center w-full border border-dashed rounded-[8px] bg-input py-5 px-6 text-center ${
                            fieldState.error ? 'border-red-500' : 'border-border'
                        }`}
                        id="fileUpload"
                    >
                        {field.value ? (
                            <div className="flex flex-col justify-center items-center gap-2">
                                <div className="w-10 h-10 bg-[#2D3136] rounded-full flex justify-center items-center">
                                    <CloudUpload size={18} className="text-primary" />
                                </div>
                                {field.value instanceof File ? (
                                    <p className="text-sm text-primary/60 font-semibold mt-2">{field.value.name}</p>
                                ) : (
                                    <p className="text-sm text-muted-foreground mt-2">No file selected</p>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="w-10 h-10 bg-[#2D3136] rounded-full flex justify-center items-center">
                                    <CloudUpload size={18} className="text-primary" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm text-muted-foreground">
                                        <span className="text-primary font-semibold">Click to upload</span> or drag and
                                        drop
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Supported formats: SVG, PNG, JPG, GIF
                                    </p>
                                </div>
                            </div>
                        )}
                        <input
                            type="file"
                            accept=".svg,.png,.jpg,.jpeg,.gif"
                            className="absolute inset-0 w-full h-[134px] opacity-0 cursor-pointer"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                field.onChange(file);
                            }}
                        />
                    </div>
                    {fieldState.error && <p className="text-sm text-red-500">{fieldState.error.message}</p>}
                </div>
            )}
        />
    );
};

export default UploadDocument;
