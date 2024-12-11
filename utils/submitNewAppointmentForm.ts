import { NewAppointment } from '@/interfaces/NewAppointment.interface';
import { useRouter } from 'next/navigation';

export const submitNewAppointmentForm = async (data: NewAppointment, router: ReturnType<typeof useRouter>) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create appointment');
        }

        await response.json();
        await router.push('/success');
    } catch (error) {
        console.error('Error creating appointment:', error);
        throw error;
    }
};
