import { NewPatientPageFormData } from '@/interfaces/NewPatientPageFormData.interface';
import { newPatientPageFormSchema } from '@/schemas/newPatientPageFormSchema';
import { usePatientStore } from '@/store/patientStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from './InputField';
import { BriefcaseBusiness, Mail, MapPin, Phone, Stethoscope, UserRound } from 'lucide-react';
import Header2 from './Header2';
import { useEffect, useState } from 'react';
import DatePickerInput from './DatePickerInput';
import { subYears } from 'date-fns';
import ComboGroup from './RadioGroup';
import ComboBox from './ComboBox';
import { ComboBoxItem } from '@/interfaces/ComboBoxItem.interface';
import { fetchDoctors } from '@/utils/fetchDoctors';

const NewPatientPageForm = () => {
    const patientData = usePatientStore((state) => state.patientData);
    const { fullName, email, phone } = patientData;

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
    const [doctors, setDoctors] = useState<ComboBoxItem[]>([]);

    useEffect(() => {
        fetchDoctors(setDoctors);
    }, []);

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
                <div className="pb-4">
                    <Header2>Personal Information</Header2>
                </div>
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
                        errors={errors}
                        placeholder="Select your birthdate"
                    />
                    {/* Gender Selection */}
                    <ComboGroup register={register} errors={errors} />
                    {/* Address */}
                    <div>
                        <Input
                            id="address"
                            type="text"
                            placeholder="1234 Elm Street"
                            icon={MapPin}
                            label="Address"
                            {...register('address')}
                        />
                        {errors.address?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.address.message)}</p>
                        )}
                    </div>
                    {/* Occupation */}
                    <div>
                        <Input
                            id="occupation"
                            type="text"
                            placeholder="Software Engineer"
                            icon={BriefcaseBusiness}
                            label="Occupation"
                            {...register('occupation')}
                        />
                        {errors.address?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.address.message)}</p>
                        )}
                    </div>
                    {/* Emergency contact name */}
                    <div>
                        <Input
                            id="emergencyContactName"
                            type="text"
                            placeholder="Jane Smith"
                            icon={UserRound}
                            label="Emergency Contact Name"
                            {...register('emergencyContactName')}
                        />
                        {errors.fullName?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.fullName.message)}</p>
                        )}
                    </div>
                    {/* Emergency contact number */}
                    <div>
                        <Input
                            id="emergencyContactPhone"
                            type="Phone number"
                            placeholder="089 765 4321"
                            icon={Phone}
                            label="Emergency Contact Phone"
                            {...register('emergencyContactPhone')}
                        />
                        {errors.phone?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.phone.message)}</p>
                        )}
                    </div>
                </div>
                <div className="pt-5 pb-4">
                    <Header2>Medical Information</Header2>
                </div>
                {/* Primary care physician */}
                <div>
                    <ComboBox
                        selectedItem={selectedDoctor}
                        setSelectedItem={setSelectedDoctor}
                        icon={Stethoscope}
                        placeholder="Select physician"
                        searchPlaceholder="Search physician"
                        items={doctors}
                    />
                    {errors.primaryCarePhysicianName?.message && (
                        <p className="text-destructive text-sm mt-1">
                            {String(errors.primaryCarePhysicianName?.message)}
                        </p>
                    )}
                </div>
            </form>
        </section>
    );
};
export default NewPatientPageForm;
