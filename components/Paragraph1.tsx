interface Props {
    children: string;
}

const Paragraph1 = ({ children }: Props) => {
    return <p className="font-medium text-lg text-muted-foreground">{children}</p>;
};
export default Paragraph1;
