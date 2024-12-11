'use client';

import Header1 from '@/components/MainPage/Header1';
import Logo from '@/components/MainPage/Logo';
import Badge from '@/components/NewPatient/Badge';
import { Doctor } from '@/interfaces/Doctor.interface';
import { months } from '@/public/months';
import { useSuccessPageStore } from '@/store/successPage.store';
import { fetchDoctors } from '@/utils/fetchDoctors';
import { CalendarIcon, CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const SucessPage = () => {
    const { doctorName, expectedAppointmentDate, expectedAppointmentTime } = useSuccessPageStore();

    const [year, month, day]: string[] = expectedAppointmentDate.split('T')[0].split('-');
    const monthName = months.find((m) => m.value === parseInt(month) - 1)?.label;

    const [doctors, setDoctors] = useState<Doctor[]>([]);

    useEffect(() => {
        fetchDoctors(setDoctors);
    }, []);

    const doctor = doctors.find((doc) => {
        const normalizedDocName = doc.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
        return normalizedDocName === doctorName;
    });

    return (
        <div className="pt-[60px] flex flex-col items-center">
            <Logo />
            <div className="pt-40 flex justify-center items-center">
                <CircleCheck
                    className="w-[100px] h-[100px] text-primary"
                    style={{
                        filter: `
                drop-shadow(0px 0px 10px rgba(74, 201, 126, 0.16))
                drop-shadow(0px 0px 10px rgba(74, 201, 126, 0.30))
            `,
                    }}
                />
            </div>
            <div className="py-6 text-center">
                <Header1>
                    Your <span className="text-primary">appointment request</span> has been <br /> successfully
                    submitted!
                </Header1>
            </div>
            <p className="font-medium text-lg text-muted-foreground pb-20">
                We&apos;ll be in touch shortly to confirm.
            </p>
            <hr className="w-[944px] border border-[#363A3D99]" />
            <div className="py-8 flex gap-[30px] items-center justify-center text-muted-foreground font-medium text-lg">
                <div>Requested appointment details:</div>
                <Badge
                    picturePath={doctor?.imageUrl?.toString() || undefined}
                    label={doctor?.name || 'Unknown Doctor'}
                />
                <div className="flex items-center justify-center gap-[7px] font-medium text-lg">
                    <CalendarIcon />
                    <div>
                        {day} {monthName} {year} - {expectedAppointmentTime}
                    </div>
                </div>
            </div>
            <hr className="w-[944px] border-[#363A3D99]" />
        </div>
    );
};
export default SucessPage;
