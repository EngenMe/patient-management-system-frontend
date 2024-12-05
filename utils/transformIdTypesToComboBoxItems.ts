import { ComboBoxItem } from '@/interfaces/ComboBoxItem.interface';
import { IdType } from '@/interfaces/IdType.interface';

export function transformIdTypesToComboBoxItems(idTypes: IdType[]): ComboBoxItem[] {
    return idTypes.map((idType) => ({
        value: idType.title
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-'),
        label: idType.title,
        picturePath: undefined,
    }));
}
