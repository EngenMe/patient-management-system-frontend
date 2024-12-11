export interface NewAppointment {
    doctor: string;
    patientId: number;
    reasonForAppointment: string;
    additionalComments?: string;
    expectedAppointmentDate: Date;
    expectedAppointmentTime: string;
}
