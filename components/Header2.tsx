interface Props {
    children: string;
}

const Header2 = ({ children }: Props) => {
    return <h2 className="font-bold text-3xl text-foreground">{children}</h2>;
};
export default Header2;
