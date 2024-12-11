import { MainPageFormData } from '@/interfaces/MainPageFormData.interface';
import { usePatientStore } from '@/store/patient.store';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

export const submitForm = async (
    data: MainPageFormData,
    router: ReturnType<typeof useRouter>,
    setOtpVisibility: Dispatch<SetStateAction<boolean>>
) => {
    const setPatientData = usePatientStore.getState().setPatientData;

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/patient/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const jsonResponse = await response.json();

        if (jsonResponse.status === 'new_patient') {
            setPatientData(data);
            await router.push(jsonResponse.redirectTo);
        } else if (jsonResponse.status === 'success') {
            setOtpVisibility(true);
        } else {
            console.log('API Response:', jsonResponse);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
