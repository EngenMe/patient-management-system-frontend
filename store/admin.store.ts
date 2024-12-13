import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AdminStore {
    id: number;
    fullName: string;
    picturePath: string;
    setAdmin: (data: { id: number; picturePath: string; fullName: string }) => void;
    clearAdmin: () => void;
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

const useAdminStore = create(
    persist<AdminStore>(
        (set) => ({
            id: 0,
            picturePath: '',
            fullName: '',
            setAdmin: (data) => set(data),
            clearAdmin: () => set({ id: 0, picturePath: '', fullName: '' }),
        }),
        {
            name: 'admin-store',
            storage: customStorage,
        }
    )
);

export default useAdminStore;
