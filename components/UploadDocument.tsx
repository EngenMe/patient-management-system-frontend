import { NewPatientPageFormData } from '@/interfaces/NewPatientPageFormData.interface';
import { CloudUpload } from 'lucide-react';
import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

interface Props {
    setValue: UseFormSetValue<NewPatientPageFormData>;
}

const UploadDocument = ({ setValue }: Props) => {
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedFileName(file.name);
            setValue('imageDocument', file.name);
        } else {
            setUploadedFileName(null);
            setValue('imageDocument', '');
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <label className="font-medium text-sm text-muted-foreground">Scanned Copy of Identification Document</label>
            <div
                className="relative gap-3 flex flex-col items-center justify-center w-full border border-dashed border-border rounded-[8px] bg-input py-5 px-6 text-center"
                id="fileUpload"
            >
                {uploadedFileName ? (
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-10 h-10 bg-[#2D3136] rounded-full flex justify-center items-center">
                            <CloudUpload size={18} className="text-primary" />
                        </div>
                        <p className="text-sm text-primary/60 font-semibold mt-2">{uploadedFileName}</p>
                    </div>
                ) : (
                    <>
                        <div className="w-10 h-10 bg-[#2D3136] rounded-full flex justify-center items-center">
                            <CloudUpload size={18} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mb-2">
                                <span className="text-primary font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-sm text-muted-foreground">SVG, PNG, JPG, or GIF (max. 800x400px)</p>
                        </div>
                    </>
                )}
                <input
                    type="file"
                    id="uploadDocument"
                    accept=".svg,.png,.jpg,.jpeg,.gif"
                    className="absolute inset-0 w-full h-[134px] opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
};

export default UploadDocument;
