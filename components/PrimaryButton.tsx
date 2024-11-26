import { Button } from './ui/button';

interface Props {
    children: string;
}

const PrimaryButton = ({ children }: Props) => {
    return (
        <Button className="w-full h-12 rounded-[8px] py-2 px-6 gap-3 font-semibold text-base text-foreground">
            {children}
        </Button>
    );
};
export default PrimaryButton;
