'use client';

import Footer from '@/components/MainPage/Footer';
import Header1 from '@/components/MainPage/Header1';
import Logo from '@/components/MainPage/Logo';
import MainPageForm from '@/components/MainPageForm';
import Paragraph1 from '@/components/MainPage/Paragraph1';
import Image from 'next/image';
import { useState } from 'react';
import OtpDialog from '@/components/MainPage/OtpDialog';

const nOtpSlots = 6;

const HomePage = () => {
    const [otpVisibility, setOtpVisibility] = useState(false);
    const [patientEmail, setPatientEmail] = useState('');

    return (
        <>
            {/* Mobile */}
            <div className="lg:hidden">
                <div className="relative">
                    <div className="absolute inset-0 w-full h-full blur-[2px]">
                        <Image
                            width={1000}
                            height={1000}
                            src="/doctor-welcoming.jpg"
                            alt="Doctor Welcoming"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <header className="relative z-10 flex flex-col items-center pt-10">
                        <Logo />
                        <div className="flex flex-col gap-[18px] py-[177px]">
                            <Header1>Hi there, ....</Header1>
                            <Paragraph1>Get started with appointments.</Paragraph1>
                        </div>
                    </header>
                </div>
                <div className="px-4 lg:px-0">
                    <MainPageForm setOtpVisibility={setOtpVisibility} setPatientEmail={setPatientEmail} />
                </div>
                <footer className="pt-[177px] pb-6 flex justify-between px-4 lg:px-0">
                    <Footer href="https://engenme.github.io/" isPulse={true}>
                        Made by EngenMe
                    </Footer>
                    <Footer isPulse={true} href="/admin/login" isTargetBlank={false}>
                        Admin
                    </Footer>
                </footer>
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex">
                <div className="px-14 xl:px-[110px] w-1/2">
                    <header className="pt-[60px]">
                        <Logo />
                        <div className="flex flex-col gap-[18px] pt-[177px]">
                            <Header1>Hi there, ....</Header1>
                            <Paragraph1>Get started with appointments.</Paragraph1>
                        </div>
                    </header>
                    <MainPageForm setOtpVisibility={setOtpVisibility} setPatientEmail={setPatientEmail} />
                    <footer className="pt-[177px] pb-6 flex justify-between">
                        <Footer href="https://engenme.github.io/" isPulse={true}>
                            Made by EngenMe
                        </Footer>
                        <Footer isPulse={true} href="/admin/login" isTargetBlank={false}>
                            Admin
                        </Footer>
                    </footer>
                </div>
                <div className="w-1/2 relative">
                    <Image
                        width={1000}
                        height={1000}
                        src="/doctor-welcoming.jpg"
                        alt="Doctor Welcoming"
                        className="w-full h-full object-cover rounded-l-3xl"
                    />
                </div>
            </div>
            {/* OTP */}
            {otpVisibility && <OtpDialog nOtpSlots={nOtpSlots} patientEmail={patientEmail} />}
        </>
    );
};
export default HomePage;
