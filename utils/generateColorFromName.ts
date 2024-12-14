export const generateColorFromName = (name: string): string => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `#${((hash >> 24) & 0xff).toString(16).padStart(2, '0')}${((hash >> 16) & 0xff)
        .toString(16)
        .padStart(2, '0')}${((hash >> 8) & 0xff).toString(16).padStart(2, '0')}`.slice(0, 7);

    return color;
};
