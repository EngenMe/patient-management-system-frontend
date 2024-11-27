'use client';

import { usePatientStore } from '@/store/patientStore';

const NewPatientPage = () => {
    const patientData = usePatientStore((state) => state.patientData);
    const { fullName, email, phone } = patientData!;

    return (
        <div>
            <h1>Register New Patient</h1>
            <p>
                Full Name: {fullName} <br />
                Email: {email} <br />
                Phone: {phone}
            </p>
        </div>
    );
};
export default NewPatientPage;
