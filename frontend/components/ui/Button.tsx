export default function Button({ children, className, onClick, type, title } : { children: React.ReactNode, className: string, onClick?: () => void, type?: "button" | "submit" | "reset", title?: string }) {
    return (
        <button className={`flex justify-center items-center p-3 ${className}`} onClick={onClick} title={title}>
            {children}
        </button>
    )
}

