import Footer from '@/components/MainPage/Footer';
import Header1 from '@/components/MainPage/Header1';
import Logo from '@/components/MainPage/Logo';
import MainPageForm from '@/components/MainPageForm';
import Paragraph1 from '@/components/MainPage/Paragraph1';
import Image from 'next/image';

const HomePage = () => {
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
                <MainPageForm />
                <footer className="pt-[177px] pb-6 justify-self-center">
                    <Footer href="https://engenme.github.io/" isPulse={true}>
                        Made by EngenMe
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
                    <MainPageForm />
                    <footer className="pt-[177px] pb-6">
                        <Footer href="https://engenme.github.io/" isPulse={true}>
                            Made by EngenMe
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
        </>
    );
};
export default HomePage;
