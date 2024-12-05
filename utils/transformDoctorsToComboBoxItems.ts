import { ComboBoxItem } from '@/interfaces/ComboBoxItem.interface';
import { Doctor } from '@/interfaces/Doctor.interface';

export function transformDoctorsToComboBoxItems(doctors: Doctor[]): ComboBoxItem[] {
    return doctors.map((doctor) => ({
        value: doctor.name.replace(/[\s.]+/g, '-').toLowerCase(),
        label: doctor.name,
        picturePath: `/doctorsPic/${doctor.picturePath}`,
    }));
}
