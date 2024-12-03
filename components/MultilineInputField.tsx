import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { Label } from './ui/label';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, id, label, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-4">
            <Label htmlFor={id} className="font-medium text-sm text-muted-foreground">
                {label}
            </Label>
            <textarea
                id={id}
                className={cn(
                    'flex min-h-[100px] w-full rounded-[8px] border border-border bg-input px-4 py-2 text-base text-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                ref={ref}
                {...props}
            />
        </div>
    );
});

Textarea.displayName = 'Textarea';
export { Textarea };
