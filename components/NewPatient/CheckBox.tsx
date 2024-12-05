import { Control } from 'react-hook-form';
import { Checkbox } from '../ui/checkbox';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { NewPatient } from '@/interfaces/NewPatient.interface';

interface Props {
    control: Control<NewPatient, unknown>;
    name: keyof NewPatient;
    label: string;
}

const CheckBox = ({ control, name, label }: Props) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className="flex items-center gap-[14px]">
                        <FormControl>
                            <Checkbox
                                checked={!!field.value}
                                onCheckedChange={field.onChange}
                                className="w-6 h-6 rounded border-border bg-input"
                            />
                        </FormControl>
                        <FormLabel className="text-lg leading-[25px] text-muted-foreground">{label}</FormLabel>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
export default CheckBox;
