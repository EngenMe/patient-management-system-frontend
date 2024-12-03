import { Dispatch, SetStateAction } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Check, ChevronDown, LucideIcon } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ComboBoxItem } from '@/interfaces/ComboBoxItem.interface';

interface Props {
    selectedItem: string | null;
    setSelectedItem: Dispatch<SetStateAction<string | null>>;
    icon: LucideIcon;
    placeholder: string;
    searchPlaceholder: string;
    items: ComboBoxItem[];
}

const ComboBox = ({ selectedItem, setSelectedItem, icon: Icon, placeholder, searchPlaceholder, items }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            <label className="font-medium text-sm text-muted-foreground">Primary Care Physician</label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={!!selectedItem}
                        className="w-full justify-between flex h-12 rounded-[8px] border border-border bg-input px-4 text-base text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <div>
                            {selectedItem ? (
                                <div className="flex items-center w-auto h-8 rounded-[5px] border p-3 gap-[6px] font-semibold text-xs leading-[18px] text-foreground bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00]">
                                    <Avatar className="w-6 h-6">
                                        <AvatarImage
                                            src={items.find((item) => item.value === selectedItem)?.picturePath}
                                            alt={items.find((item) => item.value === selectedItem)?.value}
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    {items.find((item) => item.value === selectedItem)?.label}
                                </div>
                            ) : (
                                <div className="flex items-center w-full gap-3">
                                    <Icon className="text-accent-foreground" />
                                    {placeholder}
                                </div>
                            )}
                        </div>
                        <ChevronDown className="opacity-50 text-[#B6F09C]" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full bg-input rounded-xl">
                    <Command className="bg-input">
                        <CommandInput placeholder={searchPlaceholder} />
                        <CommandList>
                            <CommandEmpty>No physician found.</CommandEmpty>
                            <CommandGroup>
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={(currentValue) => {
                                            setSelectedItem(currentValue === selectedItem ? '' : currentValue);
                                        }}
                                        className={cn(
                                            selectedItem === item.value &&
                                                'bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00]',
                                            'font-semibold text-base gap-4 my-2 rounded-xl'
                                        )}
                                    >
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage src={item.picturePath} alt={item.label} />
                                            <AvatarFallback>Dr</AvatarFallback>
                                        </Avatar>
                                        {item.label}
                                        <Check
                                            className={cn(
                                                'ml-auto text-primary',
                                                selectedItem === item.value ? 'opacity-100' : 'opacity-0'
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};
export default ComboBox;
