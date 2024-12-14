import { Appointment } from '@/interfaces/Appointment.interface';

interface Props {
    id: number;
    patientId: number;
    doctorId: number;
    expectedAppointmentDateAndTime: string;
    status: 'scheduled' | 'pending' | 'cancelled';
}

export const BuilAppointmentsArray = async (data: Props[]): Promise<Appointment[]> => {
    const appointments: Appointment[] = [];

    for (const item of data) {
        try {
            const patientResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/patients/${item.patientId}`);
            const patientData = await patientResponse.json();

            const doctorResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors/${item.doctorId}`);
            const doctorData = await doctorResponse.json();

            const appointment: Appointment = {
                id: item.id,
                patientName: patientData.patient.fullName,
                dateAndTime: item.expectedAppointmentDateAndTime,
                status: item.status,
                doctorName: doctorData.doctor.name,
                doctorPicturePath: doctorData.doctor.imageUrl,
            };

            appointments.push(appointment);
        } catch (error) {
            console.error(`Error fetching details for appointment ID ${item.id}:`, error);
        }
    }

    appointments.sort((a, b) => new Date(b.dateAndTime).getTime() - new Date(a.dateAndTime).getTime());

    return appointments;
};
