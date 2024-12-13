export const getAdminIdByEmail = async (adminEmail: string): Promise<string | undefined> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/admins/id?email=${encodeURIComponent(adminEmail)}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { data } = await response.json();

        return data.adminId;
    } catch (error) {
        console.error('Error fetching patientIdByEmail:', error);
    }
};
