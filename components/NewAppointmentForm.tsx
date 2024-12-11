'use client';

import { newAppointmentSchema } from '@/schemas/newAppointmentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import ComboBox from './NewPatient/ComboBox';
import { transformDoctorsToComboBoxItems } from '@/utils/transformDoctorsToComboBoxItems';
import { useEffect, useState } from 'react';
import { Doctor } from '@/interfaces/Doctor.interface';
import { fetchDoctors } from '@/utils/fetchDoctors';
import { NewAppointment } from '@/interfaces/NewAppointment.interface';
import MultiLineTextInput from './NewPatient/MultiLineTextInput';
import PrimaryButton from './MainPage/PrimaryButton';
import DatePicker from './NewPatient/DatePicker';
import TimePicker from './NewAppointment/TimePicker';
import { submitNewAppointmentForm } from '@/utils/submitNewAppointmentForm';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const currentDate = new Date();
const minDate = currentDate;
const maxDate = new Date(currentDate);
maxDate.setMonth(currentDate.getMonth() + 3);

const NewAppointmentForm = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);

    const searchParams = useSearchParams();
    const patientId = searchParams.get('patientId');

    const router = useRouter();

    useEffect(() => {
        fetchDoctors(setDoctors);
    }, []);

    const form = useForm<z.infer<typeof newAppointmentSchema>>({
        resolver: zodResolver(newAppointmentSchema),
        defaultValues: {
            doctor: undefined,
            patientId: patientId ? parseInt(patientId) : undefined,
            reasonForAppointment: undefined,
            additionalComments: undefined,
            expectedAppointmentDate: undefined,
            expectedAppointmentTime: undefined,
        },
    });

    const onSubmit: SubmitHandler<NewAppointment> = async (data: NewAppointment) => {
        data.patientId = parseInt(patientId || '');
        await submitNewAppointmentForm(data, router);
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
                {/* Doctor */}
                <ComboBox<NewAppointment>
                    form={form}
                    name="doctor"
                    label="Doctor"
                    data={transformDoctorsToComboBoxItems(doctors)}
                    placeholder="Select a doctor"
                    searchPlaceholder="Search for doctor"
                />
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Appointment Reason */}
                    <MultiLineTextInput<NewAppointment>
                        control={form.control}
                        name="reasonForAppointment"
                        label="Reason for appointment"
                        placeholder="Annual montly check-up"
                    />
                    {/* Additional Comments */}
                    <MultiLineTextInput<NewAppointment>
                        control={form.control}
                        name="additionalComments"
                        label="Additional comments/notes"
                        placeholder="Prefer afternoon appointments, if possible"
                    />
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Appointment Date */}
                    <DatePicker<NewAppointment>
                        control={form.control}
                        name="expectedAppointmentDate"
                        label="Expected appointment date"
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                    {/* Appointment Time */}
                    <TimePicker<NewAppointment>
                        control={form.control}
                        name="expectedAppointmentTime"
                        label="Expected appointment time"
                        disabled={!form.watch('expectedAppointmentDate')}
                    />
                </div>
                {/* Submit */}
                <div className="pt-10">
                    <PrimaryButton type="submit">Submit and Continue</PrimaryButton>
                </div>
            </form>
        </FormProvider>
    );
};
export default NewAppointmentForm;
