import { Appointment } from '@/interfaces/Appointment.interface';
import { cn } from '@/lib/utils';
import { formatDateTime } from '@/utils/formatDateTime';
import { generateColorFromName } from '@/utils/generateColorFromName';
import StatusBadge from './StatusBadge';
import Badge from '../NewPatient/Badge';
import { handleScheduleClick } from '@/utils/handleScheduleClick';
import { handleCancelClick } from '@/utils/handleCancelClick';
import { Dispatch, SetStateAction } from 'react';
import { AppointmentState } from '@/interfaces/AppointmentState.interface';

interface Props {
    appointments: Appointment[];
    page: number;
    totalPages: number;
    handlePrevPage: () => void;
    handleNextPage: () => void;
    setAppointments: Dispatch<SetStateAction<Appointment[]>>;
    setTotalPages: Dispatch<SetStateAction<number>>;
    setCounts: Dispatch<SetStateAction<AppointmentState>>;
}

const AppointmentsTable = ({
    appointments,
    page,
    totalPages,
    handlePrevPage,
    handleNextPage,
    setAppointments,
    setTotalPages,
    setCounts,
}: Props) => {
    return (
        <div className="mt-10 border border-[#1A1D21] rounded-xl overflow-hidden">
            <table className="w-full hidden lg:table">
                <thead>
                    <tr className="bg-[#0D0F10] text-left h-[54px]">
                        <th className="py-[18px] px-6 border-b border-[#1A1D21] font-medium text-xs leading-[18px] text-[#CDCECF]">
                            Patient
                        </th>
                        <th className="py-[18px] px-6 border-b border-[#1A1D21] font-medium text-xs leading-[18px] text-[#CDCECF]">
                            Date
                        </th>
                        <th className="py-[18px] px-6 border-b border-[#1A1D21] font-medium text-xs leading-[18px] text-[#CDCECF]">
                            Status
                        </th>
                        <th className="py-[18px] px-6 border-b border-[#1A1D21] font-medium text-xs leading-[18px] text-[#CDCECF]">
                            Doctor
                        </th>
                        <th className="py-[18px] px-6 border-b border-[#1A1D21] font-medium text-xs leading-[18px] text-[#CDCECF]">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id} className={cn(appointment.id % 2 === 0 && 'bg-[#1C2023]', 'h-[72px]')}>
                            <td className="py-4 px-6 border-[#1A1D21] font-semibold text-sm text-[#E8E9E9]">
                                <div className="flex items-center gap-3">
                                    <div
                                        style={{
                                            backgroundColor: generateColorFromName(appointment.patientName),
                                        }}
                                        className="rounded-full w-8 h-8 flex justify-center items-center"
                                    >
                                        {appointment.patientName.split(' ')[0].substring(0, 1)}
                                        {appointment.patientName.split(' ')[1].substring(0, 1)}
                                    </div>
                                    {appointment.patientName}
                                </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-[#E8E9E9]">
                                {formatDateTime(appointment.dateAndTime)}
                            </td>
                            <td className="py-4 px-6 font-semibold text-sm text-[#E8E9E9]">
                                <StatusBadge status={appointment.status} />
                            </td>
                            <td className="py-4 px-6 font-semibold text-sm text-[#E8E9E9]">
                                <Badge picturePath={appointment.doctorPicturePath} label={appointment.doctorName} />
                            </td>
                            <td className="py-4 px-6 font-semibold text-sm">
                                <button
                                    className="text-[#24AE7C] hover:underline disabled:hover:no-underline disabled:opacity-50"
                                    disabled={appointment.status === 'scheduled'}
                                    onClick={() =>
                                        handleScheduleClick(
                                            appointment.id,
                                            page,
                                            setAppointments,
                                            setTotalPages,
                                            setCounts
                                        )
                                    }
                                >
                                    Schedule
                                </button>
                                <button
                                    className="ml-4 text-[#FBECEC] hover:underline disabled:hover:no-underline disabled:opacity-50"
                                    disabled={appointment.status === 'cancelled'}
                                    onClick={() =>
                                        handleCancelClick(
                                            appointment.id,
                                            page,
                                            setAppointments,
                                            setTotalPages,
                                            setCounts
                                        )
                                    }
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Mobile View */}
            <div className="lg:hidden">
                {appointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 border-b border-[#1A1D21] flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div
                                    style={{
                                        backgroundColor: generateColorFromName(appointment.patientName),
                                    }}
                                    className="rounded-full w-8 h-8 flex justify-center items-center"
                                >
                                    {appointment.patientName.split(' ')[0].substring(0, 1)}
                                    {appointment.patientName.split(' ')[1].substring(0, 1)}
                                </div>
                                <div>
                                    <div className="font-semibold text-sm text-[#E8E9E9]">
                                        {appointment.patientName}
                                    </div>
                                    <div className="text-sm text-[#CDCECF]">
                                        {formatDateTime(appointment.dateAndTime)}
                                    </div>
                                </div>
                            </div>
                            <StatusBadge status={appointment.status} />
                        </div>
                        <div className="flex justify-between items-center">
                            <Badge picturePath={appointment.doctorPicturePath} label={appointment.doctorName} />
                            <div>
                                <button
                                    className="text-[#24AE7C] hover:underline disabled:hover:no-underline disabled:opacity-50"
                                    disabled={appointment.status === 'scheduled'}
                                    onClick={() =>
                                        handleScheduleClick(
                                            appointment.id,
                                            page,
                                            setAppointments,
                                            setTotalPages,
                                            setCounts
                                        )
                                    }
                                >
                                    Schedule
                                </button>
                                <button
                                    className="ml-4 text-[#FBECEC] hover:underline disabled:hover:no-underline disabled:opacity-50"
                                    disabled={appointment.status === 'cancelled'}
                                    onClick={() =>
                                        handleCancelClick(
                                            appointment.id,
                                            page,
                                            setAppointments,
                                            setTotalPages,
                                            setCounts
                                        )
                                    }
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center my-4 px-4 py-2">
                <button
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded ${
                        page === 1 ? 'bg-primary opacity-30 cursor-not-allowed' : 'bg-primary'
                    }`}
                >
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded ${
                        page === totalPages ? 'bg-primary opacity-30 cursor-not-allowed' : 'bg-primary'
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AppointmentsTable;
