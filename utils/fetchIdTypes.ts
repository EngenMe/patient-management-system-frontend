import { ComboBoxItem } from '@/interfaces/ComboBoxItem.interface';
import { IdType } from '@/interfaces/IdType.interface';
import { Dispatch, SetStateAction } from 'react';

export const fetchIdTypes = async (setIdTypes: Dispatch<SetStateAction<ComboBoxItem[]>>) => {
    try {
        const response = await fetch('http://localhost:4000/api/id-types');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const idTypesArray: IdType[] = data['data'];

        const transformedIdTypes = idTypesArray.map((idType) => ({
            value: idType.title
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')
                .replace(/\s+/g, '-'),
            label: idType.title,
        }));

        setIdTypes(transformedIdTypes);
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
};
