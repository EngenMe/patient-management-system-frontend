import { NewPatientPageFormData } from '@/interfaces/NewPatientPageFormData.interface';
import { newPatientPageFormSchema } from '@/schemas/newPatientPageFormSchema';
import { usePatientStore } from '@/store/patientStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from './InputField';
import { Mail, Phone, UserRound } from 'lucide-react';
import Header2 from './Header2';
import { useState } from 'react';
import DatePickerInput from './DatePickerInput';
import { subYears } from 'date-fns';
import ComboGroup from './ComboGroup';

const NewPatientPageForm = () => {
    const patientData = usePatientStore((state) => state.patientData);
    const { fullName, email, phone } = patientData;

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewPatientPageFormData>({
        resolver: zodResolver(newPatientPageFormSchema),
    });

    const onSubmit: SubmitHandler<NewPatientPageFormData> = (data: NewPatientPageFormData) => {
        console.log({ ...data, dateOfBirth: selectedDate });
    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 pt-[84px]">
                <Header2>Personal Information</Header2>
                {/* Full Name */}
                <div>
                    <Input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        icon={UserRound}
                        label="Full name"
                        defaultValue={fullName}
                        {...register('fullName')}
                    />
                    {errors.fullName?.message && (
                        <p className="text-destructive text-sm mt-1">{String(errors.fullName.message)}</p>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john_doe@gmail.com"
                            icon={Mail}
                            label="Email address"
                            defaultValue={email}
                            {...register('email')}
                        />
                        {errors.email?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.email.message)}</p>
                        )}
                    </div>
                    {/* Phone */}
                    <div>
                        <Input
                            id="phone"
                            type="Phone number"
                            placeholder="089 765 4321"
                            icon={Phone}
                            label="Phone number"
                            defaultValue={phone}
                            {...register('phone')}
                        />
                        {errors.phone?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.phone.message)}</p>
                        )}
                    </div>
                    {/* Date Picker */}
                    <DatePickerInput
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        minDate={subYears(new Date(), 100)}
                        maxDate={new Date()}
                    />
                    {/* Gender Selection */}
                    <ComboGroup register={register} errors={errors} />
                </div>
            </form>
        </section>
    );
};
export default NewPatientPageForm;
