import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Control, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder: string;
}

const MultiLineTextInput = <T extends FieldValues>({ control, name, label, placeholder }: Props<T>) => {
    const isDate = (value: unknown): value is Date => value instanceof Date;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                    <FormLabel className="font-medium text-sm text-muted-foreground">{label}</FormLabel>
                    <FormControl>
                        <Textarea
                            placeholder={placeholder}
                            {...field}
                            value={isDate(field.value) ? field.value.toISOString() : field.value || ''}
                            className="flex h-12 w-full rounded-[8px] border border-border bg-input px-4 text-base text-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
export default MultiLineTextInput;
