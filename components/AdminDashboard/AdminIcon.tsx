import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface Props {
    picturePath: string;
    adminName: string;
}

const AdminIcon = ({ picturePath, adminName }: Props) => {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
                <AvatarImage src={picturePath} alt={adminName + 'icon'} />
                <AvatarFallback>{adminName.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="font-semibold">Admin</div>
        </div>
    );
};
export default AdminIcon;
