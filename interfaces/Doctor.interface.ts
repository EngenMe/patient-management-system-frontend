import { Url } from 'url';

export interface Doctor {
    id: string;
    name: string;
    phone: string;
    email: string;
    speciality: string;
    imageUrl: Url;
    createdAt: Date;
    updatedAt: Date;
}
