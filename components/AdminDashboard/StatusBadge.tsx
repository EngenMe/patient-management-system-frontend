import { Appointment } from '@/interfaces/Appointment.interface';
import { Check, Hourglass, X, LucideIcon } from 'lucide-react';
import { Badge } from '../ui/badge';

interface Props {
    status: Appointment['status'];
}

const StatusBadge = ({ status }: Props) => {
    let Icon: LucideIcon;
    let color: string;
    let textColor: string;

    switch (status) {
        case 'scheduled':
            Icon = Check;
            color = '#0D2A1F';
            textColor = '#24AE7C';
            break;
        case 'pending':
            Icon = Hourglass;
            color = '#152432';
            textColor = '#79B5EC';
            break;
        case 'cancelled':
            Icon = X;
            color = '#3E1716';
            textColor = '#F37877';
            break;
        default:
            Icon = Hourglass;
            color = '#1A1A1A';
            textColor = '#fff';
            break;
    }

    return (
        <Badge
            style={{ backgroundColor: color, color: textColor }}
            className="inline-flex items-center gap-1 py-1 pr-3 pl-[6px] font-thin text-xs"
        >
            <Icon size={16} />
            <span className="capitalize">{status}</span>
        </Badge>
    );
};

export default StatusBadge;
