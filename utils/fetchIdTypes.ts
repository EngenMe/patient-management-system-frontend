import { IdType } from '@/interfaces/IdType.interface';
import { Dispatch, SetStateAction } from 'react';

export const fetchIdTypes = async (setIdTypes: Dispatch<SetStateAction<IdType[]>>) => {
    try {
        const response = await fetch('http://localhost:4000/api/id-types');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const idTypesArray: IdType[] = data['data'];

        setIdTypes(idTypesArray);
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
};
