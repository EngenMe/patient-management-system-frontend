export interface NewPatientPageFormData {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: Date;
    gender: 'Male' | 'Female';
    address: string;
    occupation: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    medicalCardNumber?: string;
    ppsNumber?: string;
    gpName?: string;
    allergies?: string;
    currentMedications?: string;
    familyMedicalHistory?: string;
    pastMedicalHistory?: string;
    identificationType: string;
    identificationNumber: string;
    imageDocument?: File;
    consentToTreatment: boolean;
    consentToHealthInfoDisclosure: boolean;
    agreeToPrivacyPolicy: boolean;
}
