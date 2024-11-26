import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { forwardRef } from 'react';
import { Label } from './ui/label';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon;
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, icon: Icon, id, label, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-4">
            <Label htmlFor={id} className="font-medium text-sm text-muted-foreground">
                {label}
            </Label>
            <div className="relative flex flex-col items-center justify-center w-full" id={id}>
                {Icon && (
                    <div className="absolute left-3">
                        <Icon size={18} className="text-accent-foreground" />
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        'flex h-12 w-full rounded-[8px] border border-border bg-input px-4 text-base text-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                        Icon ? 'pl-10' : '',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        </div>
    );
});

Input.displayName = 'Input';
export { Input };
