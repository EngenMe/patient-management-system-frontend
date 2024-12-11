import { Button } from '../ui/button';

interface Props {
    children: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
}

const PrimaryButton = ({ children, type = 'button' }: Props) => {
    return (
        <Button type={type} className="w-full h-12 rounded-[8px] py-2 px-6 gap-3 font-semibold text-foreground">
            {children}
        </Button>
    );
};
export default PrimaryButton;
