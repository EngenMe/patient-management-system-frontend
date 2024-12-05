/* eslint-disable react-hooks/rules-of-hooks */
import { format, isSameDay } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Control } from 'react-hook-form';
import { NewPatient } from '@/interfaces/NewPatient.interface';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useState, useEffect } from 'react';

const currentDate = new Date();
const defaultMinDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());
const defaultMaxDate = currentDate;

interface Props {
    control: Control<NewPatient, unknown>;
    name: keyof NewPatient;
    label: string;
    minDate?: Date;
    maxDate?: Date;
}

const DatePicker = ({ control, name, label, minDate = defaultMinDate, maxDate = defaultMaxDate }: Props) => {
    const months = [
        { value: 0, label: 'January' },
        { value: 1, label: 'February' },
        { value: 2, label: 'March' },
        { value: 3, label: 'April' },
        { value: 4, label: 'May' },
        { value: 5, label: 'June' },
        { value: 6, label: 'July' },
        { value: 7, label: 'August' },
        { value: 8, label: 'September' },
        { value: 9, label: 'October' },
        { value: 10, label: 'November' },
        { value: 11, label: 'December' },
    ];

    const years = Array.from({ length: 101 }, (_, i) => currentDate.getFullYear() - i);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => {
                const [selectedDate, setSelectedDate] = useState<Date | null>(field.value as Date);
                const [month, setMonth] = useState<number>(
                    field.value ? (field.value as Date).getMonth() : currentDate.getMonth()
                );
                const [year, setYear] = useState<number>(
                    field.value ? (field.value as Date).getFullYear() : currentDate.getFullYear()
                );

                useEffect(() => {
                    if (field.value) {
                        setSelectedDate(field.value as Date);
                        setMonth((field.value as Date).getMonth());
                        setYear((field.value as Date).getFullYear());
                    } else {
                        setSelectedDate(null);
                        setMonth(currentDate.getMonth());
                        setYear(currentDate.getFullYear());
                    }
                }, [field.value]);

                return (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel className="font-medium text-sm text-muted-foreground">{label}</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={'outline'}
                                        className={cn(
                                            'pl-11 flex justify-start h-12 w-full rounded-[8px] border border-border bg-input px-4',
                                            !selectedDate && 'text-muted-foreground'
                                        )}
                                    >
                                        <CalendarIcon className="h-4 w-4 opacity-50" />
                                        {selectedDate && !isSameDay(selectedDate, new Date()) ? (
                                            format(selectedDate, 'P')
                                        ) : (
                                            <span className="text-accent-foreground">Pick a date</span>
                                        )}
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-input rounded-xl" align="start">
                                <div className="flex items-center justify-between mb-2 gap-3 p-2">
                                    {/* Month Selector */}
                                    <Select
                                        value={month.toString()}
                                        onValueChange={(value) => {
                                            const newMonth = Number(value);
                                            setMonth(newMonth);
                                        }}
                                    >
                                        <SelectTrigger className="w-[60%] rounded-[5px]">
                                            <SelectValue placeholder="Month" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {months.map((m) => (
                                                <SelectItem key={m.value} value={m.value.toString()}>
                                                    {m.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {/* Year Selector */}
                                    <Select
                                        value={year.toString()}
                                        onValueChange={(value) => {
                                            const newYear = Number(value);
                                            setYear(newYear);
                                        }}
                                    >
                                        <SelectTrigger className="w-[40%] rounded-[5px]">
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {years.map((y) => (
                                                <SelectItem key={y} value={y.toString()}>
                                                    {y}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Calendar
                                    mode="single"
                                    selected={selectedDate as Date}
                                    onSelect={(date) => {
                                        setSelectedDate(date as Date);
                                        field.onChange(date);
                                    }}
                                    disabled={(date) => date > maxDate || date < minDate}
                                    month={new Date(year, month)}
                                    onMonthChange={(newMonth) => {
                                        setMonth(newMonth.getMonth());
                                        setYear(newMonth.getFullYear());
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
};
export default DatePicker;
