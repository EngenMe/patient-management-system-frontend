import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Slash } from 'lucide-react';
import Paragraph2 from './MainPage/Paragraph2';
import Link from 'next/link';
import Paragraph1 from './MainPage/Paragraph1';

const BreadCrumb = () => {
    return (
        <div className="py-2 bg-input w-full flex items-center justify-center gap-10">
            <Paragraph1>You can navigate and discover from here 👉</Paragraph1>
            <Breadcrumb>
                <BreadcrumbList>
                    {/* Main */}
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            <Paragraph2>Main</Paragraph2>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    {/* Home */}
                    <BreadcrumbItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1">
                                <Paragraph2>Home</Paragraph2>
                                <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="rounded-xl">
                                <DropdownMenuItem>
                                    <Link href="/home">
                                        <Paragraph2>Home</Paragraph2>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/patients/new">
                                        <Paragraph2>New Patient</Paragraph2>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/admin/login">
                                        <Paragraph2>Admin Login</Paragraph2>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="https://engenme.github.io/" target="_blank">
                                        <Paragraph2>Developer</Paragraph2>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    {/* Dashboard */}
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <Link href="/success">
                                <Paragraph2>Success Page</Paragraph2>
                            </Link>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    {/* Admin Dashboard */}
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <Link href="/admin/dashboard">
                                <Paragraph2>Admin Dashboard</Paragraph2>
                            </Link>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    {/* API Docs */}
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/api-docs`} target="_blank">
                                <Paragraph2>API Docs</Paragraph2>
                            </Link>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};
export default BreadCrumb;
