'use client';

import Header1 from '@/components/MainPage/Header1';
import Logo from '@/components/MainPage/Logo';
import NewPatientPageForm from '@/components/NewPatientPageForm';
import Paragraph2 from '@/components/MainPage/Paragraph2';
import Image from 'next/image';
import newPatientFormPageSideImage from '@/public/newPatientFormPageSideImage.png';

const NewPatientPage = () => {
    return (
        <div className="lg:grid lg:grid-cols-[80%,20%]">
            <div className="py-[60px] lg:px-[110px] px-2 flex flex-col items-center lg:items-start">
                <Logo />
                <header className="pt-[72px] gap-4">
                    <Header1>Welcome 👋</Header1>
                    <Paragraph2>Let us know more about yourself</Paragraph2>
                </header>
                <NewPatientPageForm />
            </div>
            <div className="hidden lg:block">
                <Image width={390} height={1098} src={newPatientFormPageSideImage} alt="bubles" />
            </div>
        </div>
    );
};
export default NewPatientPage;
