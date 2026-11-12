import SideBar from "@/components/admin/SideBar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            <SideBar slug="padaria-do-ze" />
            
            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}