import { AppointmentState } from '@/interfaces/AppointmentState.interface';
import { Dispatch, SetStateAction } from 'react';

export const fetchAppointmentsCount = async (setCount: Dispatch<SetStateAction<AppointmentState>>) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments/count`);
        const data = await response.json();

        if (response.ok && data.counts) {
            setCount(data.counts);
        } else {
            console.error('Failed to fetch appointment counts:', data.message);
        }
    } catch (error) {
        console.error('Error fetching appointment counts:', error);
    }
};
