import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

interface Props {
    picturePath?: string;
    label: string;
}

const Badge = ({ picturePath, label }: Props) => {
    return (
        <div className="flex items-center w-auto h-8 rounded-[5px] border p-3 gap-[6px] font-semibold text-xs leading-[18px] text-foreground bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00]">
            {picturePath && (
                <Avatar className="w-6 h-6">
                    <AvatarImage src={picturePath} alt={label} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            )}
            {label}
        </div>
    );
};

export default Badge;
