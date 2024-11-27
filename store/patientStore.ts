import { MainPageFormData } from '@/interfaces/MainPageFormData.interface';
import { create } from 'zustand';

interface PatientStore {
    patientData: MainPageFormData | { fullName: ''; email: ''; phone: '' };
    setPatientData: (data: MainPageFormData) => void;
    clearPatientData: () => void;
}

export const usePatientStore = create<PatientStore>((set) => ({
    patientData: { fullName: '', email: '', phone: '' },
    setPatientData: (data) => set({ patientData: data }),
    clearPatientData: () => set({ patientData: { fullName: '', email: '', phone: '' } }),
}));
