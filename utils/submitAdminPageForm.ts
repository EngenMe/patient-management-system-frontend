import { AdminLogin } from '@/interfaces/AdminLogin.interface';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

export const submitAdminPageForm = async (
    data: AdminLogin,
    router: ReturnType<typeof useRouter>,
    setIsWrongPassword: Dispatch<SetStateAction<boolean>>
) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/admins/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            router.push('/admin/dashboard');
        } else {
            setIsWrongPassword(true);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
