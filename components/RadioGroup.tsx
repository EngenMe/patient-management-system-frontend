import { NewPatientPageFormData } from '@/interfaces/NewPatientPageFormData.interface';
import { UseFormRegister } from 'react-hook-form';

interface Props {
    register: UseFormRegister<NewPatientPageFormData>;
}

const ComboGroup = ({ register }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            <label className="font-medium text-sm text-muted-foreground">Gender</label>
            <div className="flex items-center gap-4">
                <label className="w-1/2 h-12 rounded-[5px] border border-dashed py-3 px-4 flex items-center gap-2 border-border bg-input">
                    <input type="radio" value="Male" className="h-5 w-5" {...register('gender')} />
                    <span className="font-medium text-base text-[#cdcecf]">Male</span>
                </label>
                <label className="w-1/2 h-12 rounded-[5px] border border-dashed py-3 px-4 flex items-center gap-2 border-border bg-input">
                    <input type="radio" value="Female" className="h-5 w-5" {...register('gender')} />
                    <span className="font-medium text-base text-[#cdcecf]">Female</span>
                </label>
            </div>
        </div>
    );
};
export default ComboGroup;
