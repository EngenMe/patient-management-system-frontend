'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { X } from 'lucide-react';
import { useState } from 'react';
import { submitOtp } from '@/utils/submitOtp';
import { getPatientIdByEmail } from '@/utils/getPatientIdByEmail';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: 'Your one-time password must be 6 characters.',
    }),
});

interface Props {
    nOtpSlots: number;
    patientEmail: string;
}

export default function OtpDialog({ nOtpSlots, patientEmail }: Props) {
    const [isOpen, setIsOpen] = useState(true);

    const [isInvalidOtp, setIsInvalidOtp] = useState(false);

    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: '',
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const patientId = await getPatientIdByEmail(patientEmail);

        if (!patientId) {
            setIsInvalidOtp(true);
            console.error('Error: Patient ID not found.');
            return;
        }

        const res = await submitOtp(patientId, data.pin, '/api/appointments/new', router);

        if (!res) {
            setIsInvalidOtp(true);
        }
    }

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent
                className="pt-10 pb-[50px] px-10 gap-10 opacity-95 border-0 max-w-[640px] w-full bg-[#1A1D21F5]"
                style={{ borderRadius: '16px' }}
            >
                <AlertDialogHeader>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-4">
                            <AlertDialogTitle className="font-semibold text-2xl">Verify OTP</AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground">
                                Please enter the OTP sent to your registered mobile number.
                            </AlertDialogDescription>
                        </div>
                        <div>
                            <AlertDialogCancel asChild>
                                <div
                                    className="bg-inherit hover:text-inherit/50 rounded-3xl cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X size={12} className="text-foreground" />
                                </div>
                            </AlertDialogCancel>
                        </div>
                    </div>
                </AlertDialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10">
                        <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="flex flex-col gap-2">
                                            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                                                <InputOTPGroup
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '100%',
                                                    }}
                                                >
                                                    <div className="flex w-full justify-center items-center space-x-[18px]">
                                                        {Array.from({ length: nOtpSlots }, (_, index) => (
                                                            <InputOTPSlot
                                                                key={index}
                                                                index={index}
                                                                className={cn(
                                                                    isInvalidOtp
                                                                        ? 'border-destructive'
                                                                        : 'border-[#363a3d]',
                                                                    'w-20 h-20 py-[10px] px-2 bg-background border font-medium text-5xl text-[#D0D5DD]'
                                                                )}
                                                                style={{ borderRadius: '8px' }}
                                                            />
                                                        ))}
                                                    </div>
                                                </InputOTPGroup>
                                            </InputOTP>
                                            {isInvalidOtp && (
                                                <div className="text-sm text-destructive">Invalid OTP</div>
                                            )}
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <AlertDialogFooter>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                }}
                            >
                                <AlertDialogAction
                                    type="submit"
                                    disabled={!form.formState.isValid}
                                    className="w-[560px] h-12 rounded-[8px] py-2 px-6 gap-3 text-foreground font-semibold"
                                >
                                    Verify
                                </AlertDialogAction>
                            </div>
                        </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
