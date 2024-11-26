import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
    children: string;
    href?: string;
    isPulse?: boolean;
}

const Footer = ({ children, href = '', isPulse = false }: Props) => {
    return (
        <h2 className={cn(isPulse && 'animate-pulse', 'font-normal size-4 leading-6 text-accent-foreground w-auto')}>
            {href ? (
                <Link href={href} target="_blank">
                    {children}
                </Link>
            ) : (
                children
            )}
        </h2>
    );
};
export default Footer;
