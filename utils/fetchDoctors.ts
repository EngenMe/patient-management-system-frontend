import { ComboBoxItem } from '@/interfaces/ComboBoxItem.interface';
import { Doctor } from '@/interfaces/Doctor.interface';
import { Dispatch, SetStateAction } from 'react';

export const fetchDoctors = async (setDoctors: Dispatch<SetStateAction<ComboBoxItem[]>>) => {
    try {
        const response = await fetch('http://localhost:4000/api/doctors');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const doctorsArray: Doctor[] = data['data'];

        const transformedDoctors = doctorsArray.map((doctor) => ({
            value: doctor.name
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')
                .replace(/\s+/g, '-'),
            label: doctor.name,
            picturePath: `/doctors/${doctor.picturePath}`,
        }));

        setDoctors(transformedDoctors);
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
};
