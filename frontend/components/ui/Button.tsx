export default function Button({ children, className, onClick, type } : { children: React.ReactNode, className: string, onClick?: () => void, type?: "button" | "submit" | "reset" }) {
    return (
        <button className={`flex justify-center items-center p-3 cursor-pointer ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

