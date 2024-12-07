'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import Header2 from './MainPage/Header2';
import TextInput from './NewPatient/TextInput';
import { BriefcaseBusiness, IdCard, Mail, MapPin, Phone, UserRound } from 'lucide-react';
import { newPatientFormSchema } from '@/schemas/newPatientFormSchema';
import DatePicker from './NewPatient/DatePicker';
import RadioGroupField from './NewPatient/RadioGroupField';
import { genderItems } from '@/public/genderItems';
import ComboBox from './NewPatient/ComboBox';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '@/utils/fetchDoctors';
import { transformDoctorsToComboBoxItems } from '@/utils/transformDoctorsToComboBoxItems';
import { Doctor } from '@/interfaces/Doctor.interface';
import MultiLineTextInput from './NewPatient/MultiLineTextInput';
import { fetchIdTypes } from '@/utils/fetchIdTypes';
import { IdType } from '@/interfaces/IdType.interface';
import { transformIdTypesToComboBoxItems } from '@/utils/transformIdTypesToComboBoxItems';
import UploadDocument from './NewPatient/UploadDocument';
import PrimaryButton from './MainPage/PrimaryButton';
import { NewPatient } from '@/interfaces/NewPatient.interface';
import CheckBox from './NewPatient/CheckBox';
import { usePatientStore } from '@/store/patientStore';
// import { useRouter } from 'next/navigation';
import { submitNewPatientForm } from '@/utils/submitNewPatientForm';

