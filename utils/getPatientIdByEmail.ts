export const getPatientIdByEmail = async (patientEmail: string): Promise<string | undefined> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/patients/id?email=${encodeURIComponent(patientEmail)}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { data } = await response.json();

        return data.patientId;
    } catch (error) {
        console.error('Error fetching patientIdByEmail:', error);
    }
};
