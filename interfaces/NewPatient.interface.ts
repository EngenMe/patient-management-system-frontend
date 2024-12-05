export interface NewPatient {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: Date;
    gender: 'male' | 'female';
    address: string;
    occupation: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    primaryCarePhysician: string;
    medicalCardNumber?: string;
    ppsNumber?: string;
    allergies?: string;
    currentMedications?: string;
    familyMedicalHistory?: string;
    pastMedicalHistory?: string;
    identificationType: string;
    identificationNumber: string;
    imageDocument: File;
    consentToTreatment: boolean;
    consentToDisclosure: boolean;
    agreeToPrivacyPolicy: boolean;
}
