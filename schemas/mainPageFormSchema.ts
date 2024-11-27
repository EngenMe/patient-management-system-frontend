import { z } from 'zod';

export const mainPageFormSchema = z.object({
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
});
