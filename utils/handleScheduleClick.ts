import { Appointment } from '@/interfaces/Appointment.interface';
import { Dispatch, SetStateAction } from 'react';
import { fetchAppointments } from './fetchAppointments';
import { fetchAppointmentsCount } from './fetchAppointmentsCount';
import { AppointmentState } from '@/interfaces/AppointmentState.interface';

export const handleScheduleClick = async (
    appointmentId: number,
    page: number,
    setAppointments: Dispatch<SetStateAction<Appointment[]>>,
    setTotalPages: Dispatch<SetStateAction<number>>,
    setCounts: Dispatch<SetStateAction<AppointmentState>>
) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments/${appointmentId}/schedule`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'scheduled' }),
        });

        if (response.ok) {
            await fetchAppointments(page, setAppointments, setTotalPages);
            await fetchAppointmentsCount(setCounts);
        } else {
            const errorData = await response.json();
            console.error('Failed to update appointment:', errorData.message);
        }
    } catch (error) {
        console.error('An error occurred while updating the appointment:', error);
    }
};
