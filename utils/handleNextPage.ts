import { Dispatch, SetStateAction } from 'react';

export const handleNextPage = (page: number, totalPages: number, setPage: Dispatch<SetStateAction<number>>) => {
    if (page < totalPages) {
        setPage(page + 1);
    }
};
