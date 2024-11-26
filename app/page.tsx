import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="p-40 w-1/2">
            <Footer href="https://engenme.github.io/" isPulse={true}>
                Made by EngenMe
            </Footer>
        </div>
    );
}

// <Logo />
// <Header1>header1</Header1>
// <Paragraph1>paragraph1</Paragraph1>
// <Input id="fullName" type="text" placeholder="email@g.c" icon={UserRound} label="Full name" />
// <PrimaryButton>Get Started</PrimaryButton>
