import { z } from 'zod';

export const newPatientPageFormSchema = z.object({
    fullName: z
        .string()
        .min(3, 'Full name must be at least 3 characters long')
        .max(50, 'Full name must be less than 50 characters long'),
    email: z.string().email('Invalid email address').max(100, 'Email must be less than 100 characters long'),
    phone: z
        .string()
        .regex(/^\d+$/, 'Phone must only contain numbers')
        .min(7, 'Phone number must be at least 7 digits long')
        .max(15, 'Phone number must be less than 15 digits long'),
    dateOfBirth: z.date().refine(
        (dob) => {
            const today = new Date();
            const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
            const maxDate = new Date(today.getFullYear() - 0, today.getMonth(), today.getDate());
            return dob >= minDate && dob <= maxDate;
        },
        {
            message: 'Date of birth must be between 0 and 100 years ago',
        }
    ),
    gender: z.enum(['Male', 'Female'], { required_error: 'Gender is required' }),
    address: z
        .string()
        .min(5, 'Address must be at least 5 characters long')
        .max(200, 'Address must be less than 200 characters long'),
    occupation: z
        .string()
        .min(2, 'Occupation must be at least 2 characters long')
        .max(100, 'Occupation must be less than 100 characters long'),
    emergencyContactName: z
        .string()
        .min(3, 'Emergency contact name must be at least 3 characters long')
        .max(50, 'Emergency contact name must be less than 50 characters long'),
    emergencyContactPhone: z
        .string()
        .regex(/^\d+$/, 'Emergency contact phone must only contain numbers')
        .min(7, 'Emergency contact phone must be at least 7 digits long')
        .max(15, 'Emergency contact phone must be less than 15 digits long'),
    primaryCarePhysician: z.string().min(1, 'Please select a doctor from the list'),
    medicalCardNumber: z.string().regex(/^\d{7}\s?[A-Za-z]$/, 'Medical card number must be in the format 0123456 A'),
    ppsNumber: z.string().regex(/^\d{7}[A-Za-z]{2}$/, 'PPS Number must be in the format 1234567AA'),
    gpName: z
        .string()
        .min(3, 'GP Name must be at least 3 characters long')
        .max(50, 'GP Name must be less than 50 characters long'),
    allergies: z.string().max(200, 'Allergies must be less than 200 characters long'),
    currentMedications: z.string().max(200, 'Current medications must be less than 200 characters long'),
    familyMedicalHistory: z.string().max(500, 'Family medical history must be less than 500 characters long'),
    pastMedicalHistory: z.string().max(500, 'Past medical history must be less than 500 characters long'),
    identificationType: z.string().min(1, 'Please select an identification type'),
    identificationNumber: z
        .string()
        .min(3, 'Identification number must be at least 3 characters long')
        .max(50, 'Identification number must be less than 50 characters long'),
    imageDocument: z.string().min(1, 'Please upload a scanned copy of your identification document'),
    consentToTreatment: z
        .boolean()
        .refine((value) => value === true, 'You must consent to receive treatment for your health condition.'),
    consentToHealthInfoDisclosure: z
        .boolean()
        .refine(
            (value) => value === true,
            'You must consent to the use and disclosure of your health information for treatment purposes.'
        ),
    agreeToPrivacyPolicy: z
        .boolean()
        .refine((value) => value === true, 'You must acknowledge and agree to the privacy policy.'),
});
