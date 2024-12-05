import { z } from 'zod';

const currentDate = new Date();
const minDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());
const maxDate = currentDate;

export const newPatientFormSchema = z.object({
    fullName: z
        .string()
        .min(3, 'Full name must be at least 3 characters long')
        .max(50, 'Full name must be less than 50 characters long'),
    email: z.string().email('Invalid email address').max(100, 'Email must be less than 100 characters long'),
    phone: z
        .string()
        .regex(/^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/, 'Invalid phone number')
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be at most 15 characters'),
    dateOfBirth: z
        .date()
        .refine((date) => date >= minDate && date <= maxDate, 'Date of birth must be between 0 and 100 years ago'),
    gender: z.enum(['male', 'female']).refine((value) => !!value, { message: 'Gender is required' }),
    address: z
        .string()
        .min(5, 'Address must be at least 5 characters long')
        .max(100, 'Address must be less than 100 characters long'),
    occupation: z
        .string()
        .min(3, 'Occupation must be at least 3 characters long')
        .max(50, 'Occupation must be less than 50 characters long'),
    emergencyContactName: z
        .string()
        .min(3, 'Emergency contact name must be at least 3 characters long')
        .max(50, 'Emergency contact name must be less than 50 characters long'),
    emergencyContactPhone: z
        .string()
        .regex(/^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/, 'Invalid phone number')
        .min(10, 'Emergency contact phone must be at least 10 digits')
        .max(15, 'Emergency contact phone must be at most 15 characters'),
    primaryCarePhysician: z
        .string()
        .min(5, 'Primary care physician must be at least 5 characters long')
        .max(50, 'Primary care physician must be less than 50 characters long'),
    medicalCardNumber: z
        .string()
        .regex(/^\d{7}[A-Za-z]?$/, 'Medical card number must be exactly 7 digits optionally followed by one character')
        .optional(),
    ppsNumber: z
        .string()
        .regex(/^\d{7}[A-Za-z]{1,2}$/, 'PPS number must consist of 7 digits followed by 1 or 2 letters')
        .optional(),
    allergies: z.string().max(200, 'Allergies must be less than 200 characters').optional(),
    currentMedications: z.string().max(200, 'Current medications must be less than 200 characters').optional(),
    familyMedicalHistory: z.string().max(500, 'Family medical history must be less than 500 characters').optional(),
    pastMedicalHistory: z.string().max(500, 'Past medical history must be less than 500 characters').optional(),
    identificationType: z
        .string()
        .min(3, 'Identification type must be at least 3 characters long')
        .max(50, 'Identification type must be less than 50 characters long'),
    identificationNumber: z
        .string()
        .regex(/^[A-Za-z0-9]{5,20}$/, 'Identification number must be 5 to 20 alphanumeric characters long'),
    imageDocument: z.any().refine((file) => file instanceof File, {
        message: 'An identification document image is required',
    }),
    consentToTreatment: z.boolean().refine((val) => val === true, {
        message: 'You must consent to receive treatment',
    }),
    consentToDisclosure: z.boolean().refine((val) => val === true, {
        message: 'You must consent to the use and disclosure of your health information',
    }),
    agreeToPrivacyPolicy: z.boolean().refine((val) => val === true, {
        message: 'You must agree to the privacy policy',
    }),
});
