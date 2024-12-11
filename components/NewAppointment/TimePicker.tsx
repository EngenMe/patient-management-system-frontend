import { Control, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Timer } from 'lucide-react';

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    disabled: boolean;
}

// Generate times in 15-minute intervals between 09:00 and 17:00
const times = Array.from({ length: 32 }, (_, i) => {
    const hours = Math.floor(i / 4) + 9; // Start at 09:00
    const minutes = (i % 4) * 15;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
});

const TimePicker = <T extends FieldValues>({ control, name, label, disabled }: Props<T>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                    <FormLabel className="font-medium text-sm text-muted-foreground">{label}</FormLabel>
                    <FormControl>
                        <Select
                            disabled={disabled}
                            value={field.value || ''}
                            onValueChange={(value) => {
                                field.onChange(value);
                            }}
                        >
                            <SelectTrigger className="flex items-center justify-left w-full h-12 rounded-[8px] border border-border bg-input">
                                <div className="flex gap-2">
                                    <Timer size={18} className="text-accent-foreground" />
                                    <SelectValue placeholder="Select a time" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="bg-input rounded-xl">
                                <div className="grid grid-cols-4 gap-2 p-2">
                                    {times.map((time) => (
                                        <SelectItem key={time} value={time} className="hover:rounded-xl">
                                            {time}
                                        </SelectItem>
                                    ))}
                                </div>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default TimePicker;
