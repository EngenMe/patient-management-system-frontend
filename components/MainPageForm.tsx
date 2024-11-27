'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PrimaryButton from './PrimaryButton';
import { Mail, Phone, UserRound } from 'lucide-react';
import { Input } from './InputField';
import { submitForm } from '@/utils/submitForm';
import { useRouter } from 'next/navigation';
import { MainPageFormData } from '@/interfaces/MainPageFormData.interface';

const formSchema = z.object({
    fullName: z
        .string()
        .min(3, 'Full name must be at least 3 characters long')
        .max(50, 'Full name must be less than 50 characters long'),
    email: z.string().email('Invalid email address').max(100, 'Email must be less than 100 characters long'),
    phone: z
        .string()
        .regex(/^\d+$/, 'Phone must only contain numbers')
        .min(7, 'Phone number must be at least 7 digits long')
        .max(15, 'Phone number must be less than 15 digits long'),
});

const MainPageForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MainPageFormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<MainPageFormData> = async (data: MainPageFormData) => {
        await submitForm(data, router);
    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 pt-[84px] px-5 lg:px-0">
                {/* Full Name Field */}
                <div>
                    <Input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        icon={UserRound}
                        label="Full name"
                        {...register('fullName')}
                    />
                    {errors.fullName?.message && (
                        <p className="text-destructive text-sm mt-1">{String(errors.fullName.message)}</p>
                    )}
                </div>
                <div>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john_doe@gmail.com"
                        icon={Mail}
                        label="Email address"
                        {...register('email')}
                    />
                    {errors.email?.message && (
                        <p className="text-destructive text-sm mt-1">{String(errors.email.message)}</p>
                    )}
                </div>
                <div>
                    <Input
                        id="phone"
                        type="Phone number"
                        placeholder="089 765 4321"
                        icon={Phone}
                        label="Phone number"
                        {...register('phone')}
                    />
                    {errors.phone?.message && (
                        <p className="text-destructive text-sm mt-1">{String(errors.phone.message)}</p>
                    )}
                </div>
                <div className="pt-10">
                    <PrimaryButton type="submit">Get Started</PrimaryButton>
                </div>
            </form>
        </section>
    );
};
export default MainPageForm;
