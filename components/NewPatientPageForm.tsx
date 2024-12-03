import { NewPatientPageFormData } from '@/interfaces/NewPatientPageFormData.interface';
import { newPatientPageFormSchema } from '@/schemas/newPatientPageFormSchema';
import { usePatientStore } from '@/store/patientStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from './InputField';
import { BriefcaseBusiness, IdCard, Mail, MapPin, Phone, Stethoscope, UserRound } from 'lucide-react';
import Header2 from './Header2';
import { useEffect, useState } from 'react';
import DatePickerInput from './DatePickerInput';
import { subYears } from 'date-fns';
import ComboGroup from './RadioGroup';
import ComboBox from './ComboBox';
import { ComboBoxItem } from '@/interfaces/ComboBoxItem.interface';
import { fetchDoctors } from '@/utils/fetchDoctors';
import { Textarea } from './MultilineInputField';
import { fetchIdTypes } from '@/utils/fetchIdTypes';
import UploadDocument from './UploadDocument';

const NewPatientPageForm = () => {
    const patientData = usePatientStore((state) => state.patientData);
    const { fullName, email, phone } = patientData;

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
    const [doctors, setDoctors] = useState<ComboBoxItem[]>([]);

    const [selectedIdType, setSelectedIdType] = useState<string | null>(null);
    const [idTypes, setIdTypes] = useState<ComboBoxItem[]>([]);

    useEffect(() => {
        fetchDoctors(setDoctors);
        fetchIdTypes(setIdTypes);
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
                        {...register('primaryCarePhysicianName')}
                    />
                    {errors.primaryCarePhysicianName?.message && (
                        <p className="text-destructive text-sm mt-1">
                            {String(errors.primaryCarePhysicianName.message)}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {/* Medical Card Number */}
                    <div>
                        <Input
                            id="medicalCardNumber"
                            type="text"
                            placeholder="0123456 A"
                            icon={IdCard}
                            label="Medical Card Number"
                            {...register('medicalCardNumber')}
                        />
                        {errors.medicalCardNumber?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.medicalCardNumber.message)}</p>
                        )}
                    </div>
                    {/* PPS Number */}
                    <div>
                        <Input
                            id="ppsNumber"
                            type="text"
                            placeholder="0123456AA"
                            icon={IdCard}
                            label="PPS Number"
                            {...register('ppsNumber')}
                        />
                        {errors.ppsNumber?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.ppsNumber.message)}</p>
                        )}
                    </div>
                    {/* GP Name */}
                    <div>
                        <Input
                            id="gpName"
                            type="text"
                            placeholder="Dr. Michael Bennett"
                            icon={Stethoscope}
                            label="GP Name"
                            {...register('gpName')}
                        />
                        {errors.gpName?.message && (
                            <p className="text-destructive text-sm mt-1">{String(errors.gpName.message)}</p>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {/* Allergies */}
                    <div>
                        <Textarea
                            label="Allergies"
                            id="allergies"
                            placeholder="Peanuts, Penicillin, Pollen"
                            {...register('allergies')}
                        />
                    </div>
                    {/* Current Medications */}
                    <div>
                        <Textarea
                            label="Current Medications"
                            id="currentMedications"
                            placeholder="Ibuprofen 200mg, Levothyroxine 50mcg"
                            {...register('currentMedications')}
                        />
                    </div>
                    {/* Family Medical History */}
                    <div>
                        <Textarea
                            label="Family Medical History"
                            id="familyMedicalHistory"
                            placeholder="Mother had breast cancer"
                            {...register('familyMedicalHistory')}
                        />
                    </div>
                    {/* Past Medical History */}
                    <div>
                        <Textarea
                            label="Past Medical History"
                            id="pastMedicalHistory"
                            placeholder="Asthma diagnosis in childhood"
                            {...register('pastMedicalHistory')}
                        />
                    </div>
                </div>
                <div className="pt-5 pb-4">
                    <Header2>Identification and Verfication</Header2>
                </div>
                {/* Id Type */}
                <div>
                    <ComboBox
                        selectedItem={selectedIdType}
                        setSelectedItem={setSelectedIdType}
                        icon={IdCard}
                        placeholder="Select Id Type"
                        searchPlaceholder="Search type"
                        items={idTypes}
                        {...register('identificationType')}
                    />
                    {errors.identificationType?.message && (
                        <p className="text-destructive text-sm mt-1">{String(errors.identificationType.message)}</p>
                    )}
                </div>
                {/* Id Number */}
                <div>
                    <Input
                        id="idNumber"
                        type="text"
                        placeholder="123456789"
                        icon={IdCard}
                        label="Id Number"
                        {...register('identificationNumber')}
                    />
                    {errors.identificationNumber?.message && (
                        <p className="text-destructive text-sm mt-1">{String(errors.identificationNumber.message)}</p>
                    )}
                </div>
                {/* Scanned Copy of Identification Document */}
                <UploadDocument register={register} />
                <div className="pt-5 pb-4">
                    <Header2>Consent and Privacy</Header2>
                </div>
            </form>
        </section>
    );
};
export default NewPatientPageForm;
