import { Doctor } from '@/interfaces/Doctor.interface';
import { Dispatch, SetStateAction } from 'react';

export const fetchDoctors = async (setDoctors: Dispatch<SetStateAction<Doctor[]>>) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const doctorsArray: Doctor[] = data['data'];

        setDoctors(doctorsArray);
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
};
