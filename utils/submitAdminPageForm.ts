import { AdminLogin } from '@/interfaces/AdminLogin.interface';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import useAdminStore from '@/store/admin.store';
import { getAdminByEmail } from './getAdminByEmail';

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
            const admin = await getAdminByEmail(data.email);

            console.log(admin?.id, admin?.fullName, admin?.picturePath);

            useAdminStore.getState().setAdmin({
                id: admin!.id,
                fullName: admin!.fullName,
                picturePath: admin!.picturePath,
            });

            router.push('/admin/dashboard');
        } else {
            setIsWrongPassword(true);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
