import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Header1 = ({ children }: Props) => {
    return <h1 className="font-bold text-4xl leading-[44px] text-foreground">{children}</h1>;
};
export default Header1;
