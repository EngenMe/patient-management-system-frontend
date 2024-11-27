import { MainPageFormData } from '@/interfaces/MainPageFormData.interface';
import { create } from 'zustand';

interface PatientStore {
    patientData: MainPageFormData | null;
    setPatientData: (data: MainPageFormData) => void;
    clearPatientData: () => void;
}

export const usePatientStore = create<PatientStore>((set) => ({
    patientData: null,
    setPatientData: (data) => set({ patientData: data }),
    clearPatientData: () => set({ patientData: null }),
}));
