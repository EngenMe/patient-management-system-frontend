import { useRouter } from 'next/navigation';

export const submitOtp = async (
    patientId: string,
    otp: string,
    redirectTo: string,
    router: ReturnType<typeof useRouter>
): Promise<boolean> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ patientId, otp }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            const redirectUrl = `${redirectTo}?patientId=${encodeURIComponent(patientId)}`;
            await router.push(redirectUrl);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error during OTP verification:', error);
        return false;
    }
};
