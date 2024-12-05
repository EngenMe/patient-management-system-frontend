import { NewPatient } from '@/interfaces/NewPatient.interface';
import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Check, ChevronDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { ComboBoxItem } from '@/interfaces/ComboBoxItem.interface';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface Props {
    form: UseFormReturn<NewPatient, unknown>;
    name: keyof NewPatient;
    label: string;
    data: ComboBoxItem[];
    placeholder: string;
    searchPlaceholder: string;
}

const ComboBox = ({ form, name, label, data, placeholder, searchPlaceholder }: Props) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                    <FormLabel className="font-medium text-sm text-muted-foreground">{label}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        'flex justify-between h-12 w-full rounded-[8px] border border-border bg-input px-4',
                                        !field.value && 'text-accent-foreground'
                                    )}
                                >
                                    {field.value
                                        ? data.find((item) => item.value === field.value) && (
                                              <div className="flex items-center w-auto h-8 rounded-[5px] border p-3 gap-[6px] font-semibold text-xs leading-[18px] text-foreground bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00]">
                                                  {data.find((item) => item.value === field.value)?.picturePath && (
                                                      <Avatar className="w-6 h-6">
                                                          <AvatarImage
                                                              src={
                                                                  data.find((item) => item.value === field.value)
                                                                      ?.picturePath
                                                              }
                                                              alt={
                                                                  data.find((item) => item.value === field.value)?.value
                                                              }
                                                          />
                                                          <AvatarFallback>CN</AvatarFallback>
                                                      </Avatar>
                                                  )}
                                                  {data.find((item) => item.value === field.value)?.label}
                                              </div>
                                          )
                                        : placeholder}
                                    <ChevronDown className="text-[#B6F09C]" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full bg-input rounded-xl">
                            <Command className="bg-input">
                                <CommandInput placeholder={searchPlaceholder} />
                                <CommandList>
                                    <CommandEmpty>Empty</CommandEmpty>
                                    <CommandGroup>
                                        {data.map((item) => (
                                            <CommandItem
                                                value={item.label}
                                                key={item.value}
                                                onSelect={() => {
                                                    form.setValue(name, item.value);
                                                }}
                                                className={cn(
                                                    field.value === item.value &&
                                                        'bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00]',
                                                    'font-semibold text-base gap-4 my-2 rounded-xl'
                                                )}
                                            >
                                                {item.picturePath && (
                                                    <Avatar className="w-8 h-8">
                                                        <AvatarImage src={item.picturePath} alt={item.label} />
                                                        <AvatarFallback></AvatarFallback>
                                                    </Avatar>
                                                )}
                                                {item.label}
                                                <Check
                                                    className={cn(
                                                        'ml-auto text-primary',
                                                        field.value === item.value ? 'opacity-100' : 'opacity-0'
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
export default ComboBox;
