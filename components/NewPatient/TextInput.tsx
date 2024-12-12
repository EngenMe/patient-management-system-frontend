import { Control, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HTMLInputTypeAttribute } from 'react';

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder: string;
    icon?: LucideIcon;
    type?: HTMLInputTypeAttribute;
    isWrongField?: boolean;
    invalidInputFieldMessage?: string;
}

const TextInput = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    icon: Icon,
    type = 'text',
    isWrongField = false,
    invalidInputFieldMessage = 'Invalid input fields',
}: Props<T>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                    <FormLabel className="font-medium text-sm text-muted-foreground">{label}</FormLabel>
                    <FormControl>
                        <div className="relative flex flex-col items-center justify-center w-full">
                            {Icon && (
                                <div className="absolute left-4">
                                    <Icon size={18} className="text-accent-foreground" />
                                </div>
                            )}
                            <Input
                                type={type}
                                placeholder={placeholder}
                                {...field}
                                value={typeof field.value === 'string' ? field.value : ''}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    field.onChange(newValue);
                                }}
                                className={cn(
                                    'flex h-12 w-full rounded-[8px] border  bg-input px-4 text-base text-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                                    Icon && 'pl-11',
                                    isWrongField ? 'border-destructive' : 'border-border'
                                )}
                            />
                        </div>
                    </FormControl>
                    {isWrongField && <FormMessage>{invalidInputFieldMessage}</FormMessage>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
export default TextInput;
