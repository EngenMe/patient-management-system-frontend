interface Props {
    children: string;
}

const Header1 = ({ children }: Props) => {
    return <h1 className="w-full font-bold text-4xl leading-[44px] text-foreground">{children}</h1>;
};
export default Header1;
