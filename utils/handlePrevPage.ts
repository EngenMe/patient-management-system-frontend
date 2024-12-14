import { Dispatch, SetStateAction } from 'react';

export const handlePrevPage = (page: number, totalPages: number, setPage: Dispatch<SetStateAction<number>>) => {
    if (page > 1) {
        setPage(page - 1);
    }
};
