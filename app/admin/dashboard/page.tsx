"use client";

import AdminIcon from "@/components/AdminDashboard/AdminIcon";
import AppointmentsCountCard from "@/components/AdminDashboard/AppointmentsCountCard";
import AppointmentsTable from "@/components/AdminDashboard/AppointmentsTable";
import Header1 from "@/components/MainPage/Header1";
import Logo from "@/components/MainPage/Logo";
import Paragraph1 from "@/components/MainPage/Paragraph1";
import { Appointment } from "@/interfaces/Appointment.interface";
import useAdminStore from "@/store/admin.store";
import { fetchAppointments } from "@/utils/fetchAppointments";
import { fetchAppointmentsCount } from "@/utils/fetchAppointmentsCount";
import { handleNextPage } from "@/utils/handleNextPage";
import { handlePrevPage } from "@/utils/handlePrevPage";
import { CalendarCheck2, Hourglass, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const picturePath = useAdminStore((state) => state.picturePath);
  const fullName = useAdminStore((state) => state.fullName);

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [counts, setCounts] = useState({
    scheduled: 0,
    pending: 0,
    cancelled: 0,
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAppointmentsCount(setCounts);
  }, []);

  useEffect(() => {
    fetchAppointments(page, setAppointments, setTotalPages);
  }, [page]);

  return (
    <div className="flex flex-col gap-[42px] pb-10">
      <div className="flex justify-between py-6 bg-[#0D0F10] m-2 rounded-[20px] px-4 lg:px-14">
        <Logo />
        <AdminIcon picturePath={picturePath} adminName={fullName || "Admin"} />
      </div>
      <div className="flex flex-col px-4 text-center lg:text-start lg:px-[68px] gap-[42px]">
        <div className="flex flex-col gap-3">
          <Header1>Welcome, {fullName || "Admin"}</Header1>
          <Paragraph1>Start day with managing new appointments</Paragraph1>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          <AppointmentsCountCard
            icon={CalendarCheck2}
            total={counts.scheduled}
            text="Total number of scheduled appointments"
            color="#24AE7C"
          />
          <AppointmentsCountCard
            icon={Hourglass}
            total={counts.pending}
            text="Total number of pending appointments"
            color="#79B5EC"
          />
          <AppointmentsCountCard
            icon={TriangleAlert}
            total={counts.cancelled}
            text="Total number of cancelled appointments"
            color="#FF4F4E"
          />
        </div>
        <AppointmentsTable
          appointments={appointments}
          page={page}
          totalPages={totalPages}
          handlePrevPage={() => handlePrevPage(page, totalPages, setPage)}
          handleNextPage={() => handleNextPage(page, totalPages, setPage)}
          setAppointments={setAppointments}
          setTotalPages={setTotalPages}
          setCounts={setCounts}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