const NewPatientPageForm = () => {
    const { patientData } = usePatientStore();

    const form = useForm<z.infer<typeof newPatientFormSchema>>({
        resolver: zodResolver(newPatientFormSchema),
        defaultValues: {
            fullName: patientData.fullName || undefined,
            email: patientData.email || undefined,
            phone: patientData.phone || undefined,
            dateOfBirth: new Date(),
            gender: undefined,
            address: undefined,
            occupation: undefined,
            emergencyContactName: undefined,
            emergencyContactPhone: undefined,
            primaryCarePhysician: undefined,
            medicalCardNumber: undefined,
            ppsNumber: undefined,
            allergies: undefined,
            currentMedications: undefined,
            familyMedicalHistory: undefined,
            pastMedicalHistory: undefined,
            identificationType: undefined,
            identificationNumber: undefined,
            imageDocument: undefined,
            consentToTreatment: undefined,
            consentToDisclosure: undefined,
            agreeToPrivacyPolicy: undefined,
        },
    });

    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [idTypes, setIdTypes] = useState<IdType[]>([]);

    useEffect(() => {
        fetchDoctors(setDoctors);
        fetchIdTypes(setIdTypes);
    }, []);

    // const router = useRouter();

    function onSubmit(data: z.infer<typeof newPatientFormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });

        submitNewPatientForm(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 pt-[84px]">
                <div className="pb-4">
                    <Header2>Personal Information</Header2>
                </div>
                {/* Full Name */}
                <TextInput<NewPatient>
                    control={form.control}
                    name="fullName"
                    label="Full name"
                    placeholder="John Doe"
                    icon={UserRound}
                />
                <div className="grid grid-cols-2 gap-6">
                    {/* Email */}
                    <TextInput<NewPatient>
                        control={form.control}
                        name="email"
                        label="Email address"
                        placeholder="john_doe@gmail.com"
                        icon={Mail}
                        type="email"
                    />
                    {/* Phone */}
                    <TextInput<NewPatient>
                        control={form.control}
                        name="phone"
                        label="Phone number"
                        placeholder="089 765 4321"
                        icon={Phone}
                        type="tel"
                    />
                    {/* Date of Birth */}
                    <DatePicker control={form.control} name="dateOfBirth" label="Date of Birth" />
                    {/* Gender */}
                    <RadioGroupField control={form.control} name="gender" label="Gender" radioItems={genderItems} />
                    {/* Address */}
                    <TextInput<NewPatient>
                        control={form.control}
                        name="address"
                        label="Address"
                        placeholder="1234 Elm Street"
                        icon={MapPin}
                    />
                    {/* Occupation */}
                    <TextInput<NewPatient>
                        control={form.control}
                        name="occupation"
                        label="Occupation"
                        placeholder="Software Engineer"
                        icon={BriefcaseBusiness}
                    />
                    {/* Emergency Contact Name */}
                    <TextInput<NewPatient>
                        control={form.control}
                        name="emergencyContactName"
                        label="Emergency Contact Name"
                        placeholder="John Doe"
                        icon={UserRound}
                    />
                    {/* Emergency Contact Phone */}
                    <TextInput<NewPatient>
                        control={form.control}
                        name="emergencyContactPhone"
                        label="Emergency Contact Phone"
                        placeholder="089 765 4321"
                        icon={Phone}
                        type="tel"
                    />
                </div>
                <div className="pb-4 pt-12">
                    <Header2>Medical Information</Header2>
                </div>
                {/* Primary Care Physician */}
                <ComboBox
                    form={form}
                    name="primaryCarePhysician"
                    label="Primary Care Physician"
                    data={transformDoctorsToComboBoxItems(doctors)}
                    placeholder="Select a doctor"
                    searchPlaceholder="Search for doctor"
                />
                <div className="grid grid-cols-2 gap-6">
                    {/* Medical Card Number */}
                    <TextInput<NewPatient>
                        control={form.control}
                        name="medicalCardNumber"
                        label="Medical card number"
                        placeholder="1234567 A"
                        icon={IdCard}
                    />
                    {/* PPS Number */}
                    <TextInput<NewPatient>
                        control={form.control}
                        name="ppsNumber"
                        label="PPS number"
                        placeholder="1234567AA"
                        icon={IdCard}
                    />
                    {/* Allergies */}
                    <MultiLineTextInput
                        control={form.control}
                        name="allergies"
                        label="Allergies (if any)"
                        placeholder="Peanuts, Penicillin, Pollen"
                    />
                    {/* Current Medications */}
                    <MultiLineTextInput
                        control={form.control}
                        name="currentMedications"
                        label="Current medications"
                        placeholder="Ibuprofen 200mg, Levothyroxine 50mcg"
                    />
                    {/* Family Medical History */}
                    <MultiLineTextInput
                        control={form.control}
                        name="familyMedicalHistory"
                        label="Family medical history (if relevant)"
                        placeholder="Mother had breast cancer"
                    />
                    {/* Past Medical History */}
                    <MultiLineTextInput
                        control={form.control}
                        name="pastMedicalHistory"
                        label="Past medical history"
                        placeholder="Asthma diagnosis in childhood"
                    />
                </div>
                <div className="pb-4 pt-12">
                    <Header2>Identification and Verfication</Header2>
                </div>
                {/* Id Type */}
                <ComboBox
                    form={form}
                    name="identificationType"
                    label="Identification type"
                    data={transformIdTypesToComboBoxItems(idTypes)}
                    placeholder="Select an identification type"
                    searchPlaceholder="Search for id type"
                />
                {/* Identification number */}
                <TextInput<NewPatient>
                    control={form.control}
                    name="identificationNumber"
                    label="Identification number"
                    placeholder="123456789"
                    icon={IdCard}
                />
                {/* Image Document */}
                <UploadDocument control={form.control} name="imageDocument" />
                <div className="pb-4 pt-12">
                    <Header2>Consent and Privacy</Header2>
                </div>
                {/* Consent to receive treatment */}
                <CheckBox
                    control={form.control}
                    name="consentToTreatment"
                    label="I consent to receive treatment for my health condition."
                />
                {/* Consent to disclosure */}
                <CheckBox
                    control={form.control}
                    name="consentToDisclosure"
                    label="I consent to the use and disclosure of my health information for treatment purposes."
                />
                {/* Agree to privacy policy */}
                <CheckBox
                    control={form.control}
                    name="agreeToPrivacyPolicy"
                    label="I acknowledge that I have reviewed and agree to the privacy policy"
                />
                <div className="py-12">
                    <PrimaryButton type="submit"> Submit and Continue </PrimaryButton>
                </div>
            </form>
        </Form>
    );
};
export default NewPatientPageForm;
