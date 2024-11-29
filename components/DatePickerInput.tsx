import { Button } from './ui/button';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as DatePickerCalendar } from './ui/calendar';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Dispatch, SetStateAction, useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { FieldErrors } from 'react-hook-form';
import { NewPatientPageFormData } from '@/interfaces/NewPatientPageFormData.interface';

interface Props {
    selectedDate: Date | undefined;
    setSelectedDate: Dispatch<SetStateAction<Date | undefined>>;
    minDate: Date;
    maxDate: Date;
    errors: FieldErrors<NewPatientPageFormData>;
    placeholder: string;
}

const DatePickerInput = ({ selectedDate, setSelectedDate, minDate, maxDate, errors, placeholder }: Props) => {
    const [month, setMonth] = useState<number>(selectedDate ? selectedDate.getMonth() : new Date().getMonth());
    const [year, setYear] = useState<number>(selectedDate ? selectedDate.getFullYear() : new Date().getFullYear());

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

    const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);

    const displayedMonth = new Date(year, month);

    return (
        <div>
            <div className="flex flex-col gap-4">
                <Label className="font-medium text-sm text-muted-foreground">Date of Birth</Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                selectedDate ? 'text-foreground' : 'text-accent-foreground',
                                'flex h-12 w-full rounded-[8px] border border-border bg-input px-3 text-base justify-start'
                            )}
                        >
                            <Calendar size={18} className="mr-2" />
                            {selectedDate ? format(selectedDate, 'MM/dd/yyyy') : placeholder}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="bg-input rounded-xl">
                        <div className="flex items-center justify-between mb-2 gap-3">
                            {/* Month Selector */}
                            <Select value={month.toString()} onValueChange={(value) => setMonth(Number(value))}>
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
                            <Select value={year.toString()} onValueChange={(value) => setYear(Number(value))}>
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
                        <DatePickerCalendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            month={displayedMonth}
                            onMonthChange={(date) => {
                                setMonth(date.getMonth());
                                setYear(date.getFullYear());
                            }}
                            fromDate={minDate}
                            toDate={maxDate}
                            initialFocus
                            className="justify-self-center"
                        />
                    </PopoverContent>
                </Popover>
            </div>
            {errors.fullName?.message && (
                <p className="text-destructive text-sm mt-1">{String(errors.fullName.message)}</p>
            )}
        </div>
    );
};
export default DatePickerInput;
