export interface Appointment {
    id: number;
    patientName: string;
    dateAndTime: string;
    status: 'scheduled' | 'pending' | 'cancelled';
    doctorName: string;
    doctorPicturePath: string;
}
