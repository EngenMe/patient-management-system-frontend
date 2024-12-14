import { Appointment } from '@/interfaces/Appointment.interface';
import { Dispatch, SetStateAction } from 'react';
import { BuilAppointmentsArray } from './BuildAppointmentsArray';

export const fetchAppointments = async (
    page: number,
    setAppointments: Dispatch<SetStateAction<Appointment[]>>,
    setTotalPages: Dispatch<SetStateAction<number>>
) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments?page=${page}&limit=5`);
        const data = await response.json();

        if (response.ok) {
            const appointmentData = Array.isArray(data.appointments) ? data.appointments : [];

            setAppointments(await BuilAppointmentsArray(appointmentData));

            setTotalPages(data.totalPages || 1);
        } else {
            console.error('Failed to fetch appointments:', data.message);
        }
    } catch (error) {
        console.error('Error fetching appointments:', error);
    }
};
