import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SuccessPageStore {
    doctorName: string;
    expectedAppointmentDate: string;
    expectedAppointmentTime: string;
    setSuccessData: (data: {
        doctorName: string;
        expectedAppointmentDate: string;
        expectedAppointmentTime: string;
    }) => void;
    clearSuccessData: () => void;
}

const customStorage = {
    getItem: (name: string) => {
        const value = localStorage.getItem(name);
        return value ? JSON.parse(value) : null;
    },
    setItem: (name: string, value: unknown) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name: string) => {
        localStorage.removeItem(name);
    },
};

export const useSuccessPageStore = create(
    persist<SuccessPageStore>(
        (set) => ({
            doctorName: '',
            expectedAppointmentDate: '',
            expectedAppointmentTime: '',
            setSuccessData: (data) => set(data),
            clearSuccessData: () => set({ doctorName: '', expectedAppointmentDate: '', expectedAppointmentTime: '' }),
        }),
        {
            name: 'success-page-store',
            storage: customStorage,
        }
    )
);
