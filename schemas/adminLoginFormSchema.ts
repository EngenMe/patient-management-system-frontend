import { z } from 'zod';

export const adminLoginFormSchema = z.object({
    email: z.string().email('Invalid email address').max(100, 'Email must be less than 100 characters long'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(50, 'Password must be less than 50 characters long')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/\d/, 'Password must contain at least one number')
        .regex(/[\W_]/, 'Password must contain at least one special character'),
});
