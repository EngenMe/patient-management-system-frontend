import { NewPatient } from '@/interfaces/NewPatient.interface';

export const submitNewPatientForm = async (data: NewPatient) => {
    try {
        const formData = new FormData();

        formData.append('fullName', data.fullName || '');
        formData.append('email', data.email || '');
        formData.append('phone', data.phone || '');
        formData.append('dateOfBirth', data.dateOfBirth?.toISOString() || '');
        formData.append('gender', data.gender || '');
        formData.append('address', data.address || '');
        formData.append('occupation', data.occupation || '');
        formData.append('emergencyContactName', data.emergencyContactName || '');
        formData.append('emergencyContactPhone', data.emergencyContactPhone || '');
        formData.append('primaryCarePhysician', data.primaryCarePhysician || '');
        formData.append('medicalCardNumber', data.medicalCardNumber || '');
        formData.append('ppsNumber', data.ppsNumber || '');
        formData.append('allergies', data.allergies || '');
        formData.append('currentMedications', data.currentMedications || '');
        formData.append('familyMedicalHistory', data.familyMedicalHistory || '');
        formData.append('pastMedicalHistory', data.pastMedicalHistory || '');
        formData.append('identificationType', data.identificationType || '');
        formData.append('identificationNumber', data.identificationNumber || '');

        formData.append('consentToTreatment', data.consentToTreatment ? 'true' : 'false');
        formData.append('consentToDisclosure', data.consentToDisclosure ? 'true' : 'false');
        formData.append('agreeToPrivacyPolicy', data.agreeToPrivacyPolicy ? 'true' : 'false');

        if (data.imageDocument) {
            formData.append('imageDocument', data.imageDocument);
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/patients`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            console.error('Failed to submit form:', response.status, response.statusText);
            return;
        }

        const jsonResponse = await response.json();

        if (jsonResponse.status === 'new_patient') {
            console.log('New patient successfully created:', jsonResponse);
        } else {
            console.log('Unexpected API Response:', jsonResponse);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
