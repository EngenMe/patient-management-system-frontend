import Header1 from "@/components/MainPage/Header1";
import Logo from "@/components/MainPage/Logo";
import Paragraph2 from "@/components/MainPage/Paragraph2";
import NewAppointmentForm from "@/components/NewAppointmentForm";
import newAppointmentFormPageSideImage from "@/public/newAppointmentFormPageSideImage.png";
import Image from "next/image";
import { Suspense } from "react";

const NewAppointmentPage = () => {
  return (
    <div className="lg:grid lg:grid-cols-[80%,20%] min-h-screen">
      <div className="py-12 lg:px-[110px] px-2 flex flex-col items-center text-center lg:items-start lg:text-start">
        <Logo />
        <header className="pt-12 flex flex-col gap-4">
          <Header1>Hey there 👋</Header1>
          <Paragraph2>Request a new appointment in 10 seconds</Paragraph2>
        </header>
        <div className="text-left w-full pt-16">
          <Suspense fallback={<div>Loading Appointment Form...</div>}>
            <NewAppointmentForm />
          </Suspense>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          width={390}
          height={1098}
          src={newAppointmentFormPageSideImage}
          alt="bubles"
          className="h-full"
        />
      </div>
    </div>
  );
};
export default NewAppointmentPage;
