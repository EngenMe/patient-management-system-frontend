'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PrimaryButton from './MainPage/PrimaryButton';
import { submitForm } from '@/utils/submitMainPageForm';
import { useRouter } from 'next/navigation';
import { MainPageFormData } from '@/interfaces/MainPageFormData.interface';
import TextInput from './NewPatient/TextInput';
import { Form } from './ui/form';
import { z } from 'zod';
import { mainPageFormSchema } from '@/schemas/mainPageFormSchema';
import { Mail, Phone, UserRound } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    setOtpVisibility: Dispatch<SetStateAction<boolean>>;
    setPatientEmail: Dispatch<SetStateAction<string>>;
}

const MainPageForm = ({ setOtpVisibility, setPatientEmail }: Props) => {
    const form = useForm<z.infer<typeof mainPageFormSchema>>({
        resolver: zodResolver(mainPageFormSchema),
        defaultValues: {
            fullName: undefined,
            email: undefined,
            phone: undefined,
        },
    });

    const router = useRouter();

    const onSubmit: SubmitHandler<MainPageFormData> = async (data: MainPageFormData) => {
        setPatientEmail(data.email);
        await submitForm(data, router, setOtpVisibility);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 pt-[84px]">
                {/* Full name */}
                <TextInput<MainPageFormData>
                    control={form.control}
                    name="fullName"
                    label="Full name"
                    placeholder="John Doe"
                    icon={UserRound}
                />
                {/* Email address */}
                <TextInput<MainPageFormData>
                    control={form.control}
                    name="email"
                    label="Email address"
                    placeholder="john_doe@gmail.com"
                    icon={Mail}
                />
                {/* Phone number */}
                <TextInput<MainPageFormData>
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="089 765 4321"
                    icon={Phone}
                />
                <div className="pt-10">
                    <PrimaryButton type="submit">Get Started</PrimaryButton>
                </div>
            </form>
        </Form>
    );
};
export default MainPageForm;
