import { z } from 'zod';

const startAt = 5;
const finishAt = 17;

export const newAppointmentSchema = z.object({
    doctor: z
        .string()
        .min(5, 'Doctor must be at least 5 characters long')
        .max(50, 'Doctor must be less than 50 characters long'),
    patientId: z
        .number()
        .int('Patient ID must be an integer')
        .positive('Patient ID must be a positive number')
        .refine((id) => id > 0, 'Patient ID must be greater than 0'),
    reasonForAppointment: z
        .string()
        .min(10, 'Reason for appointment must be at least 10 characters long')
        .max(200, 'Reason for appointment must be less than 200 characters long'),
    additionalComments: z.string().max(300, 'Additional comments must be less than 300 characters long').optional(),
    expectedAppointmentDate: z.date().refine(
        (date) => {
            const today = new Date();
            const threeMonthsLater = new Date();
            threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
            return date >= today && date <= threeMonthsLater;
        },
        {
            message: 'Date must be between today and the next 3 months',
        }
    ),
    expectedAppointmentTime: z
        .string()
        .regex(/^([0-1]\d|2[0-3]):[0-5]\d$/, 'Invalid time format (must be HH:mm)')
        .refine((time) => {
            const [hours] = time.split(':').map(Number);
            return hours >= startAt && hours < finishAt;
        }, 'Appointment time must be between 09:00 and 17:00'),
});
