import SideBar from "@/components/admin/SideBar";
import { Suspense } from "react";

interface AdminLayoutProps {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}

async function AsyncSideBar({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <SideBar slug={slug} />;
}

export default function AdminLayout({ children, params }: AdminLayoutProps) {
    return (
        <div className="flex min-h-screen bg-background">
            <Suspense fallback={<div className="w-64 min-h-screen bg-green-900" />}>
                <AsyncSideBar params={params} />
            </Suspense>

            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
