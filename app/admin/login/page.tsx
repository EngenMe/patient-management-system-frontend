'use client';

import Footer from '@/components/MainPage/Footer';
import Header1 from '@/components/MainPage/Header1';
import Logo from '@/components/MainPage/Logo';
import Paragraph1 from '@/components/MainPage/Paragraph1';
import Image from 'next/image';
import AdminLoginForm from '@/components/AdminLoginForm';

const AdminLoginPage = () => {
    return (
        <>
            {/* Mobile */}
            <div className="lg:hidden">
                <div className="relative">
                    <div className="absolute inset-0 w-full h-full blur-[2px]">
                        <Image
                            width={1000}
                            height={1000}
                            src="/admin-doctor-welcoming.png"
                            alt="Doctor Welcoming"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <header className="relative z-10 flex flex-col items-center pt-10 px-4">
                        <Logo />
                        <div className="flex flex-col gap-[18px] py-[177px]">
                            <Header1>Welcome back, Admin!</Header1>
                            <Paragraph1>Manage appointments and streamline your workflow.</Paragraph1>
                        </div>
                    </header>
                </div>
                <div className="px-4 lg:px-0">
                    <AdminLoginForm />
                </div>
                <footer className="pt-[177px] pb-6 flex justify-between px-4 lg:px-0">
                    <Footer href="https://engenme.github.io/" isPulse={true}>
                        Made by EngenMe
                    </Footer>
                    <Footer isPulse={true} href="/" isTargetBlank={false}>
                        Patient
                    </Footer>
                </footer>
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex">
                <div className="px-14 xl:px-[110px] w-1/2">
                    <header className="pt-[60px]">
                        <Logo />
                        <div className="flex flex-col gap-[18px] pt-[177px]">
                            <Header1>Welcome back, Admin!</Header1>
                            <Paragraph1>Manage appointments and streamline your workflow.</Paragraph1>
                        </div>
                    </header>
                    <AdminLoginForm />
                    <footer className="pt-[177px] pb-6 flex justify-between">
                        <Footer href="https://engenme.github.io/" isPulse={true}>
                            Made by EngenMe
                        </Footer>
                        <Footer isPulse={true} href="/" isTargetBlank={false}>
                            Patient
                        </Footer>
                    </footer>
                </div>
                <div className="w-1/2 relative">
                    <Image
                        width={1000}
                        height={1000}
                        src="/admin-doctor-welcoming.png"
                        alt="Doctor Welcoming"
                        className="w-full h-full object-cover rounded-l-3xl"
                    />
                </div>
            </div>
        </>
    );
};
export default AdminLoginPage;
