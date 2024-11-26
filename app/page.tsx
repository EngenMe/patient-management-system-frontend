import { Input } from '@/components/InputField';
import { UserRound } from 'lucide-react';

export default function Home() {
    return (
        <div className="p-40 w-1/2">
            <Input id="fullName" type="text" placeholder="email@g.c" icon={UserRound} label="Full name" />
        </div>
    );
}

// <Logo />
// <Header1>header1</Header1>
// <Paragraph1>paragraph1</Paragraph1>
// <Input id="fullName" type="text" placeholder="email@g.c" icon={UserRound} label="Full name" />
