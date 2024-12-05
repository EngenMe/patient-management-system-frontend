interface Props {
    children: string;
}

const Paragraph2 = ({ children }: Props) => {
    return <p className="font-medium text-base text-muted-foreground">{children}</p>;
};
export default Paragraph2;
