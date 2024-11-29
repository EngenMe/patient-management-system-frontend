'use client';

import Header1 from '@/components/Header1';
import Logo from '@/components/Logo';
import NewPatientPageForm from '@/components/NewPatientPageForm';
import Paragraph2 from '@/components/Paragraph2';

const NewPatientPage = () => {
    return (
        <div className="pt-[60px] px-[110px] w-[85%]">
            <Logo />
            <header className="pt-[72px] flex flex-col gap-4">
                <Header1>Welcome 👋</Header1>
                <Paragraph2>Let us know more about yourself</Paragraph2>
            </header>
            <NewPatientPageForm />
        </div>
    );
};
export default NewPatientPage;
