export default function Button({ children, className, onClick } : { children: React.ReactNode, className: string, onClick?: () => void }) {
    return (
        <button className={`flex justify-center items-center p-3 cursor-pointer ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

