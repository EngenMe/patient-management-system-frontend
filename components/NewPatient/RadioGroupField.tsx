import { NewPatient } from '@/interfaces/NewPatient.interface';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Control } from 'react-hook-form';
import { RadioItem } from '@/interfaces/RadioItem.interface';

interface Props {
    control: Control<NewPatient, unknown>;
    name: keyof NewPatient;
    label: string;
    radioItems: RadioItem[];
}

const RadioGroupField = ({ control, name, label, radioItems }: Props) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel className="font-medium text-sm text-muted-foreground">{label}</FormLabel>
                    <FormControl>
                        <RadioGroup onValueChange={field.onChange} className="flex items-center gap-4">
                            {radioItems.map((item, index) => (
                                <FormItem
                                    key={index}
                                    className="w-1/2 h-12 rounded-[5px] border border-dashed py-3 px-4 flex items-center gap-3 border-border bg-input"
                                >
                                    <FormControl>
                                        <RadioGroupItem value={item.value} className="h-5 w-5 border-border" />
                                    </FormControl>
                                    <FormLabel className="font-medium text-base text-[#cdcecf] -translate-y-1/4">
                                        {item.label}
                                    </FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
export default RadioGroupField;
