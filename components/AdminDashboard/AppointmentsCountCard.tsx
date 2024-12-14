import { LucideIcon } from 'lucide-react';

interface Props {
    icon: LucideIcon;
    total: number;
    text: string;
    color: string;
}

const AppointmentsCountCard = ({ icon: Icon, total, text, color }: Props) => {
    return (
        <div
            className="w-auto h-auto p-6 flex flex-col border border-border gap-6 rounded-xl bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
                boxShadow: `0 4px 20px 5px ${color}33`,
            }}
        >
            <div className="flex gap-[14px] items-center">
                <Icon style={{ color }} />
                <div className="font-bold text-[32px] leading-10 tracking-[0.15px]">{total}</div>
            </div>
            <div className="font-bold">{text}</div>
        </div>
    );
};
export default AppointmentsCountCard;
